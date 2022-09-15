import { KNP } from './KNP';
import { Choice } from './Choice';

type Name = {
  name: string;
};

type GamesPlayed = {
  gamesPlayed: number;
};

type KNPplayer = Name & GamesPlayed; //zde

const one: KNPplayer = {
  name: 'John',
  gamesPlayed: 7855646,
};

const two: KNPplayer = {
  name: 'Jane',
  gamesPlayed: 6,
};

const game = (player: KNPplayer, choice: Choice): string =>
  `${player.name} ma za sebou ${player.gamesPlayed} her, ${KNP(choice, player.name)}`;

console.log(game(one, 'kamen'));
console.log(game(two, 'papir'));
