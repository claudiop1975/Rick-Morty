import React from 'react'
import { connect,useDispatch } from 'react-redux';
import styled from "styled-components";
import { orderCards,filterCards } from '../../redux/actions.js';
import { Link } from "react-router-dom";

const Spec = styled.div`
display: flex;
justify-content:space-around;`
const StyledCard = styled.div`
display:flex;
flex-direction: column;
position:relative;
max-width:20%;
border: solid rgb(14 206 14) 4px;
border-radius: 1rem;
background: black;
margin-top: 1rem;`
const StyledCards = styled.div`
display: flex;
justify-content:space-around;
flex-wrap: wrap;`
const Name = styled.h2`
background: black;
opacity: 55%;
color: white;
position:absolute; 
bottom:15%;
font-size: 18px;`
const Img = styled.img`
padding-top: 5px
`
export const Favorites = ({ myFavorites }) => {
    const [favs, setFavs] = React.useState([])
    React.useEffect(() => {
        setFavs(myFavorites,)
    }, [myFavorites])

    const dispatch = useDispatch()

   const handleDispatch=(e)=>{
    const {name,value}=e.target
    if(name==='order'){
        return dispatch(orderCards(value))
    }
    if(name==='filter'){
        return dispatch(filterCards(value))
    }
   }
    return (
        <div>
            <div>
                <select name='order' onClick={handleDispatch}>
                    <option value={'Ascendente'}>Ascendente</option>
                    <option value={'Descendente'}>Descendente</option>
                </select>
                <select name='filter' onClick={handleDispatch}>
                    <option value={'Male'}>Male</option>
                    <option value={'Female'}>Female</option>
                    <option value={'Genderless'}>Genderless</option>
                    <option value={'unknown'}>unknown</option>
                </select>
            </div>
                <StyledCards>
                    {favs.map(favorito =>
                        <StyledCard>
                            <Img src={favorito.image} alt="" />
                            <Name>{favorito.name}</Name>
                            <Link to={`/detail/${favorito.id}`}><Name>{favorito.name}</Name></Link>
                        </StyledCard>
                    )}
                </StyledCards>
            </div>
    )
}




function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites);
