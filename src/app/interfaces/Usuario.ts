export interface Usuario {
    id?: number;
    uid?: string;
    nombre?: string;
    apellidos?: string;
    correo?: string;
    password?: string;
    estado?: number;
    role?: string;
    createdAt?: Date;
    updatedAt?: Date;
}