import React from 'react';
import { connect } from 'react-redux';

import Card from '../card/card.component'

import './card-list.styles.scss'

const CardList = (props) => {
   return (
      <div className='card-list'>
         {props.heroes.heroes.map(hero => (
            <Card key={hero.id} hero={hero} />
         ))}
      </div>
   );
}

const mapStateToProps = state => ({
   heroes: state.heroes.heroes
})

export default connect(mapStateToProps)(CardList);