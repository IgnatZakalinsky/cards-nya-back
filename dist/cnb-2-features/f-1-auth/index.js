"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getUsersForDev_1 = require("./a-1-controllers/getUsersForDev");
const logIn_1 = require("./a-1-controllers/logIn");
const createUser_1 = require("./a-1-controllers/createUser");
const getMe_1 = require("./a-1-controllers/getMe");
const passwordRecovery_1 = require("./a-1-controllers/passwordRecovery");
const setNewPassword_1 = require("./a-1-controllers/setNewPassword");
const findUserByToken_1 = require("./a-3-helpers/h-2-users/findUserByToken");
const updateUser_1 = require("./a-1-controllers/updateUser");
const auth = express_1.default.Router();
auth.get('/', getUsersForDev_1.getUsersForDev); // for dev
auth.post('/login', logIn_1.logIn);
auth.post('/register', createUser_1.createUser);
auth.post('/me', findUserByToken_1.findUserByToken(getMe_1.getMe, 'getMe'));
auth.put('/me', findUserByToken_1.findUserByToken(updateUser_1.updateUser, 'updateUser'));
auth.post('/forgot', passwordRecovery_1.passwordRecovery);
auth.post('/set-new-password', setNewPassword_1.setNewPassword);
exports.default = auth;
//# sourceMappingURL=index.js.map