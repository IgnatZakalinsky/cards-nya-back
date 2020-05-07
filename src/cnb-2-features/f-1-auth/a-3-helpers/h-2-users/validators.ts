import {Request, Response} from "express";

const reg = /^[\w][\w-.]*@[\w-]+\.[a-z]{2,7}$/i;

export const emailValidator = (email: string): boolean => reg.test(email); // true - valid

export const passwordValidator = (password: string): boolean => password.length > 7; // true - valid

export const validateAnswer = (req: Request, res: Response, inInfo: string): boolean => {
    if (!emailValidator(req.body.email) || !passwordValidator(req.body.password)) {
        res.status(400).json(
            {
                error: 'not valid email/password',
                in: inInfo,
                email: emailValidator(req.body.email),
                password: passwordValidator(req.body.password),
                emailRegExp: '/^[\\w][\\w-.]*@[\\w-]+\\.[a-z]{2,7}$/i',
                passwordRegExp: 'Password must be more than 7 characters...',
            }
        );
        return false;
    } else return true
};
