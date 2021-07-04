import React from 'react'
import { Link } from "react-router-dom";

export const Concept = ({ conceptObject }) => {
    // const { concept } = useParams()
    return (
        <div>
            {/* <h1>{concept}</h1> */}
            <h1>{conceptObject.topic}</h1>
            <h1>{conceptObject.category}</h1>
            <h1>{conceptObject.mainLink}</h1>
            <p>{conceptObject.description}</p>

            <Link to='/'>Regrese uno</Link>
        </div>
    )
}
