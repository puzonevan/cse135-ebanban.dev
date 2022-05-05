
/**
 * Data Collection
 */

const collect = () => {
    console.log("Hello World");

    let static = {
        "user-agent": navigator.userAgent, 
        "user-language": navigator.language, 
        "cookies-enabled": navigator.cookieEnabled
    }

    console.log(static);
}

window.onload = collect();