import { KNP } from './KNP';
import { Choice } from './Choice';

//zde
type KNPplayer<type> = {
  name: string;
  gamesPlayed: type;
};

const one: KNPplayer<number> = {
  name: 'John',
  gamesPlayed: 7855646,
};

const two: KNPplayer<string> = {
  name: 'Jane',
  gamesPlayed: 'mnoho',
};

const game = (player: KNPplayer<string | number>, choice: Choice): string =>
  `${player.name} ma za sebou ${player.gamesPlayed} her, ${KNP(choice, player.name)}`;

console.log(game(one, 'kamen'));
console.log(game(two, 'papir'));
