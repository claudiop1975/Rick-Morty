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
border-radius: 2rem;
padding: 10px
`
const Div= styled.div`
text-align: right;
align-items: center;
`

// export default function SearchBar({onSearch}) {
//    const [character,setCharacter]=useState("")
//    const handleChange=(e)=>{
//       setCharacter(e.target.value)
//    }
//    return (
//       <Div>
//          <Input type='search' placeholder="Buscar"  onChange={handleChange}/>
//          <Button onClick={()=>onSearch(character)}>Agregar</Button> 
//       </Div>
//    );
// }

export default function SearchBar(props) {
  let [characterId, setCharacterId] = useState("");

  const limpiarBusqueda = () => {
    setCharacterId("");
  };

  const handleSearch = () => {
    if (characterId < 0 || characterId > 826) {
      alert("El id debe ser un número entre 0 y 826");
    }
    props.onSearch(characterId);
    limpiarBusqueda();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Div>
      <Input
        type="text"
        name="search"
        id="#"
      placeholder='Type Character id...'
        value={characterId}
        onChange={(e) => setCharacterId(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSearch}>Search</Button>
      <Button
        onClick={() => props.onSearch(Math.floor(Math.random() * 826))}
      >Get Random
      </Button>
    </Div>
  );
};
