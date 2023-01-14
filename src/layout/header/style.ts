import styled from "styled-components"

export const Container = styled.header`
  background: ${props => props.theme.headerColor};
  display: flex;
  justify-content:center;
  align-items: center;
  position:relative;
  color: ${props => props.theme.textColor}
`
export const Button = styled.button`
  background: transparent;
  border:none;
  position:absolute;
  right:0;
  cursor:pointer;
`

