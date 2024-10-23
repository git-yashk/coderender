import { Client } from "appwrite";
import { appwrite } from "../env";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(appwrite.projectID);

export { client };