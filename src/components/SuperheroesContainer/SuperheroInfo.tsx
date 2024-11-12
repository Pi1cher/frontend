import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {superheroInfoActions} from "../../store/slices/superheroInfoSlice";
import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";
import {baseURL} from "../../constants/urls";
import {superheroService} from "../../services/superheroService";
import CreateAndUpdateHero from "./CreateAndUpdateHero";
import css from './SuperheroInfo.module.css'

interface IProps extends PropsWithChildren {

}

const SuperheroInfo: FC<IProps> = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {_id} = useParams();

    const  deleteHero = async() =>{
        navigate('/');
        await superheroService.deleteById(_id)

    }
    const  update = () =>{
        dispatch(superheroInfoActions.heroForUpdate(true))
    }


    let {superheroDetails,heroForUpdate} = useAppSelector(state => state.superheroInfo);
    useEffect(() => {
        dispatch(superheroInfoActions.byId({_id}));
    }, [dispatch, _id, heroForUpdate]);

    const {nickname, real_name, origin_description, superpowers, catch_phrase, images} = superheroDetails
    return (
        <div className={css.SuperheroInfo}>

            {heroForUpdate ? <CreateAndUpdateHero/> : <div></div>}
            <button disabled={heroForUpdate} onClick={update}>Update</button>
            <button onClick={deleteHero}>Delete</button>
            <div>Nickname: {nickname}</div>
            <div>Real name: {real_name}</div>
            <div>Origin description: {origin_description}</div>
            <div>Superpowers: {superpowers}</div>
            <div>Catch phrase: {catch_phrase}</div>
            {images.map(image => <img src={baseURL + image.img.path} key={image.img.path} alt={image.name}/>)}

        </div>)
};
export default SuperheroInfo;