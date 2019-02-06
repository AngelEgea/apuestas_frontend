import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Persona {
    id: number;
    modificationCounter: number;
    nombre: string;
    fechaNacimiento: Date;
    email: string;
}
