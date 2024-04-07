
import { Db, MongoClient, Collection } from "mongodb";
import dotenv from "dotenv";
import News from "../models/news";

dotenv.config();

let db: Db;
let newsCollection: Collection<News>;

export async function connectToDatabase() {
    const dbConnString = process.env.DB_CONN_STRING;
    const dbName = process.env.DB_NAME;
    const collectionName = process.env.COLLECTION_NAME;

    if (!dbConnString || !dbName || !collectionName) {
        throw new Error("Database connection information is missing in environment variables");
    }

    const client = new MongoClient(dbConnString);

    try {
        await client.connect();
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        newsCollection = db.collection(collectionName);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export async function getAllNews(): Promise<News[]> {
    return await newsCollection.find().toArray();
}

