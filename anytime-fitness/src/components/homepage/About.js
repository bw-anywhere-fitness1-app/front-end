import React from 'react';
import styled from 'styled-components';

export default function About () {
    return (
        <AboutContainer>
            <LeftDiv>
                <h2>Anytime.</h2>
                <ul>
                    <li>Find Classes that fit your schedule</li><br />
                    <li>From Yoga to Crossfit, We've got certified trainers and instructors to help you reach your fitness goals</li>
                </ul>    {/* Insert Marketing Points */}
                {/* Call to Action */}
            </LeftDiv>
            <RightDiv>
                {/* Image */}
            </RightDiv>
            <LeftDiv2>
                {/* Image */}
            </LeftDiv2>
            <RightDiv2>
                <h2>Anywhere</h2>
                <ul>
                    <li>Find Classes right in your neighborhood</li><br />
                    <li>Groups and personal training available for you and your friends </li><br />
                    <li>Anytime Fitness is in your area</li>
                </ul>    {/* Insert Marketing Points */}
            </RightDiv2>
            <Button>Join Now</Button>

        </AboutContainer>
        
    )
}

//Styling ===================================
const AboutContainer = styled.div`
padding-top: 5%;
display: flex;
flex-wrap: wrap; 
justify-content: space-between;
h2 {
    font-size: 2.8rem;
}
li {
    font-size 1.8rem;
    font-weight: 200;
}
`
const LeftDiv = styled.div`
width: 46%;
height: 50vh;
margin: 2%;
margin-left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
h2 {
    margin-left: 6%;
}
`

const RightDiv = styled.div`
width: 46%;
height: 50vh;
margin: 2%;
margin-right: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
border-radius: 10px;
h2 {
    margin-left: 6%;
}
background: url('https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/2565/2017/12/img-banner.png');
background-size: cover;
`
const LeftDiv2 = styled.div`
width: 46%;
height: 50vh;
margin: 2%;
margin-left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
border-radius: 10px;
h2 {
    margin-left: 6%;
}
background: url('https://i1.wp.com/foundryfitness.com.au/wp-content/uploads/2017/05/Home-page-group4.png?fit=484%2C600&ssl=1');
background-size: cover;
`

const RightDiv2 = styled.div`
width: 46%;
height: 50vh;
margin: 2%;
margin-right: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
border-radius: 10px;
h2 {
    margin-left: 6%;
}
`

const Button = styled.button`
padding: 1% 2%;
font-size: 1rem;
margin-top: 3%;
border-radius: 10px;
margin: 5% auto;
`