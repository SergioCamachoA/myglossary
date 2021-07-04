import React from 'react'
import { Link } from "react-router-dom";

export const Concept = ({ conceptObject }) => {
    // const { concept } = useParams()
    return (
        <div>
            <h1>{conceptObject.topic}</h1>
            <h1>{conceptObject.description}</h1>
            <h1>{conceptObject.mainLink}</h1>
            <h1>{conceptObject.secLink}</h1>
            <h1>{conceptObject.category}</h1>

            <Link to='/'>Regrese uno</Link>
        </div>
    )
}
