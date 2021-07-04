import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Most = ({ whichMost, currentExampleList }) => {

    const [isClicked, setIsClicked] = useState(false)
    console.log(currentExampleList);
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
                            <Link key={index + 'most'} to={`/${each}`}>
                                <h6>{each}</h6>
                            </Link>
                        )
                    })}
                </div>
            }
        </div>
    )
}
