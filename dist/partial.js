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
const updateKNPplayer = (KNPplayer, fieldsToUpdate) => {
    return Object.assign(Object.assign({}, KNPplayer), fieldsToUpdate);
};
const oneUpdated = updateKNPplayer(one, { gamesPlayed: one.gamesPlayed + 5 });
const twoUpdated = updateKNPplayer(two, { gamesPlayed: two.gamesPlayed + 7 });
const game = (player, choice) => `${player.name} ma za sebou ${player.gamesPlayed} her, ${(0, KNP_1.KNP)(choice, player.name)}`;
console.log(game(oneUpdated, 'kamen'));
console.log(game(twoUpdated, 'papir'));
