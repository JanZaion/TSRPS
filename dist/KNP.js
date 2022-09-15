"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KNP = void 0;
const KNP = (volbaUzivatele, jmenoUzivatele) => {
    const knp = ['kamen', 'nuzky', 'papir'];
    const uzNum = knp.indexOf(volbaUzivatele);
    const pNum = Math.floor(Math.random() * 3);
    const lit = `${jmenoUzivatele}: ${knp[uzNum]}, pocitac: ${knp[pNum]}`;
    const div = (uzNum + 1) / (pNum + 1);
    if (div === 1) {
        return `remiza, ${lit}`;
    }
    else if (div === 3 || (div < 1 && parseFloat(div.toFixed(1)) !== 0.3)) {
        return `${jmenoUzivatele} wins, ${lit}`;
    }
    else {
        return `pocitac wins, ${lit}`;
    }
};
exports.KNP = KNP;
