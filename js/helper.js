const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';



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

async function listDatabases(client){
    databaselist = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databaselist.databases.forEach(db => console.log(`- ${db.name}`));
}

export const connectDatabase = async() => {
    const client = new MongoClient(uri);
    try{
        await client.connect();
        await listDatabases(client);
    }
    catch (e){
        console.error(e);
    }
    finally{
        client.close();
    }
}