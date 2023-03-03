import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styled from "styled-components";


const StyledNav = styled.div`
display: flex;
justify-content:space-around;
align-items: center;
}
`
const Div = styled.div`
color: ButtonColor;
border :solid green 2px;
color: rgb(14, 206, 14);
padding: 10px;
border-radius: 40px;
background-color: rgb(17, 16, 16);
margin-right: 2rem;
position: sticky;



`


export default function NavBar({onSearch,logout}) {
    
    return (
        <StyledNav>
            <Link to={'/home'}><Div className="homelink">Home</Div></Link>
            <Link to={'/favorites'}><Div className="favlink">Favorites</Div></Link>
            <Link to={'/about'}><Div className="aboutlink">About</Div></Link>
            <SearchBar onSearch={onSearch}/>
            <button onClick={logout}>Logout</button>
        </StyledNav>
    )
 }

 