import Card from '../Card/Card.jsx';
import styled from 'styled-components';
/* import { addFavorite, removeFavorite } from "../redux/actions.js";
import { connect } from 'react-redux'; */
const StyledCards = styled.div`
//  display:flex;
// justify-content:space-around;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(31%, 1fr));
gap: 16px;
`

export default function Cards(props) {
   const { characters } = props;
   return (
   <StyledCards>
      {characters.map(personaje => <Card key={personaje.id}
          name={personaje.name}
          species={personaje.species}
          gender={personaje.gender}
          image={personaje.image}
          onClose={props.onClose}

          id={personaje.id}
        />)}
   </StyledCards>)
}

