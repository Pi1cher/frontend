export interface ISuperhero {
    _id?:string;
    nickname: string;
    real_name: string;
    origin_description: string;
    superpowers: string;
    catch_phrase: string;
    images?: Array<{
        name?: string;
        img?: {
            path: string;
            contentType?: string;
        };
    }>;
}