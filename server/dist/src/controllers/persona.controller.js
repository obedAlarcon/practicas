"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPersona = exports.postPersona = exports.deletePersona = exports.getPersona = exports.getPersonas = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//obtenemos las personas
const getPersonas = (req, res) => {
    connection_1.default.query('SELECT * FROM personas', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
    //obtenemos la persona 
};
exports.getPersonas = getPersonas;
const getPersona = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM personas where id = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
    //se borra la persona
};
exports.getPersona = getPersona;
const deletePersona = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('delete from personas where id=?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "persona eliminada con exito"
        });
    });
    //se muestra la persona 
};
exports.deletePersona = deletePersona;
const postPersona = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO personas set ? ', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "persona guarada conexito"
        });
    });
    //update de la persona 
};
exports.postPersona = postPersona;
const putPersona = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE personas set ? WHERE id= ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "persona actualizada con exito"
        });
    });
};
exports.putPersona = putPersona;
