"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KNP_1 = require("./KNP");
const one = {
    name: 'John',
    comment: 'Jestli jsem prohral, tak je to podvod!!!',
};
const two = {
    name: 'Jane',
};
const game = (player, choice) => `${(0, KNP_1.KNP)(choice, player.name)}. ${player.comment ? `Hracuv comment: ${player.comment}` : ''}`;
console.log(game(one, 'kamen'));
console.log(game(two, 'papir'));
