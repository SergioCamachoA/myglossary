import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import { motion } from "framer-motion"


export const Nav = ({ categoriesArray }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [pageOut, setPageOut] = useState(false)
    let myVar
    function handleHover() {
        myVar = setTimeout(() => setIsHovered(true), 200)
        return myVar
    }

    function otherShit() {
        clearTimeout(myVar)
        setIsHovered(false)
    }

    return (
        <nav
            className={isHovered ? 'show' : ''}
            onMouseEnter={handleHover}
            onMouseLeave={otherShit}
        >
            {!isHovered ?
                <h2>show categories</h2>
                : categoriesArray.map((each, index) => {
                    return each !== 'cAtegoRy' && (
                        <Link className={!pageOut ? '' : 'page-out'} onClick={() => setPageOut(true)} key={index + 'cat'} to={`/category/${each}`}>
                            {each}
                        </Link>
                    )
                })

            }
        </nav>
    )
}
