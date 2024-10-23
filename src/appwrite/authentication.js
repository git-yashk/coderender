import { Account, ID } from "appwrite";
import client from "./config";

const account = new Account(client);

async function emailAuth(email) {
    try {
        const sessionToken = await account.createEmailToken(
            ID.unique(),
            'email@example.com'
        );
        return sessionToken.userId;
    } catch (error) {
        console.error("Error creating email token:", error);
        return null;
    }
}

async function verifyToken(userId, secret) {
    try {
        const session = await account.createSession(
            userId,
            secret
        );
        return session;
    } catch (error) {
        console.error("Error verifying token:", error);
        return null;
    }
}

async function getCurrentUser() {
    try {
        const user = await account.get();
        return user;
    } catch (error) {
        console.error("Error getting current user:", error);
        return null;
    }
}

export { emailAuth, verifyToken, getCurrentUser };