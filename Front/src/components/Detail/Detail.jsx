import { useEffect,useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
color: white;
width:50%;
display: inline-block;
`
const StyledImg = styled.img`
border-radius: 10px;
margin-top: 100px
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

    return (
      <div>
        <StyledDiv>
        <div>
          <h1>Nombre: {character.name}</h1>
        <hr></hr>
          <h2>Status: {character.status}</h2>
          <h2>Especie: {character.species}</h2>
          <h2>Genero: {character.gender}</h2>
          <h2>Origen: {character.origin?.name}</h2>
        </div>
       </StyledDiv>
       <StyledDiv>
          <StyledImg src={character.image} alt="" />
       </StyledDiv>
          <button onClick={()=>navigate(-1)}>Volver</button>
      </div>
       
    );
 }