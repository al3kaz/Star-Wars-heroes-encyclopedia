import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { setHeroes } from '../../redux/heroes/heroes.actions';
import { setTokens } from '../../redux/auth-token/token.action';

import CardList from '../../components/card-list/card-list.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'

import './home-page.styles.scss'

const CardListWithSpinner = WithSpinner(CardList)

class HomePage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         loading: true,
         searchField: '',
         nextPage: "https://swapi.dev/api/people/"

      }
   }


   componentDidMount() {
      fetch(`https://swapi.dev/api/people/`)
         .then(response => {
            if (response.ok) {
               return response.json();
            } else {
               throw new Error('fetch went wrong');
            }
         })
         .then(data => {
            const heroesWithIds = data.results.map(hero => {
               let url = hero.url.replace('http://swapi.dev/api/people/', '').replace('/', '')
               hero.id = url
               return hero
            })
            this.props.setHeroes({ heroes: heroesWithIds });
            this.setState({ loading: false });
            this.setState({ nextPage: data.next.replace('http', 'https') });
         })
         .catch((error) => {
            console.log(error)
         });
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.searchField !== prevState.searchField) {
         fetch(`https://swapi.dev/api/people/?search=${this.state.searchField}`)
            .then(response => response.json())
            .then(data => {
               const heroesWithIds = data.results.map(hero => {
                  let url = hero.url.replace('http://swapi.dev/api/people/', '').replace('/', '')
                  hero.id = url
                  return hero
               })
               this.props.setHeroes({ heroes: heroesWithIds });
            });
      }
   }

   addNextHeroes = () => {
      fetch(this.state.nextPage)
         .then(response => response.json())
         .then(data => {
            const heroesWithIds = data.results.map(hero => {
               let url = hero.url.replace('http://swapi.dev/api/people/', '').replace('/', '')
               hero.id = url
               return hero
            })
            const newArr = this.props.heroes.heroes;
            this.props.setHeroes({ heroes: [...newArr, ...heroesWithIds] });
            this.setState({ nextPage: data.next.replace('http', 'https') });
         });
   }

   handleLogOut = () => {
      this.props.setTokens("")
   }

   render() {

      const { searchField, loading, nextPage } = this.state

      return (
         <div className="app">

            {this.props.tokens ? <div onClick={this.handleLogOut} className='sigh-in-link'>SIGN OUT</div> : <Link className='sigh-in-link' to="/signin">SIGN IN</Link>}


            <h1 className="title">STAR WARS HEROES ENCYCLOPEDIA</h1>

            <FormInput className="form-input"
               type="search"
               label="find your best hero"
               value={searchField}
               onChange={e => this.setState({ searchField: e.target.value })}
            />

            <CardListWithSpinner isLoading={loading} />

            {nextPage ?
               <CustomButton onClick={this.addNextHeroes}>add next heroes</CustomButton>
               :
               <span className="all-heroes-view">
                  you display all heaoes</span>
            }
         </div>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   setHeroes: hero => dispatch(setHeroes(hero)),
   setTokens: () => dispatch(setTokens())
})

const mapStateToProps = state => ({
   heroes: state.heroes.heroes,
   tokens: state.tokens.token
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);