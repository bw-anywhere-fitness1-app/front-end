import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const classImage = {
    pilates: 'https://assets1.ignimgs.com/2018/08/28/powerrangers-1280-1535474504163_160w.jpg?width=1280',
    boxing: 'https://contents.mediadecathlon.com/b71971/k$ff8f5eb3aad78963d5c9506d05cb30ee/800x0/2821pt2116/3761xcr3761/CARDIO.jpg?format=auto&quality=80',
    aerobics: 'https://i.ytimg.com/vi/Ua61XY84gGg/maxresdefault.jpg',
    swimming: 'https://i.insider.com/5f215ac2de1e9622fd65e7a4?width=1200&format=jpeg'
}

const img = Object.values(classImage);

export default function Featured() {

    const [featured, setFeatured] = useState([]);

    useEffect( () => axios.get('https://bw-anywhere-fitness1-app.herokuapp.com/api/classes')
    .then( resp => {setFeatured(resp.data)})
    .catch( err => console.log(err)), [featured])

    return (
        <>
            <StyledH2>Checkout our most popular classes!</StyledH2>
            <StyledDiv classInfo="featured-container">
                {
                    featured.slice(0, 4).map((classInfo, index) => {
                        return (
                            <FeaturedClass theme={img[index]} classImage={classImage} key={index}>
                                <TextArea>
                                    <h4>{classInfo.class_name}</h4>
                                    <p>class type: {classInfo.class_type}</p>
                                </TextArea>
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
justify-content: space-between;
`

const FeaturedClass = styled.div`
margin-bottom: 10%;
min-width:10%;
width: 20%;
max-width:30%;
height: 40vh;
background-image: url(${pr => pr.theme});
background-size: cover;
background-position: center;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
border: 2px solid black;
`

const StyledH2 = styled.h2`
margin: 5% auto;
padding: 0;
text-align: left;
font-size: 2rem;
`

const TextArea = styled.div`
color: #fff;
display: flex;
flex-direction: column;
background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), transparent);
border-radius: 10px;
font-size: 1.2em;
padding-left: 5%;
h4 {
    margin-bottom:0;
}
p {
    margin: 0;
    font-size: 0.8em;
}
`

