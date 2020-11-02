import styled ,{css} from 'styled-components';



const googleSignInStyles = css`
background-color: #4285f4;
color: white;

&:hover {
  background-color: #357ae8;
  border: none;
}
`;

const invertedButtonStyles = css`
background-color: white;
color: black;
border: 1px solid black;

&:hover {
  background-color: black;
  color: white;
  border: none;
}
`;

const getButtonStyles = props => {
   if(props.isGoogleSignIn) {
      return googleSignInStyles
   } else if(props.inverted) {
      return invertedButtonStyles
   }
}

export const CustomButtonContainer = styled.button`
display: flex;
justify-content: center;
min-width: 165px;
width: auto;
height: 50px;
margin: 20px auto;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
background-color: black;
color: black;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
background-color: white;


&:hover {
  background-color: black;
  color: white;
  border: 1px solid white;
}
${getButtonStyles};
`;