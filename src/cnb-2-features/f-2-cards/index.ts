import express from "express";
import {getCardPacks} from "./c-1-controllers/packs/getCardPacks";
import {findUserByToken} from "../f-1-auth/a-3-helpers/h-2-users/findUserByToken";
import {addCardsPack} from "./c-1-controllers/packs/addCardsPack";
import {deleteCardsPack} from "./c-1-controllers/packs/deleteCardsPack";
import {updateCardsPack} from "./c-1-controllers/packs/updateCardsPack";
import {getCards} from "./c-1-controllers/cards/getCards";
import {addCard} from "./c-1-controllers/cards/addCard";

const cards = express.Router();

cards.get('/pack', findUserByToken(getCardPacks, 'getCardPacks', true));
cards.post('/pack', findUserByToken(addCardsPack, 'addCardsPack'));
cards.put('/pack', findUserByToken(updateCardsPack, 'updateCardsPack'));
cards.delete('/pack', findUserByToken(deleteCardsPack, 'deleteCardsPack', true));

cards.get('/card', findUserByToken(getCards, 'getCards', true));
cards.post('/card', findUserByToken(addCard, 'addCard'));

export default cards;
