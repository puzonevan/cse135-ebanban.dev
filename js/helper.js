export const postData = async(url, data) => {
    const response = await fetch(url, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const getData = async(url) => {
    const response = await fetch(url);
    return response.json();
}

export const deleteData = async(url) => {
    const response = await fetch(url, {
        method: "DELETE"
    });
    return response.json();
}

export const putData = async(url, data) =>{
    const response = await fetch(url, {
        method: "PUT", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}


export const checkCSS = () => {
    const div = document.createElement("div");
    div.setAttribute("hidden", "true");
    div.setAttribute("id", "test");
    div.style.width = "10px";
    document.body.appendChild(div);

    if(document.getElementById("test").style.width == "10px"){
        document.body.removeChild(document.getElementById("test"));
        return true;
    }
    else{
        return false;
    }
}

export const checkImages = () => {
    const image = document.createElement("img");
    image.setAttribute("src", "../hw3/images/postman.png");
    // image.setAttribute("hidden", "true");
    image.setAttribute("id", "image-test");
    document.body.appendChild(image);

    if(document.getElementById("image-test").complete && document.getElementById("image-test").naturalHeight !== 0){
        document.body.removeChild(document.getElementById("image-test"));
        return true;
    }
    else{
        return false;
    }
}
