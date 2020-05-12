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
const findUserByToken_1 = require("../../f-1-auth/a-3-helpers/h-2-users/findUserByToken");
const cardsPack_1 = __importDefault(require("../c-2-models/cardsPack"));
exports.deleteCardsPack = (req, res, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    if (!id)
        findUserByToken_1.status400(res, `No CardsPack id`, user, 'deleteCardsPack');
    else
        cardsPack_1.default.findByIdAndDelete(id)
            .exec()
            .then((cardsPack) => {
            if (!cardsPack)
                findUserByToken_1.status400(res, `CardsPack id not valid`, user, 'deleteCardsPack');
            else
                res.status(200).json({
                    deletedCardsPack: cardsPack,
                    success: true,
                    token: user.token,
                    tokenDeathTime: user.tokenDeathTime
                });
        })
            .catch(e => findUserByToken_1.status500(res, e, user, 'deleteCardsPack/CardsPack.findByIdAndDelete'));
});
//# sourceMappingURL=deleteCardsPack.js.map