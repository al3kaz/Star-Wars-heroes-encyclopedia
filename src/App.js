import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {Switch, Route } from "react-router-dom";

import HomePage from './pages/home-page/home-page.component';
import CardOverview from './components/cart-overview/cart-overview.component';
import SignInSignUpPage from './pages/signe-in-and-signe-up/signe-in-and-signe-up.component';

import './App.css'


const App = (props) => {
  return ( 
    <div className="app">
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin"  
          render={() => props.tokens ?
            (<Redirect to="/" />) : 
            (<SignInSignUpPage />)}/>
        <Route exact path="/:Id" component={CardOverview} />
        </Switch>
      </div>
   );
}
 
const mapStateToProps = state => ({
  tokens: state.tokens.token
})

export default connect(mapStateToProps)(App);