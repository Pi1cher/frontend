import {ISuperhero} from "./superheroInterface";

export interface ISuperheroList {
    page: number;
    limit: number;
    totalPages: number;
    totalItems: number;
    superheroes: ISuperhero[];
}