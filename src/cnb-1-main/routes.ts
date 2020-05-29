import {Express, Request, Response} from "express";
import auth from "../cnb-2-features/f-1-auth";
import cards from "../cnb-2-features/f-2-cards";
import {VERSION_1_0} from "./config";
import social from "../cnb-2-features/f-3-social";

export const routes = (app: Express) => {
    app.use(VERSION_1_0 + '/auth', auth);
    app.use(VERSION_1_0 + '/cards', cards);
    app.use(VERSION_1_0 + '/social', social);

    //default
    app.use((req: Request, res: Response) => {
        console.log('Nya-bad url: ', req.method, req.url);
        res.status(404).json({
            error: 'bad url',
            method: req.method,
            url: req.url,
            query: req.query,
            body: req.body,
        });
    });
};
