import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { CardOverviewContainer, Detail } from './cart-overview.styles';

const CardOverview = (props) => {

   const [hero, setHero] = useState("")
   const [planet, setPlanet] = useState("")

   const actualHero = props.match.params.Id

   useEffect(() => {

      fetch(`https://swapi.dev/api/people/${actualHero}/`)
         .then(response => response.json())
         .then(data => {
            setHero(data)
            fetch(`${data.homeworld.replace('http', 'https')}`)
               .then(response => response.json())
               .then(data => {
                  setPlanet(data)
               })
         });
   }, [])

   return (
      <  >
         {
            planet ? <CardOverviewContainer>
               <img className="card-img" src={process.env.PUBLIC_URL + `./img/${actualHero}.jpg`} alt="hero" />
               <Detail as="h1">{hero.name.toUpperCase()}</Detail>
               <Detail>Birth year: <b>{hero.birth_year.toUpperCase()}</b></Detail>
               <Detail>Gender: <b>{hero.gender.toUpperCase()}</b></Detail>
               <Detail>Height: <b>{hero.height.toUpperCase()}</b> </Detail>
               <Detail>Weight: <b>{hero.mass.toUpperCase()}</b></Detail>
               <Detail>Skin color: <b>{hero.skin_color.toUpperCase()}</b></Detail>
               <Detail>Eye color: <b>{hero.eye_color.toUpperCase()}</b></Detail>
               <Detail>Hair color: <b>{hero.hair_color.toUpperCase()}</b></Detail>
               <Detail>Homeworld: <b>{planet.name.toUpperCase()}</b></Detail>
            </CardOverviewContainer >
               : null
         }
      </ >
   );
}

const mapStateToProps = state => ({
   heroes: state.heroes.heroes
})

export default connect(mapStateToProps)(CardOverview);