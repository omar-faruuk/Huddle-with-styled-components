import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 20px;
  ul {
    list-style-type: none;
    text-align: left;
  }
  img{
    margin-bottom:20px;
  }
  ul li {
    margin-bottom: 20px;
    
  }
 
  p {
    text-align: center;
    margin-top:15px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
      text-align:center;
    }
    
  }
`