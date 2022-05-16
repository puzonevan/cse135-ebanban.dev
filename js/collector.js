
import { postData, getData, deleteData, putData, checkCSS, checkImages } from './helper.js';
import { getSession, checkSession, setCookie } from './session.js';

let collectorHeaders = new Headers();
collectorHeaders.set("Content-Type", "application/javascript");

const url = "https://ebanban.dev/api"

let staticData = {
    "id": -1, 
    "data": [
        {
            "user-agent": navigator.userAgent, 
            "user-language": navigator.language, 
            "cookies-enabled": navigator.cookieEnabled, 
            "javascript-enabled": true, 
            "images-enabled": false, 
            "css-enabled": checkCSS(), 
            "screen-dimension": `${window.screen.width}x${window.screen.height}`,
            "window-dimension": `${document.body.clientWidth}x${document.body.clientHeight}`,
            "network-connection": navigator.connection.effectiveType
        }
    ]  
}

const perf = performance.getEntriesByType("navigation");
let performanceData = {
    "id": -1, 
    "data": [
        {
            "load-time": perf[0].toJSON(), 
            "start": perf[0].connectStart, 
            "end": perf[0].connectEnd, 
            "total-time": perf[0].connectEnd - perf[0].connectStart
        }
    ]
}

let activityData = {
    "id": -1, 
    "mouse": [], 
    "keyboard": [],
    "idle": [], 
    "pageinfo": []
}


let sessionid = "-1";
// Setup session 
const setupSession = async() => {
    // If a session already exists
    if(checkSession()){

        // Retrieve the session id
        sessionid = getSession();

        // Update global static data to id
        await getData(`${url}/static/${sessionid}`)
        .then(data => {
            staticData.id = data.id;
            data.data.push(staticData.data[0]);
            staticData.data = data.data;
        });
        // Update performance data to id
        await getData(`${url}/performance/${sessionid}`)
        .then(data => {
            performanceData.id = data.id;
            data.data.push(performanceData.data[0])
            performanceData.data = data.data;
        });
        // Update activity data to id
        await getData(`${url}/activity/${sessionid}`)
        .then(data => {
            activityData.id = data.id;
            activityData.mouse = data.mouse;
            activityData.keyboard = data.keyboard;
            activityData.idle = data.idle;
            activityData.pageinfo = data.pageinfo;
        });

        const intervalStatic = setInterval(() => {
            putData(`${url}/static/${sessionid}`, staticData)
            .then(data => {
                console.log("Static data succesfully uploaded");
                clearInterval(intervalStatic);
            })
            .catch(error => {
                console.log("Server not running - can't upload static data");
            });
        }, 10000);
    
        const intervalPerf = setInterval(() => {
            putData(`${url}/performance/${sessionid}`, performanceData)
            .then(data => {
                console.log("Performance data succesfully uploaded");
                clearInterval(intervalPerf);
            })
            .catch(error => {
                console.log("Server not running - can't upload performance data");
            });
        }, 10000);
    
        const intervalActivity = setInterval(() => {
            putData(`${url}/activity/${sessionid}`, activityData)
            .then(data => {
                console.log("Activity data succesfully uploaded");
                clearInterval(intervalActivity);
            })
            .catch(error => {
                console.log("Server not running - can't upload activity data");
            });
        }, 10000);
    }
    // Else, set up a new session 
    else{
        await getData("https://ebanban.dev/api/static")
        .then(data => {
            sessionid = (data.length + 1).toString();
        })
        .then(() => {
            setCookie(sessionid);

            // Update the id of each data
            staticData.id = sessionid;
            performanceData.id = sessionid;
            activityData.id = sessionid;

        })
        .catch(e => console.log(e));
        
        const intervalStatic = setInterval(() => {
            postData(`${url}/static`, staticData)
            .then(data => {
                console.log("Static data succesfully uploaded");
                clearInterval(intervalStatic);
            })
            .catch(error => {
                console.log("Server not running - can't upload static data");
            });
        }, 10000);
    
        const intervalPerf = setInterval(() => {
            postData(`${url}/performance`, performanceData)
            .then(data => {
                console.log("Performance data succesfully uploaded");
                clearInterval(intervalPerf);
            })
            .catch(error => {
                console.log("Server not running - can't upload performance data");
            });
        }, 10000);
    
        const intervalActivity = setInterval(() => {
            postData(`${url}/activity`, activityData)
            .then(data => {
                console.log("Activity data succesfully uploaded");
                clearInterval(intervalActivity);
            })
            .catch(error => {
                console.log("Server not running - can't upload activity data");
            });
        }, 10000);
    }

    
    
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
};
let keyevent = {
    "key": ""
}
let idleevent = {
    "end": "", 
    "length": 0
}

// User enters page
window.addEventListener("load", async() => {

    await setupSession();

    console.log(sessionid);

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
            // Update data, make request, and set move to 0 
            activityData.mouse.push(moveevent);
            putData(`${url}/activity/${sessionid}`, activityData)
            moveidle = 0;
        }
        if(scrollidle > 2){
            // Update data, make request, and set scroll to 0 
            activityData.mouse.push(scrollevent);
            putData(`${url}/activity/${sessionid}`, activityData)
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

    // Update Activity Data
    activityData.pageinfo.push(pageinfo);

    // Make Request 
    putData(`${url}/activity/${sessionid}`, activityData)
});

// Mouse move
window.addEventListener('mousemove', (e) =>{
    // Debug
    // console.log(`(${e.clientX}, ${e.clientY})`);

    if(idle > 2){
        idleevent.date = new Date().toString();
        idleevent.length = idle;
        activityData.idle.push(idleevent);
        putData(`${url}/activity/${sessionid}`, activityData);
    }
    // Idle time 0 because user activity 
    idle = 0;
    moveidle = 0;

    // Update object
    moveevent.x = e.clientX;
    moveevent.y = e.clientY;
});

// Mouse clicks
window.addEventListener('click', (e) => {
    // Debug
    // console.log(e.button);

    if(idle > 2){
        idleevent.date = new Date().toString();
        idleevent.length = idle;
        activityData.idle.push(idleevent);
        putData(`${url}/activity/${sessionid}`, activityData);
    }
    // Idle time 0 because user activity
    idle = 0;

    // Update object
    clickevent.button = e.button;

    // Update activity data 
    activityData.mouse.push(clickevent);

    // Make Request
    putData(`${url}/activity/${sessionid}`, activityData);
});

// Scroll 
window.addEventListener('scroll', (e) => {
    // Debug
    // console.log(`X: ${window.scrollX} Y: ${window.scrollY}`);

    if(idle > 2){
        idleevent.date = new Date().toString();
        idleevent.length = idle;
        activityData.idle.push(idleevent);
        putData(`${url}/activity/${sessionid}`, activityData);
    }
    // Idle time 0 because user activity 
    idle = 0;
    scrollidle = 0;

    // Update object
    scrollevent.x = window.scrollX;
    scrollevent.y = window.scrollY;
});

// Keyboard
window.addEventListener('keyup', (e) => {

    if(idle > 2){
        idleevent.date = new Date().toString();
        idleevent.length = idle;
        activityData.idle.push(idleevent);
        putData(`${url}/activity/${sessionid}`, activityData);
    }
    idle = 0;

    // Update object
    keyevent.key = e.key;

    // Update activity data
    activityData.keyboard.push(keyevent);

    // Make Request
    putData(`${url}/activity/${sessionid}`, activityData);

});

