import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Most = ({ whichMost, currentExampleList }) => {

    const [isClicked, setIsClicked] = useState(false)
    return (
        <div>
            {!isClicked
                ? <h1
                    className='most-unclicked'
                    onClick={() => setIsClicked(true)}
                >{whichMost}</h1>
                : <div className='list-of-most'
                    // className='most-unclicked'
                    onClick={() => setIsClicked(false)}
                >
                    {currentExampleList.map((each, index) => {
                        return (

                            <Link to={`/${each}`}>
                                <h6 key={index + 'most'}>{each}</h6>
                            </Link>
                        )
                    })}
                </div>
            }
        </div>
    )
}
