import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {superheroListActions} from "../../store/slices/superheroListSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import {SuperheroesListCard} from "./SuperheroesListCard";
import {useSearchParams} from "react-router-dom";
import css from './SuperheroesList.module.css'

interface IProps extends PropsWithChildren {

}

const SuperheroesList: FC<IProps> = () => {

    const {superheroes} = useAppSelector(state => state.superheroList);

    const [query, setQuery ] = useSearchParams({page:'1'})
    const page = query.get('page');

    const dispatch = useAppDispatch();

    useEffect(() =>{
        dispatch(superheroListActions.getAll({page}))
    }, [dispatch, page])



    const {totalPages} = useAppSelector(state => state.superheroList);
    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') -1).toString())
            return prev
        })
    }
    const next = () => {
        setQuery(next => {
            next.set('page', (+next.get('page') + 1).toString())
            return next
        })
    }


    return (
        <div className={css.SuperheroesList}>
            {superheroes.map(superhero => <SuperheroesListCard superhero={superhero} key={superhero._id}/>)}
            <div className={css.PageSelector}>
                <button disabled={+page === 1} onClick={prev}>&lsaquo;</button>
                <p>{query.get('page')}</p>
                <button disabled={+page === totalPages} onClick={next}>&rsaquo;</button>
            </div>
        </div>
    );
};

export default SuperheroesList;