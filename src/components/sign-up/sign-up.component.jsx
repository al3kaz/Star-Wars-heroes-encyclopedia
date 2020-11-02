import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setTokens } from '../../redux/auth-token/token.action'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-up.style.scss'


class SignUp extends Component {
   constructor(props) {
      super(props);

      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: '',
      }
   }

   handleChange = event => {
      const { name, value } = event.target;

      this.setState({ [name]: value });
   }


   handleTokenCreator = event => {
      event.preventDefault()
      const TokenGenerator = require('uuid-token-generator');

      const tokgen = new TokenGenerator(256, TokenGenerator.BASE62);
      tokgen.generate();

      this.props.setTokens({ tokgen });

      this.setState({
         displayName: '',
         email: '',
         password: '',
         confirmPassword: '',
      })
   }

   render() {

      const { displayName, email, password, confirmPassword } = this.state

      return (
         <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span className="option">sine up with your email and password</span>
            <form onSubmit={this.handleSubmit} className="sign-up-form">
               <FormInput
                  type='text'
                  name='displayName'
                  value={displayName}
                  label="display Name"
                  onChange={this.handleChange}
                  required>
               </FormInput>
               <FormInput
                  type='email'
                  name='email'
                  value={email}
                  label="Email"
                  onChange={this.handleChange}
                  required>
               </FormInput>
               <FormInput
                  type='password'
                  name='password'
                  value={password}
                  label="Password"
                  onChange={this.handleChange}
                  required>
               </FormInput>
               <FormInput
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  label="Confirm Password"
                  onChange={this.handleChange}
                  required>
               </FormInput>
               <CustomButton onClick={this.handleTokenCreator} type='submit'>Sign up</CustomButton>
            </form>
         </div>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   setTokens: token => dispatch(setTokens(token))
})

const mapStateToProps = state => ({
   tokens: state.tokens.token
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);