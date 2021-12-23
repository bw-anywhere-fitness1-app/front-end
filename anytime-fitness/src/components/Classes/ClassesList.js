import React, { useEffect, useState } from "react";
import ClassComponent from "./ClassComponent";

const ClassesList = () => {
    // const [classes, setClasses] = useState([]);
    const [classes, setClasses] = useState([]);

    useEffect(() => {

        setClasses(initialClassesList)
    }, []);

    console.log(classes);
    return (
        <div className="cardHolder">
            <h1>Classes</h1>
            <div className="cards">
                {classes.map((item) => {
                    return (
                        <ClassComponent
                            classNew={item}
                            key={item.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ClassesList;