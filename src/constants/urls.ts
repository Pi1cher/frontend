const baseURL = "http://localhost:3001/";

const urls = {
    superheroes: {
        list:'',
        byId: (superhero_id:string):string => `/${superhero_id}`
    }
}

export {
    baseURL,
    urls
};