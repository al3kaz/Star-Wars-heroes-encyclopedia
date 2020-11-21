import styled  from 'styled-components';

export const CardOverviewContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 30vw;
   text-align: center;
   margin: 20px auto;
   padding: 20px;
   background-color: #52463A;
   border: 1px solid grey;
   border-radius: 5px;

   @media screen and (max-width: 800px) {
      width: 70vw;
  } 
`;

export const ImgCointainer = styled.div`
width: 100%;
`;

export const DetailsContainer = styled.div`

`;

export const Detail = styled.div`
margin: 10px;
`;