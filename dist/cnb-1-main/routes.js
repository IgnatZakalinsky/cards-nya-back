"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const f_1_auth_1 = __importDefault(require("../cnb-2-features/f-1-auth"));
exports.routes = (app) => {
    app.use('/auth', f_1_auth_1.default);
    //default
    app.use((req, res) => {
        console.log('Nya-bad url: ', req.method, req.url);
        res.status(404).json({ error: 'bad url', method: req.method, url: req.url });
    });
};
//# sourceMappingURL=routes.js.map