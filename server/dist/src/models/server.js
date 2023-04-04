"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const persona_routes_1 = __importDefault(require("../routes/persona.routes"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.middlewares();
        this.routes();
        this.conectarDB();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("esta aplicacion e sta corriendo por el puerto  " + this.port);
        });
    }
    middlewares() {
        //parceo del body
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/api/personas', persona_routes_1.default);
    }
    conectarDB() {
        connection_1.default.connect((error) => {
            if (error)
                throw error;
            console.log("Conecion a la base de datos exitosa");
        });
    }
}
exports.default = Server;
