let cookies = new Map(
    document.cookie.split(' ').map(cookie => [cookie.split("=")[0], cookie.split("=")[1]])
);


export const checkSession = () => {
    return [...cookies.keys()].includes("sessid") ? true : false;
};

export const getSession = () => {
    return cookies.get("sessid");
};

export const setCookie = (sessionid) => {
    const date = new Date();
    date.setHours(date.getHours() + 4);
    let expire = `expires=${date.toUTCString()}`;
    document.cookie = `sessid=${sessionid};${expire}`;
}