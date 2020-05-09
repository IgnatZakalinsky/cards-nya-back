import express from "express";
import {getCardPacks} from "./c-1-controllers/getCardPacks";
import {findUserByToken} from "../f-1-auth/a-3-helpers/h-2-users/findUserByToken";
import {addCardsPack} from "./c-1-controllers/addCardsPack";
import {deleteCardsPack} from "./c-1-controllers/deleteCardsPack";

const cards = express.Router();

cards.get('/pack', findUserByToken(getCardPacks, 'getCardPacks', true));
cards.post('/pack', findUserByToken(addCardsPack, 'addCardsPack'));
cards.delete('/pack', findUserByToken(deleteCardsPack, 'deleteCardsPack', true));

export default cards;
