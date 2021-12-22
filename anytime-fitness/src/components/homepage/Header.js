import React from "react";
import styled from "styled-components";

export default function Header () {
    return (
        <Background>
            <StyledHeader>
                <div>
                    <img alt=""/><span>Anytime Fitness</span>
                </div>
                <StyledNav>
                    <a className="link" href="/">Become an <br />Instructor</a>
                    <a className="link" href="/">Explore <br />Classes</a>
                    <a className="link" href="/">Sign In</a>
                </StyledNav>
            </StyledHeader>
            <HeroContent>
                <StyledH1>Any place. Anytime.</StyledH1>
                <StyledH2>Fitness classes at your convenience</StyledH2>
                <p>Whether your looking to get fit for the new year, Or helping others achieve their dream body,</p>
                <p>Anytime Fitness has all the support you need, in one place.</p>
                <Button>Join Now</Button>
            </HeroContent>
        </Background>
    )
}


//Styling =========================================

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2%;
& .link, span{
    color: white;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.9);
}
`

const StyledNav = styled.nav`
display: flex;
justify-content: space-around;
width: 30%;
`

const StyledH1 = styled.h1`
color: white;
font-size: 2.6rem;
padding: 0;
margin-top: 0;
margin-bottom: 1%;
`
const StyledH2 = styled.h2`
color: white;
font-size: 1.8rem;
font-weight: 300;
padding: 0;
margin: 0;
`
const Background = styled.div`
background: url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'); 
background-size: cover;
height: 80vh;
margin: 0;
`

const HeroContent = styled.div`
text-align: left;
width: 60%;
margin: 8% auto;
p {
    margin: 1% auto;
    color: white;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.6);
}
`

const Button = styled.button`
padding: 1% 2%;
font-size: 1rem;
margin-top: 3%;
border-radius: 10px;
`