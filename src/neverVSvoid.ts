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

//void
const game = (player: KNPplayer, choice: Choice): void =>
  console.log(`${player.name} ma za sebou ${player.gamesPlayed} her, ${KNP(choice, player.name)}`);

game(one, 'kamen');
game(two, 'papir');

//never
const game2 = (player: KNPplayer, choice: Choice): never => {
  throw new Error(`${player.name} ma za sebou ${player.gamesPlayed} her, ${KNP(choice, player.name)}`);
};

game2(one, 'kamen');
game2(two, 'papir');
