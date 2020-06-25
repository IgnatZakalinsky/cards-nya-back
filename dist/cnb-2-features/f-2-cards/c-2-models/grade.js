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
const Grade = new mongoose_1.Schema({
    card_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    cardsPack_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    shots: {
        type: Number,
        required: true
    },
    more_id: {
        type: mongoose_1.Schema.Types.ObjectId,
    }
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated',
    },
});
exports.default = mongoose_1.default.model('cards-nya-grade', Grade);
//# sourceMappingURL=grade.js.map