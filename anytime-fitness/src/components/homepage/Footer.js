import React from "react";
import styled from "styled-components";

export default function Footer () {
    return (
        <StyledFooter>
            <h2>footer</h2>
        </StyledFooter>
    )
}

//Styling =================================
const StyledFooter = styled.footer`
height: 5%;
border: 1px solid black;
`