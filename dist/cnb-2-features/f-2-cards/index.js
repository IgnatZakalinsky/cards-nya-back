"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getCardPacks_1 = require("./c-1-controllers/getCardPacks");
const findUserByToken_1 = require("../f-1-auth/a-3-helpers/h-2-users/findUserByToken");
const cards = express_1.default.Router();
cards.get('/pack', findUserByToken_1.findUserByToken(getCardPacks_1.getCardPacks, 'getCardPacks', true)); // for dev
//
// cards.post('/login', logIn);
// cards.post('/register', createUser);
// cards.post('/me', findUserByToken(getMe, 'getMe'));
// cards.post('/forgot', passwordRecovery);
// cards.post('/set-new-password', setNewPassword);
exports.default = cards;
//# sourceMappingURL=index.js.map