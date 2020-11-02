import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import './signe-in-and-signe-up.style.scss'

const SignInSignUpPage = () => {

   return (
      <div className="sign-in-and-sign-up">
         <SignIn />
         <SignUp />
      </div>
   );
}

export default SignInSignUpPage;