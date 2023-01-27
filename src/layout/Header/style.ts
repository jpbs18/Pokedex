import styled from 'styled-components'

export const Container = styled.header`
  background: ${props => props.theme.headerColor};
  display: flex;
  justify-content:space-between;
  align-items: center;
  color: ${props => props.theme.textColor}
`
export const List = styled.ul`
  list-style: none;
  padding:0;
`
export const Button = styled.button`
  background:transparent;
  border:none;
  cursor:pointer;
`
