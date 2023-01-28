import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  background: ${props => props.theme.mainColor};
  color: ${props => props.theme.textColor};
  padding-top:10px;
`

export const List = styled.ul`
  list-style: none;
  padding:5px 5px;
  margin:0;
  overflow:auto;
  max-height:100%;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:5px;

  @media only screen and (min-width:1000px){
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width:1000px){
      display: grid;
      grid-template-columns: 1fr 1fr;
  }


  @media only screen and (max-width:615px){
      display: grid;
      grid-template-columns: 1fr;
  }
`
