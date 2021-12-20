import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
height: 5%;
border: 1px solid black;
`
export default function Footer () {
    return (
        <StyledFooter>
            <h2>footer</h2>
        </StyledFooter>
    )
}