import { KNP } from './KNP';
import { Choice } from './Choice';

type KNPplayer = {
  name: string;
  comment?: string; //zde
  //comment: string | undefined; //alternativa
};

const one: KNPplayer = {
  name: 'John',
  comment: 'Jestli jsem prohral, tak je to podvod!!!',
};

const two: KNPplayer = {
  name: 'Jane',
};

const game = (player: KNPplayer, choice: Choice): string =>
  `${KNP(choice, player.name)}. ${player.comment ? `Hracuv comment: ${player.comment}` : ''}`;

console.log(game(one, 'kamen'));
console.log(game(two, 'papir'));
