export type Transition = {
    from: string; // Estado de origen
    symbol: string; // Símbolo de transición
    to: string;    // Estado de destino
  };
  
export type machine = {
    estadoInicial: string;
    estados: Set<string>;
    transiciones: Transition[];
    estadofinal: Set<string>;
  };
  