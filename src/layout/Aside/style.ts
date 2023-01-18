import styled from "styled-components"

export const Container = styled.aside`
  background: ${props => props.theme.asideColor};
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
  color: ${props => props.theme.textColor};

  @media only screen and (max-width:420px){
      flex-direction:row;
  }
`

export const ListContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  @media only screen and (max-width:420px){
      flex-direction:row;
      align-items:center;
  }
`

export const Title = styled.span`
  padding:5px;
  margin:0;
  text-align:center
`

export const List = styled.ul`
  display:flex;
  flex-direction:column;
  justify-content: center;
  gap:5px;
  list-style:none;
  padding:0;
`

export const Item = styled.li`
  display:flex;
  justify-content: center;
`

export const Button = styled.button`
  cursor:pointer;
  border:none;
  border-radius:20px;
  width:70px;
  
  :hover{
    background: ${props => props.theme.headerColor};
    color: ${props => props.theme.secondTextColor}
  }
`