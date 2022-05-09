
import { postData, getData, deleteData, putData } from './helper.js';

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
        "window-dimension": `${window.screen.width}x${window.screen.height}`,
        "network-connection": navigator.connection
    }

    const perf = performance.getEntriesByType("navigation");

    let performanceActivity = {
        "load-time": perf[0].toJSON(), 
        "total-time": perf[0].connectEnd - perf[0].connectStart
    }

    console.log(staticData);
    console.log(performanceActivity);

    const intervalID = setInterval(() => {
        postData("https://ebanban.dev/api/static", staticData)
        .then(data => {
            console.log("Static and performance data succesfully uploaded");
            clearInterval(intervalID);
        })
        .catch(error => {
            console.log("Server not running - can't static and performance data");
        });
    }, 10000);

    // fetch("https://ebanban.dev/api/static/1")
    // .then(response => response.json())
    // .then(data => {
    //     console.log(`Success:`);
    //     console.log(data);
    // });

    // postData("https://ebanban.dev/api/static", staticData)
    // .then(data => {
    //     console.log("Success");
    //     console.log(data)
    // });

    // getData("https://ebanban.dev/api/static")
    // .then(data => {
    //     console.log("Get Success");
    //     console.log(data);
    // });

    // getData("https://ebanban.dev/api/static/1")
    // .then(data => {
    //     console.log("Get Success");
    //     console.log(data);
    // });


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

