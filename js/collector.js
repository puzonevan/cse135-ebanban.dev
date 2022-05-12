
import { postData, getData, deleteData, putData } from './helper.js';
import { client } from './localmongo.js';

let collectorHeaders = new Headers();
collectorHeaders.set("Content-Type", "application/javascript");

async function listDatabases(client){
    databaselist = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databaselist.databases.forEach(db => console.log(`- ${db.name}`));
}

/**
 * Data Collection
 */
const collectStaticPerformance = () => {
    console.log("Hello World");

    let staticData = {
        "user-agent": navigator.userAgent, 
        "user-language": navigator.language, 
        "cookies-enabled": navigator.cookieEnabled, 
        "javascript-enabled": true, 
        "images-enabled": true, 
        "css-enabled": true, 
        "screen-dimension": `${window.screen.width}x${window.screen.height}`,
        "window-dimension": `${document.body.clientWidth}x${document.body.clientHeight}`,
        "network-connection": navigator.connection
    }

    const perf = performance.getEntriesByType("navigation");

    let performanceActivity = {
        "load-time": perf[0].toJSON(), 
        "total-time": perf[0].connectEnd - perf[0].connectStart
    }

    // Request to post data every 10 seconds
    const intervalStatic = setInterval(() => {
        postData("https://ebanban.dev/api/static", staticData)
        .then(data => {
            console.log("Static data succesfully uploaded");
            clearInterval(intervalStatic);
        })
        .catch(error => {
            console.log("Server not running - can't upload static data");
        });
    }, 10000);

    // Request to post data every 10 seconds
    const intervalPerf = setInterval(() => {
        postData("https://ebanban.dev/api/performance", performanceActivity)
        .then(data => {
            console.log("Performance data succesfully uploaded");
            clearInterval(intervalPerf);
        })
        .catch(error => {
            console.log("Server not running - can't upload performance data");
        });
    }, 10000);

    

    // local mongo 
    try{
        await client.connect();
        await listDatabases(client);
    }
    catch (e){
        console.error(e);
    }
    finally{
        client.close();
    }


}

const activity = {
    "mouse-cursor": [], 
    "mouse-clicks": [], 
    "mouse-scrolls": [], 
    "keyboard-events": [], 
    "idle-events": [], 
    "user-entered": {}, 
    "user-left": {}, 
    "user-page": "", 

}

window.onload = collectStaticPerformance();

const logMouse = (e) => {
    const mouseClick = {
        "x": e.clientX, 
        "y": e.clientY, 
        "button": e.button
    }
    activity["mouse-clicks"].push(mouseClick);
    console.log(activity);
}

window.addEventListener("mouseup", logMouse);

