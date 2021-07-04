import React, { useState } from "react"
import { Nav } from "../components/Nav"
import { Most } from "../components/Most"
import { Form } from "../components/Form"

export const MainPage = ({ setConceptObject }) => {
  const initialArray = [
    "category",
    "data structures",
    "react",
    "arrays",
    "objects",
    "css",
    "math and number",
  ]
  const [categoriesArray] = useState(initialArray)

  let recentObject = {
    topic: 'topic',
    description: 'description',
    category: 'category',
    mainLink: 'mainLink',
    secLink: 'secLink',
  }

  const mostOf = [
    recentObject.topic,
    recentObject.topic,
    recentObject.topic,
    recentObject.topic,
    recentObject.topic,
  ]
  const [currentExampleList, setCurrentExampleList] = useState(mostOf)

  return (
    <div>
      <Nav categoriesArray={categoriesArray} />
      <div className="main-section">
        <div className="first-section">
          <Most
            currentExampleList={currentExampleList}
            whichMost="most recent"
          />
          <h1 className='most-unclicked'>most viewed</h1>
        </div>
        <Form
          setConceptObject={setConceptObject}
          currentExampleList={currentExampleList}
          setCurrentExampleList={setCurrentExampleList}
          categoriesArray={categoriesArray}
        />
      </div>
    </div>
  )
}
