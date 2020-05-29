"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const GeneralChatMessageSchema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    message: {
        type: String,
        required: true
    },
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated',
    },
});
exports.default = mongoose_1.default.model('general-nya-chat-message', GeneralChatMessageSchema);
//# sourceMappingURL=generalChatMessage.js.map