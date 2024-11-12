import React, {FC, PropsWithChildren} from 'react';
import {ISuperhero} from "../../interfaces/superheroInterface";
import {baseURL} from "../../constants/urls";
import {Link} from "react-router-dom";

interface IProps extends PropsWithChildren {
    superhero: ISuperhero;
}

const SuperheroesListCard: FC<IProps> = ({superhero}) => {

    const {_id, nickname, images} = superhero;


    const image = images[0];

    return (
        <div style={{width:'210px'}}>
            <Link to={_id.toString()}>
                <img src={baseURL + image.img.path} alt={image.name} style={{width:'200px', height: "300px"}}/>
                <div>{nickname}</div>
            </Link>
        </div>
    );
};

export {SuperheroesListCard};