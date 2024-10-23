import { Databases, ID } from "appwrite";
import client from "./config";
import { appwrite } from "../env";

const databases = new Databases(client);

const db = {};

db["shareCode"] = {

    createDocument: async (payload) => {
        try {
            const response = await databases.createDocument(
                appwrite.databaseID,
                appwrite.collectionID,
                ID.unique(),
                payload
            );
            return response;
        } catch (error) {
            console.error("Error creating document:", error);
            return null;
        }
    },

    getDocument: async (documentID) => {
        try {
            const response = await databases.getDocument(
                appwrite.databaseID,
                appwrite.collectionID,
                documentID
            );
            return response;
        } catch (error) {
            console.error("Error getting document:", error);
            return null;
        }
    },

}

export default db;