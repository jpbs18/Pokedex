import styled from "styled-components"

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

export const Item = styled.li`
  display:flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.textColor};
  border-radius:10px;
  background: ${props => props.theme.itemColor};
  cursor:pointer;
  
  :hover{
    background: ${props => props.theme.cardHover};
    color: ${props => props.theme.textColor}
  }
`

export const Img = styled.img`
  height:215px;
  width:215px;
  padding:10px;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100px;
  gap:10px;
`

export const Type = styled.div`
  background: ${props => props.color};
  border-radius: 10px;
  border: 1px solid black;
  width:70%;
`


