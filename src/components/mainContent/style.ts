import styled from "styled-components"

export const Container = styled.div`
  text-align: center;
  background: ${props => props.theme.mainColor};
  color: ${props => props.theme.textColor};
  padding:10px;
`

export const List = styled.ul`
  list-style: none;
  padding:0 5px;
  margin:0;
  overflow:auto;
  max-height:100%;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:8px;

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
`

export const Img = styled.img`
  height:215px;
  width:215px;
  padding:10px;
`


