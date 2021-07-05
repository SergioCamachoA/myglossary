import React from 'react'
import { Link, useParams } from "react-router-dom";
// import { ArrayConcepts } from "../components/ArrayConcepts";

export const Concept = () => {
    const { concept } = useParams()
    const mainArray = JSON.parse(localStorage.getItem('mainList'))
    console.log(mainArray);

    let filteredConcept
    if (mainArray !== null) filteredConcept = mainArray.find(el => el.topic === concept)

    console.log(filteredConcept);
    return (
        <>
            <Link to='/'>Regrese uno</Link>


            {filteredConcept === undefined
                ? <>
                    <h1>no hay registro de <span style={{ color: 'greenyellow' }}>
                        {concept}
                    </span> en el glosario</h1>
                    <h1>ni pedo, regrese una casilla</h1>
                </>
                : (<div>
                    <h1>{filteredConcept.id}</h1>
                    <h1>{filteredConcept.topic}</h1>
                    <h1>{filteredConcept.description}</h1>
                    <h1>{filteredConcept.mainLink}</h1>
                    <h1>{filteredConcept.secLink}</h1>
                    <h1>{filteredConcept.category}</h1>
                </div>
                )}
        </>)
}
