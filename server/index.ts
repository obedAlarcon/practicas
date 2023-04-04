import Server from "./src/models/server";

import dotenv from "dotenv";


dotenv.config();

export const server = new Server();