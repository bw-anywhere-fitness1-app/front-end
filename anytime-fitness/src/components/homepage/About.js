import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const LeftDiv = styled.div`
width: 45%;
height: 50vh;
margin: 2%;
border: 1px solid black;
`

const RightDiv = styled.div`
width: 45%;
height: 50vh;
margin: 2%;
border: 1px solid black;
`



export default function About () {
    return (
        <AboutContainer>
            <LeftDiv>
                <h1>Title</h1>
                <p>Lorem ipsum</p>
                {/* Insert Marketing Points */}
                {/* Call to Action */}
            </LeftDiv>
            <RightDiv>
                {/* Image */}
            </RightDiv>
            <LeftDiv>
                {/* Image */}
            </LeftDiv>
            <RightDiv>
                <h1>Title</h1>
                <p>Lorem ipsum;</p>
                {/* Insert Marketing Points */}
                {/* Call to Action */}
            </RightDiv>

        </AboutContainer>
        
    )
}