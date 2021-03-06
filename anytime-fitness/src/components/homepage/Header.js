import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { Link } from 'react-router-dom';

=======
>>>>>>> bc643a833e0aec89ec31be34b1378fbdbb7cc951

export default function Header () {
    return (
        <Background>
            <StyledHeader>
                <div>
                    <img alt=""/><span>Anytime Fitness</span>
                </div>
                <StyledNav>
<<<<<<< HEAD
                    <Link className="link" to="/sign-up">Become an <br />Instructor</Link>
                    <Link className="link" to="/classes">Explore <br />Classes</Link>
                    <Link className="link" to="/login" >Sign In</Link>
=======
                    <a className="link" href="/">Become an <br />Instructor</a>
                    <a className="link" href="/">Explore <br />Classes</a>
                    <a className="link" href="/">Sign In</a>
>>>>>>> bc643a833e0aec89ec31be34b1378fbdbb7cc951
                </StyledNav>
            </StyledHeader>
            <HeroContent>
                <StyledH1>Any place. Anytime.</StyledH1>
                <StyledH2>Fitness classes at your convenience</StyledH2>
<<<<<<< HEAD
                <p>Whether your looking to get fit for the new year, Or helping others achieve their dream body,</p>
                <p>Anytime Fitness has all the support you need, in one place.</p>
                <NavLink to="sign-up">Join Now</NavLink>
=======
                <Button>Join Now</Button>
>>>>>>> bc643a833e0aec89ec31be34b1378fbdbb7cc951
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
<<<<<<< HEAD
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.9);
=======
>>>>>>> bc643a833e0aec89ec31be34b1378fbdbb7cc951
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
<<<<<<< HEAD
font-size: 1.8rem;
=======
font-size: 1.4rem;
>>>>>>> bc643a833e0aec89ec31be34b1378fbdbb7cc951
font-weight: 300;
padding: 0;
margin: 0;
`
const Background = styled.div`
background: url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'); 
background-size: cover;
height: 80vh;
<<<<<<< HEAD
margin: 0;
=======
>>>>>>> bc643a833e0aec89ec31be34b1378fbdbb7cc951
`

const HeroContent = styled.div`
text-align: left;
width: 60%;
margin: 8% auto;
<<<<<<< HEAD
p {
    margin: 1% auto;
    color: white;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.6);
}
`
const NavLink = styled(Link)`
	display: block;
    text-align: center;
	background: linear-gradient(90deg, #11998e 0%, #38ef7d 100%);
	color: #fff;
	font-size: 0.9rem;
	border: 1px;
	border-radius: 5px;
	height: 40px;
	padding: 70px 70px 10px 70px;
	cursor: pointer;
	box-sizing: border-box;
	align-items: center;
	padding-top: 10px;
	box-shadow: 5px 10px 8px #6f8faf;
    width: 25%;
    margin-top: 5%;
    text-decoration: none;

`;
=======
`

const Button = styled.button`
padding: 1% 2%;
font-size: 1rem;
margin-top: 3%;
border-radius: 10px;
`
>>>>>>> bc643a833e0aec89ec31be34b1378fbdbb7cc951
