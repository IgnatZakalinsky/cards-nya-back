"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const findUserByToken_1 = require("../f-1-auth/a-3-helpers/h-2-users/findUserByToken");
const getUsers_1 = require("./s-1-controllers/getUsers");
const addGeneralMessage_1 = require("./s-1-controllers/addGeneralMessage");
const social = express_1.default.Router();
social.get('/users', findUserByToken_1.findUserByToken(getUsers_1.getUsers, 'getUsers', true));
social.post('/general/message', findUserByToken_1.findUserByToken(addGeneralMessage_1.addGeneralMessage, 'addGeneralMessage'));
exports.default = social;
//# sourceMappingURL=index.js.map