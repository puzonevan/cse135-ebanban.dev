
import { postData, getData, deleteData, putData, checkCSS } from './helper.js';

let collectorHeaders = new Headers();
collectorHeaders.set("Content-Type", "application/javascript");


/**
 * Data Collection
 */
const collectStaticPerformance = async() => {
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

    console.log(staticData);
    console.log(performanceActivity);
    checkCSS();

    // Request to post data every 10 seconds
    // const intervalStatic = setInterval(() => {
    //     postData("https://ebanban.dev/api/static", staticData)
    //     .then(data => {
    //         console.log("Static data succesfully uploaded");
    //         clearInterval(intervalStatic);
    //     })
    //     .catch(error => {
    //         console.log("Server not running - can't upload static data");
    //     });
    // }, 10000);

    // // Request to post data every 10 seconds
    // const intervalPerf = setInterval(() => {
    //     postData("https://ebanban.dev/api/performance", performanceActivity)
    //     .then(data => {
    //         console.log("Performance data succesfully uploaded");
    //         clearInterval(intervalPerf);
    //     })
    //     .catch(error => {
    //         console.log("Server not running - can't upload performance data");
    //     });
    // }, 10000);

    

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

