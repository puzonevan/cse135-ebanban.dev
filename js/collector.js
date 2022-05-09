
const sendData = (link, data) => {
    fetch(link, {
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log("Success"))
    .catch(error => console.log(error));
}
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

    sendData("https://ebanban.dev/api/static", static);

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
