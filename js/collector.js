
/**
 * Data Collection
 */

const collectStaticPerformance = () => {
    console.log("Hello World");

    let static = {
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

    console.log(static);
    console.log(performanceActivity);
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


window.addEventListener("mousemove", () => {
    
});