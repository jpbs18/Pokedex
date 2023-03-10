import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  justify-content:space-around;
  align-items: center;
  background: ${props => props.theme.formColor};
  color: ${props => props.theme.textColor};
  gap:3px;
`

export const Button = styled.button`
  cursor:pointer;
`

export const Form = styled.div`
  display: flex;
  align-items: center;
  gap:2px;
`
