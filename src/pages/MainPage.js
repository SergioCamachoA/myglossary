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
  const [categoriesArray, setCategoriesArray] = useState(initialArray)

  const mostOf = [
    "example most zero",
    "example most one",
    "example most one",
    "example most one",
    "example most one",
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
          <Most
            currentExampleList={currentExampleList}
            whichMost="most viewed"
          />
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
