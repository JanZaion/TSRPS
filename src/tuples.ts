import { KNP } from './KNP';
import { Choice } from './Choice';

type KNPlayer = [name: string, gamesPlayed: number]; //zde

const one: KNPlayer = ['John', 7855646];
const two: KNPlayer = ['Jane', 6];

const game = (player: KNPlayer, choice: Choice): string =>
  `${player[0]} ma za sebou ${player[1]} her, ${KNP(choice, player[0])}`;

console.log(game(one, 'kamen'));
console.log(game(two, 'papir'));
