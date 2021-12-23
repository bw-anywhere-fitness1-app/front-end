import React from "react";
import styled from "styled-components";

export default function Footer () {
    return (
        <StyledFooter>
            <span>© Anytime Fitness LLC</span>
            <nav>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </nav>
        </StyledFooter>
    )
}

//Styling =================================
const StyledFooter = styled.footer`
height: 3%;
padding: 1%;
font-weight: 100;
margin: 0 auto;
text-align: left;
`

