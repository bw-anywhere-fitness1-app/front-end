import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


const Images = [
    'https://www.cnet.com/a/img/VHMLZpX7mdHq5yF94Z_3sKpIVnE=/1200x675/2017/03/23/48e8c5e3-b87f-4549-bfbd-6db8140b5513/power-rangers-original.jpg',
    'https://blog.fitbit.com/wp-content/uploads/2018/03/0315-boxing-blog-hero.jpg',
    'https://i.ytimg.com/vi/X79oNWQ_tS4/maxresdefault.jpg'
]

export default function Featured() {

    const [featured, setFeatured] = useState([]);

    useEffect( () => axios.get('https://bw-anywhere-fitness1-app.herokuapp.com/api/classes')
    .then( resp => setFeatured(resp.data))
    )

    return (
        <>
        <StyledH2>Checkout our most popular classes!</StyledH2>
        <StyledDiv className="featured-container">
            {
                featured.slice(0, 4).map((className, index) => {
                    return (
                        <FeaturedClass key={index}>
                            {className.class_name}
                        </FeaturedClass>
                    )
                })
            }
        </StyledDiv>
        </>
    )
}

//Styling =================================
const StyledDiv = styled.div`
display: flex;
justify-content: space-evenly;
`

const FeaturedClass = styled.div`
margin: 7% 1%;
width: 20%;
max-width:30%;
max-height: 30vh;
height: 40vh;
border: 1px solid black;
font-size: 1.5rem;
background: url(${Images.map( props => props.images)})
`

const StyledH2 = styled.h2`
margin-top: 2%;
`

