import { machine } from "../types/types";

export const automata: machine = {
    estadoInicial: 'q0',
    estados: new Set(['q0', 'q1', 'q2', 'q3', 'q4']),
    transiciones: [
      { from: 'q0', symbol: 'b', to: 'q0' },
      { from: 'q0', symbol: 'a', to: 'q1' },
      { from: 'q1', symbol: 'a', to: 'q1' },
      { from: 'q1', symbol: 'b', to: 'q4' },
      { from: 'q4', symbol: 'b', to: 'q4' },
      { from: 'q4', symbol: 'a', to: 'q1' },
      { from: 'q1', symbol: 'c', to: 'q2' },
      { from: 'q2', symbol: 'c', to: 'q2' },
      { from: 'q2', symbol: 'a', to: 'q3' },
      { from: 'q2', symbol: 'b', to: 'q3' },
      { from: 'q0', symbol: 'c', to: 'q3' },
      { from: 'q4', symbol: 'c', to: 'q3' },
      { from: 'q3', symbol: 'a', to: 'q3' },
      { from: 'q3', symbol: 'b', to: 'q3' },
      { from: 'q3', symbol: 'c', to: 'q3' },
    ],
    estadofinal: new Set(['q1', 'q2', 'q4']),
};
