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

const updateKNPplayer = (KNPplayer: KNPplayer, fieldsToUpdate: Partial<KNPplayer>) => {
  return { ...KNPplayer, ...fieldsToUpdate };
};

const oneUpdated = updateKNPplayer(one, { gamesPlayed: one.gamesPlayed + 5 });
const twoUpdated = updateKNPplayer(two, { gamesPlayed: two.gamesPlayed + 7 });

const game = (player: KNPplayer, choice: Choice): string =>
  `${player.name} ma za sebou ${player.gamesPlayed} her, ${KNP(choice, player.name)}`;

console.log(game(oneUpdated, 'kamen'));
console.log(game(twoUpdated, 'papir'));
