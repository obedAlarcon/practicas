import keys from "../keys";
import mysql from "mysql";


const connection = mysql.createConnection(keys);

export default connection;