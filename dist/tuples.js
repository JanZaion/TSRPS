"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KNP_1 = require("./KNP");
const one = ['John', 7855646];
const two = ['Jane', 6];
const game = (player, choice) => `${player[0]} ma za sebou ${player[1]} her, ${(0, KNP_1.KNP)(choice, player[0])}`;
console.log(game(one, 'kamen'));
console.log(game(two, 'papir'));
