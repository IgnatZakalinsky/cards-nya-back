import express from "express";
import {findUserByToken} from "../f-1-auth/a-3-helpers/h-2-users/findUserByToken";
import {getUsers} from "./s-1-controllers/getUsers";
import {addGeneralMessage} from "./s-1-controllers/addGeneralMessage";
import {getGeneralMessages} from "./s-1-controllers/getGeneralMessages";

const social = express.Router();

social.get('/users', findUserByToken(getUsers, 'getUsers', true));
social.post('/general/message', findUserByToken(addGeneralMessage, 'addGeneralMessage'));
social.get('/general/message', findUserByToken(getGeneralMessages, 'getGeneralMessages', true));

export default social;
