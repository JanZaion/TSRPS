"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KNP_1 = require("./KNP");
//any
const game = (player, choice) => `${(0, KNP_1.KNP)(choice, player)}`;
console.log(game('John', 'kamen'));
console.log(game('Jane', 'papir'));
//unknown
const game2 = (player, choice) => {
    const typedPlayer = player;
    return `${(0, KNP_1.KNP)(choice, typedPlayer)}`;
};
console.log(game2('John', 'kamen'));
console.log(game2(5, 'papir'));
