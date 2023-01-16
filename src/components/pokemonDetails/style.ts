import styled from "styled-components"

export const Container = styled.div`
  background: ${props => props.theme.mainColor};
  color: ${props => props.theme.textColor};
  margin:0;
  overflow:auto;
  height:100%;
  display:grid;
  grid-template-columns: 1fr;
  gap:10px;
`

export const Table = styled.table`
  width:40%;
  height:30%;
  border: 1px solid black;
  
  td{
    border: 1px solid black;
    padding:5px;
  }
`

export const Table_Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Table_List = styled.ul`
  list-style: none;
  padding:0;
  margin:0;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Button_Container = styled.div`
  display: flex;
  gap:10px;
  justify-content: center;
`

export const Button = styled.button`
  cursor:pointer;
  height:80%;
`

export const Heading = styled.h2`
  margin:0;
  font-size:32px;

  @media only screen and (max-width:600px){
    font-size:24px;

  @media only screen and (max-width:420px){
   font-size:18px;
`

export const Img = styled.img`
  width:380px;
  height:310px;

  @media only screen and (max-width:600px){
    width:340px;
    height:280px;
  } 
  
  @media only screen and (max-width:420px){
  
}
`

