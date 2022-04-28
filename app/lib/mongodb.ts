import { MongoClient } from 'mongodb';

const DB_URI: string = process.env.DB_URI;
const DB_NAME: string = process.env.DB_NAME;

if (!DB_URI) {
    throw new Error("Define an environmental variable for the MongoDB URI");
}

if (!DB_NAME) {
    throw new Error("Define an environmental variable for the MongoDB database name")
}

export async function connectDatabase() {
    let client = new MongoClient(DB_URI);
    await client.connect();
    let db = client.db(DB_NAME);

    return {
        client,
        db
    }
}