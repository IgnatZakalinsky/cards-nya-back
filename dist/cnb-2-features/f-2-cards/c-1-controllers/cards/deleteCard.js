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
const findUserByToken_1 = require("../../../f-1-auth/a-3-helpers/h-2-users/findUserByToken");
const card_1 = __importDefault(require("../../c-2-models/card"));
exports.deleteCard = (req, res, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    if (!id)
        findUserByToken_1.status400(res, `No Card id`, user, 'deleteCard');
    else
        card_1.default.findById(id)
            .exec()
            .then((cardF) => {
            if (!cardF)
                findUserByToken_1.status400(res, `Card id not valid`, user, 'deleteCard/Card.findById');
            else if (!cardF.user_id.equals(user._id))
                findUserByToken_1.status400(res, `not your Card`, user, 'deleteCard');
            else
                card_1.default.findByIdAndDelete(id)
                    .exec()
                    .then((card) => {
                    if (!card)
                        findUserByToken_1.status400(res, `Card id not valid`, user, 'deleteCard/Card.findByIdAndDelete');
                    else
                        res.status(200).json({
                            deletedCard: card,
                            success: true,
                            token: user.token,
                            tokenDeathTime: user.tokenDeathTime
                        });
                })
                    .catch(e => findUserByToken_1.status500(res, e, user, 'deleteCard/Card.findByIdAndDelete'));
        })
            .catch(e => findUserByToken_1.status500(res, e, user, 'deleteCard/Card.findById'));
});
//# sourceMappingURL=deleteCard.js.map