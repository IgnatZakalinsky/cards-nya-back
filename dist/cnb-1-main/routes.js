"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const f_1_auth_1 = __importDefault(require("../cnb-2-features/f-1-auth"));
const f_2_cards_1 = __importDefault(require("../cnb-2-features/f-2-cards"));
const config_1 = require("./config");
exports.routes = (app) => {
    app.use(config_1.VERSION_1_0 + '/auth', f_1_auth_1.default);
    app.use(config_1.VERSION_1_0 + '/cards', f_2_cards_1.default);
    //default
    app.use((req, res) => {
        console.log('Nya-bad url: ', req.method, req.url);
        res.status(404).json({ error: 'bad url', method: req.method, url: req.url });
    });
};
//# sourceMappingURL=routes.js.map