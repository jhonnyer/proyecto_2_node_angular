export interface Game{
    // simbolo ? significa que el dato no es requerido 
    id?: number;
    title?: string;
    descripcion?:string;
    image?:string;
    created_at?:Date
}