import { KNP } from './KNP';
import { Choice } from './Choice';

type KNPplayer = {
  name: string;
  gamesPlayed: number;
};

const one: KNPplayer = {
  name: 'John',
  gamesPlayed: 7855646,
};

const two: KNPplayer = {
  name: 'Jane',
  gamesPlayed: 6,
};

//zde
const game = (player: KNPplayer, name: keyof KNPplayer, gamesPlayed: keyof KNPplayer, choice: Choice): string =>
  `${player[name]} ma za sebou ${player[gamesPlayed]} her, ${KNP(choice, name)}`;

console.log(game(one, 'name', 'gamesPlayed', 'kamen'));
console.log(game(two, 'name', 'gamesPlayed', 'papir'));
