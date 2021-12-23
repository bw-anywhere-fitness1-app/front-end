import React from 'react';
import ClassCard from "./ClassCard";


export default function ClassesList(props) {
    const { classes } = props;
    return (
        <ul>
            {classes?.map((c, index) => <ClassCard data={c} key={index}/>)}
        </ul>
    )
}