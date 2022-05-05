
/**
 * Data Collection
 */

const collect = () => {
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

    let performance = {
        "load-time": {
            "time": window.performance,
            "start": window.performance.timing.domContentLoadedEventStart, 
            "end": window.performance.timing.domContentLoadedEventEnd, 
            "total": window.performance.timing.domContentLoadedEventEnd - window.performance.timing.domContentLoadedEventStart
        }
    }

    console.log(static);
    console.log(performance);
}

window.onload = collect();