"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getCardPacks_1 = require("./c-1-controllers/getCardPacks");
const findUserByToken_1 = require("../f-1-auth/a-3-helpers/h-2-users/findUserByToken");
const addCardsPack_1 = require("./c-1-controllers/addCardsPack");
const deleteCardsPack_1 = require("./c-1-controllers/deleteCardsPack");
const cards = express_1.default.Router();
cards.get('/pack', findUserByToken_1.findUserByToken(getCardPacks_1.getCardPacks, 'getCardPacks', true));
cards.post('/pack', findUserByToken_1.findUserByToken(addCardsPack_1.addCardsPack, 'addCardsPack'));
cards.delete('/pack', findUserByToken_1.findUserByToken(deleteCardsPack_1.deleteCardsPack, 'deleteCardsPack', true));
exports.default = cards;
//# sourceMappingURL=index.js.map