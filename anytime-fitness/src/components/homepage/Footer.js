import React from "react";
import styled from "styled-components";

export default function Footer () {
    return (
        <StyledFooter>
            <span>© Anytime Fitness LLC</span>
        </StyledFooter>
    )
}

//Styling =================================
const StyledFooter = styled.footer`
height: 3%;
padding: 1%;
font-weight: 100;
`

