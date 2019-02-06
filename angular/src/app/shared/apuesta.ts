import { Usuario } from './usuario';

export class Apuesta {
    ladoApostado: boolean;
    resultado: boolean;
    fecha: Date;
    valorApostado: number;
    valorGanado: number;
    usuario: Usuario;
}
