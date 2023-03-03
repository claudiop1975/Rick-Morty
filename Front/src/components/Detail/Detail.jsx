import { useEffect,useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
color: Yellow;
width:50%;
display: inline-block;
`
const H1 = styled.h1`
Background-color: Black;
`
const H2 = styled.h2`
Background-color: Black;
`

const StyledImg = styled.img`
border-radius: 10px;
margin-top: 100px;
border: solid yellow 6px;
`


export default function Details(props) {
const  {detailId}= useParams()
const [character,setCharacter]= useState({})
const navigate = useNavigate()
useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({})
  }, [detailId])
    console.log(character);
      
  return (
      <div>
        <StyledDiv>
        <div>
          <H1>Nombre: {character.name}</H1>
        <br></br>
          <H2>Status: {character.status}</H2>
          <H2>Especie: {character.species}</H2>
          <H2>Genero: {character.gender}</H2>
          <H2>Origen: { character.origin?.name }</H2>
        </div>
      </StyledDiv>
      <StyledDiv>
        <StyledImg src={character.image} alt="" />
      </StyledDiv>
        <button Style= "width: 120px; height: 50px; font-Size: 20px" onClick={()=>navigate(-1)}>Back</button>
    </div>
    );
 }