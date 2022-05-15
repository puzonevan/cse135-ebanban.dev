
import { postData, getData, deleteData, putData, checkCSS, checkImages } from './helper.js';
import { getSession, checkSession, setCookie } from './session.js';

let collectorHeaders = new Headers();
collectorHeaders.set("Content-Type", "application/javascript");


let sessionid = "-1";
// Check for cookies 
const retrieveCookie = async() => {
    if(checkSession()){
        sessionid = getSession();
    }else{
        await getData("https://ebanban.dev/api/static")
        .then(data => {
            sessionid = (data.length + 1).toString();
            setCookie(sessionid);
            console.log(getSession());
        })
        .catch(e => console.log(e));
    }
}



/**
 * Data Collection
 */
const collectStaticPerformance = async() => {

    let staticData = {
        "id": sessionid,
        "user-agent": navigator.userAgent, 
        "user-language": navigator.language, 
        "cookies-enabled": navigator.cookieEnabled, 
        "javascript-enabled": true, 
        "images-enabled": false, 
        "css-enabled": checkCSS(), 
        "screen-dimension": `${window.screen.width}x${window.screen.height}`,
        "window-dimension": `${document.body.clientWidth}x${document.body.clientHeight}`,
        "network-connection": navigator.connection
    }

    const perf = performance.getEntriesByType("navigation");

    let performanceActivity = {
        "id": sessionid,
        "load-time": perf[0].toJSON(), 
        "start": perf[0].connectStart, 
        "end": perf[0].connectEnd, 
        "total-time": perf[0].connectEnd - perf[0].connectStart
    }

    // Request to post data every 10 seconds
    const intervalStatic = setInterval(() => {
        staticData.id = sessionid;
        postData("https://ebanban.dev/api/static", staticData)
        .then(data => {
            console.log("Static data succesfully uploaded");
            console.log(data);
            clearInterval(intervalStatic);
        })
        .catch(error => {
            console.log("Server not running - can't upload static data");
        });
    }, 10000);

    // Request to post data every 10 seconds
    const intervalPerf = setInterval(() => {
        performanceActivity.id = sessionid;
        postData("https://ebanban.dev/api/performance", performanceActivity)
        .then(data => {
            console.log("Performance data succesfully uploaded");
            console.log(data);
            clearInterval(intervalPerf);
        })
        .catch(error => {
            console.log("Server not running - can't upload performance data");
        });
    }, 10000);


}

let idle = 0;
let moveidle = 0;
let scrollidle = 0;
let moveevent = {
    "type": "move", 
    "x": 0, 
    "y": 0
};
let clickevent = {
    "type": "click", 
    "button": 0
};
let scrollevent = {
    "type": "scroll", 
    "x": 0, 
    "y": 0
};

let pageinfo = {
    "enter": 0, 
    "leave": 0, 
    "page": "",
}


// User enters page
window.addEventListener("load", async() => {

    await retrieveCookie();

    console.log(sessionid);
    // Collect static and performance data 
    collectStaticPerformance();

    // Collect date user entered
    const enter = new Date().toString();
    // console.log(`User Entered: ${enter}`);
    pageinfo.enter = enter;

    // Collect page user is on 
    const currentpage = document.getElementsByTagName("title")[0].innerHTML;
    // console.log(`Page: ${page}`);
    pageinfo.page = currentpage 

    // Interval for checking idle time, move event, and scroll event
    // Checking every second
    const idleInterval = setInterval(() => {
        idle += 1;
        moveidle += 1;
        scrollidle += 1;

        if(moveidle > 2){
            // Post mouse event 
            
            moveidle = 0;
        }
        if(scrollidle > 2){
            // Post scroll event

            scrollidle = 0;
        }
    }, 1000);

});

// User leaves page
window.addEventListener('beforeunload', (e) =>{
    e.preventDefault();
    const leave = new Date().toString();
    // console.log(`User Leaves: ${leave}`);
    pageinfo.leave = leave;
});

window.addEventListener('mousemove', (e) =>{
    // console.log(`(${e.clientX}, ${e.clientY})`);

    // Idle time 0 because user activity 
    idle = 0;
    moveidle = 0;

    // Update object
    moveevent.x = e.clientX;
    moveevent.y = e.clientY;
});

window.addEventListener('click', (e) => {
    // console.log(e.button);

    // Idle time 0 because user activity
    idle = 0;

    // Update object
    clickevent.button = e.button;
});

window.addEventListener('scroll', (e) => {
    // console.log(`X: ${window.scrollX} Y: ${window.scrollY}`);

    // Idle time 0 because user activity 
    idle = 0;
    scrollidle = 0;

    // Update object
    scrollevent.x = window.scrollX;
    scrollevent.y = window.scrollY;
});
