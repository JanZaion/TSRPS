import { KNP } from './KNP';
import { Choice } from './Choice';

enum ProficiencyLevel { //zde
  Noob = 'Absolute KNP looser',
  Pro = 'Unbelievable KNP chad',
}

type KNPplayer = {
  name: string;
  PL: ProficiencyLevel;
};

const one: KNPplayer = {
  name: 'John',
  PL: ProficiencyLevel.Noob,
};

const two: KNPplayer = {
  name: 'Jane',
  PL: ProficiencyLevel.Pro,
};

const game = (player: KNPplayer, choice: Choice): string =>
  `${player.name} je ${player.PL}, ${KNP(choice, player.name)}`;

console.log(game(one, 'kamen'));
console.log(game(two, 'papir'));
