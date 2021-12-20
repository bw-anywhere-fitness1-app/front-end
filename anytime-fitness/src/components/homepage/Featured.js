import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
display: flex;
justify-content: space-around;
`

const FeaturedClass = styled.div`
margin: 7% 1%;
width: 20%;
max-width:20%;
max-height: 30vh;
height: 40vh;
border: 1px solid black;
`

export default function Featured() {
    return (
        <StyledDiv className="featured-container">
            <FeaturedClass className="featured1">Featured{/* Featured Class */}</FeaturedClass>
            <FeaturedClass className="featured2">Featured{/* Featured Class */}</FeaturedClass>
            <FeaturedClass className="featured3">Featured{/* Featured Class */}</FeaturedClass>
            <FeaturedClass className="featured4">Featured{/* Featured Class */}</FeaturedClass>
            <FeaturedClass className="featured5">Featured{/* Featured Class */}</FeaturedClass>
        </StyledDiv>
    )
}
