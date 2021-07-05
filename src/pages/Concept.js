import React from 'react'
import { Link, useParams } from "react-router-dom";
// import { ArrayConcepts } from "../components/ArrayConcepts";

export const Concept = () => {
    const { concept } = useParams()
    const mainArray = JSON.parse(localStorage.getItem('mainList'))

    let filteredConcept
    if (mainArray !== null) filteredConcept = mainArray.find(el => el.topic === concept)

    return (
        <div className='concept-page'>
            <Link to='/'>Regrese uno</Link>


            {filteredConcept === undefined
                ? <div className='concept-details'>
                    <h1>no hay registro de <span style={{ color: 'greenyellow' }}>
                        {concept}
                    </span> en el glosario</h1>
                    <h1>ni pedo, regrese una casilla</h1>
                </div>
                : (<div className='concept-details'>
                    <h1>{filteredConcept.id}</h1>
                    <h1>{filteredConcept.topic}</h1>
                    <h1>{filteredConcept.description}</h1>
                    <a rel='noreferrer' target='_blank' href={filteredConcept.mainLink}>main link</a>
                    <a rel='noreferrer' target='_blank' href={filteredConcept.secLink}>secondary link</a>
                    <h1>{filteredConcept.category}</h1>
                </div>
                )}
        </div>)
}
