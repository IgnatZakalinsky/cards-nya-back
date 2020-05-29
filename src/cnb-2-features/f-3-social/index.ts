import express from "express";
import {findUserByToken} from "../f-1-auth/a-3-helpers/h-2-users/findUserByToken";
import {getUsers} from "./s-1-controllers/getUsers";

const social = express.Router();

social.get('/users', findUserByToken(getUsers, 'getUsers', true));

export default social;
