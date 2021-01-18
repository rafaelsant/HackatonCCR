import { Competencias } from "./competencias";
import { Cursos } from "./cursos";

export interface Cadastro {
        id?: Number;
        tipo?: string;
        nome?: string;
        password?: string;
        confirmPassword: string;
        email: string;
        cpf: Number;
        rg: Number;
        genero: string;
        nascimento: String;
        celular: Number;
        fixo: Number;
        adress: string;
        numero?:Number;
        cep: Number;
        cidade:string;
        state: string;
        imagem?: string;
        competencias?:Competencias;
        cursos?:Cursos;
}
