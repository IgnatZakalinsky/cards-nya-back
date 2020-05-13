import {Request, Response} from "express";
import {IUser} from "../../../f-1-auth/a-2-models/user";
import CardsPack, {ICardsPack} from "../../c-2-models/cardsPack";
import {status400, status500} from "../../../f-1-auth/a-3-helpers/h-2-users/findUserByToken";
import Card, {ICard} from "../../c-2-models/card";

export const addCard = async (req: Request, res: Response, user: IUser) => {
    const {card, cardsPack_id} = req.body;
    const cardsPack_idF: string = cardsPack_id as string | undefined || '';

    if (!card) status400(res, `No cardsPack in body!`, user, 'addCard');

    else CardsPack.findById(cardsPack_idF)
        .exec()
        .then((oldCardsPack: ICardsPack | null) => {
            if (!oldCardsPack) status400(res, `CardsPack id not valid`, user, 'addCard');

            else {
                const answerF = card.answer || 'no answer';
                const questionF = card.question || 'no question';
                const typeF = card.type || 'card';
                const gradeF = isFinite(card.grade) ? +card.grade : 0;
                const shotsF = isFinite(card.shots) ? +card.shots : 0;

                if (gradeF > 5 || gradeF < 0) status400(res,
                    `CardsPack grade [${gradeF}] not valid! must be between 0 and 5...`, user, 'addCard');

                else Card.create({
                    cardsPack_id: cardsPack_idF,
                    answer: answerF,
                    question: questionF,
                    grade: gradeF,
                    shots: shotsF,

                    type: typeF,
                    rating: 0
                })
                    .then((newCard: ICard) => res.status(201).json({
                        newCard,
                        success: true,
                        token: user.token,
                        tokenDeathTime: user.tokenDeathTime
                    }))

                    .catch(e => status500(res, e, user, 'addCard/Card.create'));
            }
        })
        .catch(e => status500(res, e, user, 'addCard/CardsPack.findById'));
};
