"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Request and Response are interfaces
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const loginRoutes_1 = require("./routes/loginRoutes");
const app = (0, express_1.default)(); //const app: Express
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ name: 'session', keys: ['anyString'] })); // the string in keys to encode the session.
app.use(loginRoutes_1.router);
app.listen(3000, () => {
    console.log('Listening on PORT 3000..');
});
