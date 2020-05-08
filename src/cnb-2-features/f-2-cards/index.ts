import express from "express";
import {getCardPacks} from "./c-1-controllers/getCardPacks";
import {findUserByToken} from "../f-1-auth/a-3-helpers/h-2-users/findUserByToken";

const cards = express.Router();

cards.get('/pack', findUserByToken(getCardPacks, 'getCardPacks')); // for dev
//
// cards.post('/login', logIn);
// cards.post('/register', createUser);
// cards.post('/me', findUserByToken(getMe, 'getMe'));
// cards.post('/forgot', passwordRecovery);
// cards.post('/set-new-password', setNewPassword);

export default cards;
