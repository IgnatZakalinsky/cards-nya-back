import {Request, Response} from "express";
import {IUser} from "../../../f-1-auth/a-2-models/user";
import {status400, status500} from "../../../f-1-auth/a-3-helpers/h-2-users/findUserByToken";
import Card, {ICard} from "../../c-2-models/card";

export const deleteCard = async (req: Request, res: Response, user: IUser) => {
    const {id} = req.query;

    if (!id) status400(res, `No Card id`, user, 'deleteCard');

    else Card.findById(id)
        .exec()
        .then((cardF: ICard | null) => {
            if (!cardF) status400(res, `Card id not valid`, user, 'deleteCard/Card.findById');

            else if (!cardF.user_id.equals(user._id)) status400(res, `not your Card`, user, 'deleteCard');

            else Card.findByIdAndDelete(id)
                    .exec()
                    .then((card: ICard | null) => {
                        if (!card)
                            status400(res, `Card id not valid`, user, 'deleteCard/Card.findByIdAndDelete');

                        else res.status(200).json({
                            deletedCard: card,
                            success: true,
                            token: user.token,
                            tokenDeathTime: user.tokenDeathTime
                        })
                    })
                    .catch(e => status500(res, e, user, 'deleteCard/Card.findByIdAndDelete'));
        })
        .catch(e => status500(res, e, user, 'deleteCard/Card.findById'));
};
