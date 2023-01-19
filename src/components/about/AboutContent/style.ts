import styled from "styled-components"

export const Container = styled.main`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: ${props => props.theme.mainColor};
  color: ${props => props.theme.textColor};
  overflow:auto;
  max-height:100%;

  @media only screen and (max-width:1200px){
    display: flex;
    flex-direction: column;
  }
`

export const Section = styled.section`
  display:flex;
  flex-direction: column;
  align-items:center;
  gap:5px;
  padding:15px;

  a{
    color: ${props => props.theme.textColor};
    :visited {color: ${props => props.theme.textColor};}
    :hover {color: ${props => props.theme.textColor};}
    :active {color: ${props => props.theme.textColor};}
  }
`

export const Article = styled.article`
  display:flex;
  flex-direction: column;
  justify-content: center;
`

export const List = styled.ul`
  list-style: inside;
  padding:0;
  
  li{
    padding:3px;
  }
`

export const SocialMediaContainer = styled.div`
  text-align: center;
  margin-top:20px;
  
  a{
    padding:20px;
  }
`


export const Image = styled.img`
  width:300px;
  border-radius:50%;

  @media only screen and (max-width:1200px){
    width:200px
  }
`

export const Icon = styled.img`
    width:60px;
`