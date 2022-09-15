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
//void
const game = (player, choice) => console.log(`${player.name} ma za sebou ${player.gamesPlayed} her, ${(0, KNP_1.KNP)(choice, player.name)}`);
game(one, 'kamen');
game(two, 'papir');
//never
const game2 = (player, choice) => {
    throw new Error(`${player.name} ma za sebou ${player.gamesPlayed} her, ${(0, KNP_1.KNP)(choice, player.name)}`);
};
game2(one, 'kamen');
game2(two, 'papir');
