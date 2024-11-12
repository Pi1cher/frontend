import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {superheroService} from "../../services/superheroService";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {superheroInfoActions} from "../../store/slices/superheroInfoSlice";
import css from './CreateAndUpdateHero.module.css'

const CreateAndUpdateHero = () => {
    const {handleSubmit, register, setValue} = useForm();
    let {superheroDetails,heroForUpdate} = useAppSelector(state => state.superheroInfo);
    const {_id} = useParams();
    const dispatch = useAppDispatch();

    const save = async(hero:any) =>{
        await superheroService.create(hero)
    }

    const update = async(hero:any) =>{
        await superheroService.updateById(_id, hero)
        dispatch(superheroInfoActions.heroForUpdate(false))
    }

    useEffect(() => {
        if(heroForUpdate){
            setValue('nickname', superheroDetails.nickname)
            setValue('real_name', superheroDetails.real_name)
            setValue('origin_description', superheroDetails.origin_description)
            setValue('superpowers', superheroDetails.superpowers)
            setValue('catch_phrase', superheroDetails.catch_phrase)
        }else{
            setValue('nickname', '')
            setValue('real_name', '')
            setValue('origin_description', '')
            setValue('superpowers', '')
            setValue('catch_phrase', '')
        }
    }, [heroForUpdate, setValue]);

    return (
        <div>
            <form className={css.Form} onSubmit={handleSubmit(heroForUpdate ? update : save)}>
                <input type="text" placeholder="Nickname" {...register('nickname')}/>
                <input type="text" placeholder="Real Name" {...register('real_name')}/>
                <input type="text" placeholder="Origin Description" {...register('origin_description')} />
                <input type="text" placeholder="Superpowers" {...register('superpowers')}/>
                <input type="text" placeholder="Catch Phrase" {...register('catch_phrase')}/>
                <input type="file" placeholder="Images" multiple {...register('images')}/>
                <button type="submit">{heroForUpdate? 'update' : 'submit'}</button>
            </form>
        </div>
    );
};

export default CreateAndUpdateHero;