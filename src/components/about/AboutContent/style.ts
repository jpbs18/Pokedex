import styled from "styled-components"

export const Container = styled.main`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: ${props => props.theme.mainColor};
  color: ${props => props.theme.textColor};
`

export const Section = styled.section`
  display:flex;
  flex-direction: column;
  align-items:center;
  gap:5px;
  padding:15px;
`

export const Article = styled.article`
  display:flex;
  flex-direction: column;
  justify-content: center;
  
  a{
    color: ${props => props.theme.textColor};
  }
`

export const List = styled.ul`
  list-style: inside;
  padding:0;
  
  li{
    padding:3px;
  }
`

export const Image = styled.img`
  width:50%;
  border-radius:50%;
`

export const Icon = styled.img`
    width:10%;
`