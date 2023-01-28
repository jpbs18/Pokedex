import styled from 'styled-components'

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
