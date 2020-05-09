import mongoose, {Schema, Document} from "mongoose";

export interface ICard extends Document {
    _id: mongoose.Types.ObjectId;
    cardsPack_id: mongoose.Types.ObjectId;

    question: string;
    answer: string;
    grade: number;

    type: string;
    rating: number;
    more_id: mongoose.Types.ObjectId;

    created: Date;
    updated: Date;

    _doc: object; // crutch
}

const Card: Schema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        grade: {
            type: Number,
            required: true
        },

        type: {
            type: String,
        },
        rating: {
            type: Number,
        },
        more_id: {
            type: Schema.Types.ObjectId,
        }

    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated',
        },
    }
);

export default mongoose.model<ICard>('cards-nya-pack', Card);
