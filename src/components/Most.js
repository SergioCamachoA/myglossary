import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Most = ({ whichMost, updateRecent }) => {
    const [recentsList, setRecentsList] = useState([])
    useEffect(() => {
        let list = JSON.parse(localStorage.getItem('mainList'))
        function changeOrder(list) {
            for (let i = 0; i <= (list.length / 2); i++) {
                let changer
                changer = list[i]
                list[i] = list[list.length - (1 + i)]
                list[list.length - (1 + i)] = changer
            }
            return list
        }

        let mostRecent = changeOrder(list.slice(-5))
        setRecentsList(mostRecent)
    }, [updateRecent])

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
                    {recentsList !== null && recentsList.map((each, index) => {
                        return (
                            <Link key={index + 'most'} to={`/${each.topic}`}>
                                <h6>{each.topic}</h6>
                            </Link>
                        )
                    })}
                </div>
            }
        </div>
    )
}
