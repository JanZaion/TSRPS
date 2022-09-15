"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KNP_1 = require("./KNP");
const one = {
    name: 'John',
    gamesPlayed: 7855646,
};
const two = {
    name: 'Jane',
    gamesPlayed: 6,
};
//zde
const game = (player, name, gamesPlayed, choice) => `${player[name]} ma za sebou ${player[gamesPlayed]} her, ${(0, KNP_1.KNP)(choice, name)}`;
console.log(game(one, 'name', 'gamesPlayed', 'kamen'));
console.log(game(two, 'name', 'gamesPlayed', 'papir'));
