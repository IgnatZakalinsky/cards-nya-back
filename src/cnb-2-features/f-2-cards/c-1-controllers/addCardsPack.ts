import {Request, Response} from "express";
import {IUser} from "../../f-1-auth/a-2-models/user";
import CardsPack, {ICardsPack} from "../c-2-models/cardsPack";
import {status400, status500} from "../../f-1-auth/a-3-helpers/h-2-users/findUserByToken";

export const addCardsPack = async (req2: Request, res: Response, user: IUser) => {
    const {cardsPack} = req2.body;

    if (!cardsPack) status400(res, `No cardsPack in body!`, user, 'addCardsPack');

    else {
        const nameF = cardsPack.name || 'no Name';
        const pathF = cardsPack.path || '/def';
        const typeF = cardsPack.type || 'pack';
        const gradeF = isFinite(cardsPack.grade) ? +cardsPack.grade : 0;
        const shotsF = isFinite(cardsPack.shots) ? +cardsPack.shots : 0;

        if (gradeF > 5 || gradeF < 0) status400(res,
            `CardsPack grade [${gradeF}] not valid! must be between 0 and 5...`, user, 'addCardsPack');

        else CardsPack.create({
            user_id: user._id,
            name: nameF,
            path: pathF,
            grade: gradeF,
            shots: shotsF,
            type: typeF,
            rating: 0
        })
            .then((newCardsPack: ICardsPack) => res.status(201).json({
                newCardsPack,
                success: true,
                token: user.token,
                tokenDeathTime: user.tokenDeathTime
            }))

            .catch(e => status500(res, e, user, 'shopPost/Product.create'));
    }
};