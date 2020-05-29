"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../a-2-models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const validators_1 = require("../a-3-helpers/h-2-users/validators");
const config_1 = require("../../../cnb-1-main/config");
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (validators_1.validateAnswer(req, res, 'createUser')) {
        try {
            const user = yield user_1.default.create({
                email: req.body.email,
                password: yield bcrypt_1.default.hash(req.body.password, 10),
                rememberMe: false,
                isAdmin: false,
                name: req.body.email,
                verified: false,
                publicCardPacksCount: 0,
            });
            const addedUser = Object.assign({}, user._doc);
            delete addedUser.password; // don't send password to the front
            delete addedUser.resetPasswordToken;
            delete addedUser.resetPasswordTokenDeathTime;
            res.status(201).json({ addedUser, success: true });
        }
        catch (e) {
            res.status(500).json({
                error: 'some error',
                errorObject: config_1.DEV_VERSION && e,
                in: 'createUser/User.create'
            });
        }
    }
});
//# sourceMappingURL=createUser.js.map