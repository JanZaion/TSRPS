import { Choice } from './Choice';

export const KNP = (volbaUzivatele: Choice, jmenoUzivatele: string): string => {
  const knp = ['kamen', 'nuzky', 'papir'];
  const uzNum = knp.indexOf(volbaUzivatele);
  const pNum = Math.floor(Math.random() * 3);
  const lit = `${jmenoUzivatele}: ${knp[uzNum]}, pocitac: ${knp[pNum]}`;
  const div = (uzNum + 1) / (pNum + 1);
  if (div === 1) {
    return `remiza, ${lit}`;
  } else if (div === 3 || (div < 1 && parseFloat(div.toFixed(1)) !== 0.3)) {
    return `${jmenoUzivatele} wins, ${lit}`;
  } else {
    return `pocitac wins, ${lit}`;
  }
};
