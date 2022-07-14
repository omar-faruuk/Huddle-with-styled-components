import styled from "styled-components";

export const Flex = styled.div`
 display: flex;
 align-items:center;
 & > div,
 & > ul{
    flex: 1;
 }
 & > div > button{
    margin: 15px 0;
 }
 
 @media(max-width:${({theme})=> theme.mobile}){
     flex-direction:column;
     text-align:center;
   }
 
` 