export class Apuesta {
    id: number;
    modificationCounter: number;
    ladoApostado: boolean;
    resultado: boolean;
    fecha: Date;
    valorApostado: number;
    valorGanado: number;
    usuarioId: number;
}
