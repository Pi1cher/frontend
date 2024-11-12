import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types/responceType";
import {ISuperheroList} from "../interfaces/superheroListInterface";
import {ISuperhero} from "../interfaces/superheroInterface";

const superheroService = {
    getAll: (page:string):IRes<ISuperheroList> => apiService.get(urls.superheroes.list, {params:{page}}),
    byId: (id:string):IRes<ISuperhero> => apiService.get(urls.superheroes.byId(id)),
    create: (data:any):IRes<ISuperhero> => apiService.post(urls.superheroes.list, data, {
        headers:{'Content-Type': 'multipart/form-data',
}}),
    updateById: (id:string, data:any):IRes<ISuperhero> => apiService.put(urls.superheroes.byId(id), data, {
        headers:{'Content-Type': 'multipart/form-data',
        }}),
    deleteById: (id:string) => apiService.delete(urls.superheroes.byId(id))
}
export {
    superheroService
}