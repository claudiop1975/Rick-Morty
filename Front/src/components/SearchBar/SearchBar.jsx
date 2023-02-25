import { useState } from "react";
import styled from "styled-components";

const Button = 
styled.button`
background: green;
color: black;
margin-left:20px;
padding: 5px;
font-weight: Bold;
border: solid 1px white;

`
const Input = styled.input`
border-radius: 5px;
padding: 5px
`
const Div= styled.div`
text-align: right;
`

export default function SearchBar({onSearch}) {
   const [character,setCharacter]=useState("")
   const handleChange=(e)=>{
      setCharacter(e.target.value)
   }
   return (
      <Div>
         <Input type='search' placeholder="Buscar"  onChange={handleChange}/>
         <Button onClick={()=>onSearch(character)}>Agregar</Button> 
      </Div>
   );
}
