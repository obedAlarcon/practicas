"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("../keys"));
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection(keys_1.default);
exports.default = connection;
