import React from 'react';
import { Link } from 'react-router-dom';

import './card.styles.scss';

const Card = (props) => {

   const { id, name } = props.hero

   return (
      <Link className="card-container" to={`${id}`}>
         <img className="card-img" src={process.env.PUBLIC_URL + `./img/${id}.jpg`} alt="hero" />
         <h1 className="card-name">{name}</h1>
      </Link>
   );
}

export default Card;