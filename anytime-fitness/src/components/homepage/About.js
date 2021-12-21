import React from 'react';
import styled from 'styled-components';

export default function About () {
    return (
        <AboutContainer>
            <LeftDiv>
                <h2>Anytime.</h2>
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
                <h2>Anywhere</h2>
                <p>Lorem ipsum;</p>
                {/* Insert Marketing Points */}
                {/* Call to Action */}
            </RightDiv>

        </AboutContainer>
        
    )
}

//Styling ===================================
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
