import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {superheroInfoActions} from "../../store/slices/superheroInfoSlice";
import css from './Header.module.css'

const Header = () => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    return (
        <div className={css.Header}>
            <Link to={'/'} className={css.Link}><h1>SUPERHEROES DB</h1></Link>
            <button onClick={() => {
                dispatch(superheroInfoActions.heroForUpdate(false))
                navigate('/create')}}>Create hero</button>
        </div>
    );
};

export default Header;