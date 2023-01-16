import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  background: ${props => props.theme.mainColor};
  color: ${props => props.theme.textColor}
`

export const Sub_Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:0;
  padding:0;
`

export const List_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

