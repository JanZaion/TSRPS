import { KNP } from './KNP';
import { Choice } from './Choice';

//any
const game = (player: any, choice: any): string => `${KNP(choice, player)}`;

console.log(game('John', 'kamen'));
console.log(game('Jane', 'papir'));

//unknown
const game2 = (player: unknown, choice: unknown): string | undefined => {
  if (typeof player !== 'string') return;
  const typedPlayer = player as string;

  if (choice !== 'kamen' && choice !== 'nuzky' && choice !== 'papir') return;
  const typedChoice = choice as Choice;

  return `${KNP(typedChoice, typedPlayer)}`;
};

console.log(game2('John', 'kamen'));
console.log(game2('Jane', 'papir'));
