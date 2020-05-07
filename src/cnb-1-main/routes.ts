import {Express, Request, Response} from "express";
import auth from "../cnb-2-features/f-1-auth";

export const routes = (app: Express) => {
    app.use('/auth', auth);

    //default
    app.use((req: Request, res: Response) => {
        console.log('Nya-bad url: ', req.method, req.url);
        res.status(404).json({error: 'bad url', method: req.method, url: req.url});
    });
};
