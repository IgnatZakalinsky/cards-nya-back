import {Request, Response} from "express";
import User, {IUser} from "../../a-2-models/user";
import {generateToken} from "./generateResetPasswordToken";
import {DEV_VERSION} from "../../../../cnb-1-main/config";

export const findUserByToken = (f: (req: Request, res: Response, user: IUser) => void, inTry: string, query?: boolean) =>
    async (req: Request, res: Response) => {
        const token = query ? req.query.token : req.body.token;

        try {
            const user: IUser | null = await User.findOne({token}).exec();

            if (!user || user.tokenDeathTime < new Date().getTime())
                res.status(401).json({error: 'bad token!', in: inTry + '/findUserByToken/User.findOne'});

            else {
                const [token, tokenDeathTime] = generateToken(user.rememberMe);

                try {
                    const newUser: IUser | null = await User.findByIdAndUpdate(
                        user._id,
                        {token, tokenDeathTime},
                        {new: true}
                    ).exec();

                    if (!newUser) res.status(500)
                        .json({error: 'not updated?', in: inTry + '/User.findByIdAndUpdate'});

                    else {
                        f(req, res, newUser._doc as IUser);

                    }
                } catch (e) {
                    res.status(500).json({
                        error: 'some error',
                        errorObject: DEV_VERSION && e,
                        in: inTry + '/User.findByIdAndUpdate'
                    });
                }
            }
        } catch (e) {
            res.status(500).json({
                error: 'some error',
                errorObject: DEV_VERSION && e,
                in: inTry + '/findUserByToken/User.findOne'
            });
        }
    };

export const status500 = (res: Response, e: any, user: IUser, inTry: string) => {
    res.status(500).json({
        error: 'some error',
        errorObject: DEV_VERSION && e,
        in: inTry,
        token: user.token,
        tokenDeathTime: user.tokenDeathTime,
    })
};
