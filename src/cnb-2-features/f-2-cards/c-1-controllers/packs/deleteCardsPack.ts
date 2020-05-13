import {Request, Response} from "express";
import {IUser} from "../../../f-1-auth/a-2-models/user";
import {status400, status500} from "../../../f-1-auth/a-3-helpers/h-2-users/findUserByToken";
import CardsPack, {ICardsPack} from "../../c-2-models/cardsPack";

export const deleteCardsPack = async (req: Request, res: Response, user: IUser) => {
    const {id} = req.query;

    if (!id) status400(res, `No CardsPack id`, user, 'deleteCardsPack');

    else CardsPack.findByIdAndDelete(id)
        .exec()
        .then((cardsPack: ICardsPack | null) => {
            if (!cardsPack) status400(res, `CardsPack id not valid`, user, 'deleteCardsPack');

            else res.status(200).json({
                deletedCardsPack: cardsPack,
                success: true,
                token: user.token,
                tokenDeathTime: user.tokenDeathTime
            })
        })
        .catch(e => status500(res, e, user, 'deleteCardsPack/CardsPack.findByIdAndDelete'));
}
