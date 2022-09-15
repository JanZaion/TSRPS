"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KNP_1 = require("./KNP");
//any
const game = (player, choice) => `${(0, KNP_1.KNP)(choice, player)}`;
console.log(game('John', 'kamen'));
console.log(game('Jane', 'papir'));
//unknown
const game2 = (player, choice) => {
    if (typeof player !== 'string')
        return;
    const typedPlayer = player;
    if (choice !== 'kamen' && choice !== 'nuzky' && choice !== 'papir')
        return;
    const typedChoice = choice;
    return `${(0, KNP_1.KNP)(typedChoice, typedPlayer)}`;
};
console.log(game2('John', 'kamen'));
console.log(game2('Jane', 'papir'));
