import styled from "styled-components"

export const Container = styled.div`
  display:flex;
  justify-content:space-around;
  align-items: center;
  background: ${props => props.theme.mainColor};
  color: ${props => props.theme.textColor};
  gap:3px;
  background: ${props => props.theme.formColor};
`

export const Button = styled.button`
  cursor:pointer;
`

export const Label = styled.div`
  display: flex;
  align-items: center;
  height:50%;
  gap:2px;
`
