import { machine } from "../types/types";

 export function verificarPalabra(word: string, automata: machine): boolean {
    let currentState = automata.estadoInicial;
  
    for (const symbol of word) { //aab
      const transition = automata.transiciones.find(t => t.from === currentState && t.symbol === symbol); // a-->b 
      if (!transition) {
        return false
      }
      currentState = transition.to
    }
  
    return automata.estadofinal.has(currentState);
  }