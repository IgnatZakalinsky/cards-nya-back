"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cardsPack_1 = __importDefault(require("../c-2-models/cardsPack"));
exports.getCardPacks = (req, res, user) => __awaiter(void 0, void 0, void 0, function* () {
    // const {page, pageCount, sortPacks, packName, min, max} = req.query;
    //
    // let pageF = +page || 1;
    // const pageCountF = +pageCount || 7;
    // const sortPacksF: string = sortPacks as string | undefined || '';
    // const packNameF: string = packName as string | undefined || '';
    // await CardsPack.create(
    //     {user_id: user._id, name: 'fakeCardsPack', path: '/def', grade: Math.random() * 5, type: 'pack', rating: 0}
    // ); // seed
    // CardsPack.findOne().sort({grade: 1})
    //     .exec()
    //     .then((packMin: ICardsPack | null) => {
    //         const minF = packMin ? packMin.grade : 0;
    //
    //         CardsPack.findOne().sort({grade: -1}).exec()
    //             .then((packMax: ICardsPack | null) => {
    // const maxF = packMax ? packMax.grade : minF;
    // const sortName: any = sortPacksF && sortPacksF.length > 2 ? sortPacksF.slice(1) : undefined;
    // const direction = sortName ? (sortPacksF[0] === '0' ? -1 : 1) : undefined;
    // console.log(sortPacksF + '|' + packNameF + '|' + sortName + '|' + direction);
    cardsPack_1.default.find({
        name: new RegExp(req.query.name),
    });
    // .sort({[sortName]: direction, updated: -1})
    // .skip(pageCountF * (pageF - 1))
    // .limit(pageCountF)
    // .lean()
    // .exec()
    // .then(cardPacks => {
    //
    //     CardsPack.count(
    //         {
    //             name: new RegExp(packNameF),
    //             grade: {$gte: min || minF, $lte: max || maxF}
    //         }
    //     )
    //         .exec()
    //         .then(cardPacksTotalCount => {
    //             if (pageCountF * (pageF - 1) > cardPacksTotalCount) pageF = 1;
    //
    //             res.status(200)
    //                 .json({
    //                     cardPacks,
    //                     page: pageF, pageCount: pageCountF, cardPacksTotalCount,
    //                     minGrade: minF, maxGrade: maxF,
    //                     token: user.token,
    //                     tokenDeathTime: user.tokenDeathTime,
    //                 })
    //         })
    //         .catch(e => status500(res, e, user, 'getCardPacks/CardsPack.count'))
    // })
    // .catch(e => status500(res, e, user, 'getCardPacks/CardsPack.find'))
    //                 })
    //                 .catch(e => status500(res, e, user, 'getCardPacks/CardsPack.findOne/max'))
    //         })
    //         .catch(e => status500(res, e, user, 'getCardPacks/CardsPack.findOne/min'))
});
// Имя Описание
// $eq Соответствует значениям, которые равны указанному значению.
// $gt Соответствует значениям, которые больше указанного значения.
// $gte Соответствует значениям, которые больше или равны указанному значению.
// $in Соответствует любому из значений, указанных в массиве.
// $lt Соответствует значениям, которые меньше указанного значения.
// $lte Соответствует значениям, которые меньше или равны указанному значению.
// $ne Соответствует всем значениям, которые не равны указанному значению.
// $nin Не соответствует ни одному из значений, указанных в массиве.
// $and Объединяет предложения запроса с логическим И возвращает все документы, которые соответствуют условиям обоих предложений.
// $not Инвертирует эффект выражения запроса и возвращает документы, которые не соответствуют выражению запроса.
// $nor Объединяет предложения запроса с логическим NOR и возвращает все документы, которые не соответствуют обоим предложениям.
// $or Объединяет предложения запроса с логическим ИЛИ возвращает все документы, которые соответствуют условиям любого из предложений.
// $exists Соответствует документам с указанным полем.
// $type Выбирает документы, если поле имеет указанный тип.
// $expr Позволяет использовать выражения агрегации на языке запросов.
// $jsonSchema Проверять документы на соответствие данной JSON-схеме.
// $mod Выполняет операцию по модулю над значением поля и выбирает документы с указанным результатом.
// $regex Выбирает документы, значения которых соответствуют заданному регулярному выражению.
// $text Выполняет текстовый поиск.
// $where Соответствует документам, которые удовлетворяют выражению JavaScript.
//# sourceMappingURL=getCardPacks.js.map