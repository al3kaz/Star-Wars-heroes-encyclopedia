import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.style.scss';

class SignIn extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: '',
      }
   }

   handleChange = event => {
      const { value, name } = event.target;

      this.setState({
         [name]: value,
      })
   }

   handleSubmit = async event => {
      event.preventDefault()

      if (this.props.tokens === "") {
         alert("You do not have an account")
      }

      this.setState({
         email: '',
         password: '',
      })
   };



   render() {
      return (
         <div className="sign-in" onSubmit={this.handleSubmit}>
            <h2 className='title'>I already have an accout</h2>
            <span>Sign in with your email and password</span>

            <form>
               <FormInput
                  handleChange={this.handleChange}
                  name="email"
                  type="email"
                  value={this.state.email}
                  required
                  label="email" />

               <FormInput
                  handleChange={this.handleChange}
                  type="password"
                  name="password"
                  value={this.state.password}
                  required
                  label="password" />


               <div className="buttons">
                  <CustomButton type="submit">Sign in</CustomButton>
               </div>
            </form>
            <div className="warning">
               *Here works only SIGN UP, generates token and store into redux store

         </div>
         </div>
      );
   }
}


const mapStateToProps = state => ({
   tokens: state.tokens.token
})

export default connect(mapStateToProps)(SignIn);