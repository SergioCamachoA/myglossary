import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Most = ({ whichMost, updateRecent }) => {
    const [isClicked, setIsClicked] = useState(false)
    const [recentsList, setRecentsList] = useState([])
    useEffect(() => {
        let list = JSON.parse(localStorage.getItem('mainList'))
        function changeOrder(list) {
            if (list.length === 2) {
                let changer = list[0]
                list[0] = list[1]
                list[1] = changer
            } else {
                for (let i = 0; i <= (list.length / 2); i++) {
                    let changer
                    changer = list[i]
                    list[i] = list[list.length - (1 + i)]
                    list[list.length - (1 + i)] = changer
                }
            }
            return list
        }
        if (list !== null) setRecentsList(changeOrder(list.slice(-5)))
    }, [updateRecent])

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
                    {recentsList !== null && recentsList.map((each) => {
                        return (
                            <Link key={each.id} to={`/${each.topic}`}>
                                <h6>{each.topic}</h6>
                            </Link>
                        )
                    })}
                </div>
            }
        </div>
    )
}
