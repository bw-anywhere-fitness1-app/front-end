import React from "react";
import styled from "styled-components";


const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
padding: 2%;
height: 80vh;
border: 1px solid black;
background-image: url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
& .link, span{
    color: white;
    font-weight: bold;
    text-decoration: none;
}
`

const StyledNav = styled.nav`
display: flex;
justify-content: space-around;
width: 30%;
`

export default function Header () {
    return (
        <StyledHeader>
            <div>x
                <img alt=""/><span>Anytime Fitness</span>
            </div>
            <StyledNav>
                <a className="link" href="/">Become an <br />Instructor</a>
                <a className="link" href="/">Explore <br />Classes</a>
                <a className="link" href="/">Sign In</a>
            </StyledNav>
        </StyledHeader>
    )
}