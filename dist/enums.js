"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KNP_1 = require("./KNP");
var ProficiencyLevel;
(function (ProficiencyLevel) {
    ProficiencyLevel["Noob"] = "Absolute KNP looser";
    ProficiencyLevel["Pro"] = "Unbelievable KNP chad";
})(ProficiencyLevel || (ProficiencyLevel = {}));
const one = {
    name: 'John',
    PL: ProficiencyLevel.Noob,
};
const two = {
    name: 'Jane',
    PL: ProficiencyLevel.Pro,
};
const game = (player, choice) => `${player.name} je ${player.PL}, ${(0, KNP_1.KNP)(choice, player.name)}`;
console.log(game(one, 'kamen'));
console.log(game(two, 'papir'));
