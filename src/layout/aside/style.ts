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

export const List = styled.ul`
  list-style:none;
  display:flex;
  flex-direction:column;
  padding:0;
  justify-content:center;
  align-items:center;

  @media only screen and (max-width:420px){
      flex-direction:row;
      align-items:center;
  }
`

export const Item = styled.li`
  display:flex;
  flex-direction:column;
  gap:5px;
  width:65%;
`

export const Button = styled.button`
  cursor:pointer;
  border:none;
  border-radius:20px;
`