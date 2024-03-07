import {MongoClient} from 'mongodb';
const dbURL = 'mongodb://localhost:27017';
const dbName = 'testdb';
const collectionName = 'products';

const client = new MongoClient(dbURL);

async function connectDB() {
    const response = await client.connect();
    const resultFromDB = response.db(dbName);
    // if we have multiple collections in a database, you can return 
    // a promise from above line, and use this promise according to 
    // collections name from which collection you want to fetch data.
    return resultFromDB.collection(collectionName); //returns a promise
}

export default connectDB;