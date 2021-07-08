import React, { useState } from "react"
import { Nav } from "../components/Nav"
import { Most } from "../components/Most"
import { Form } from "../components/Form"
import { Viewed } from "../components/Viewed"
import { Search } from "../components/Search"

export const MainPage = () => {
  const initialArray = [
    "category",
    "data structures",
    "react",
    "arrays",
    "objects",
    "css",
    "Math and Number",
  ]
  const [categoriesArray] = useState(initialArray)
  const [updateRecent, setUpdateRecent] = useState("")

  return (
    <div>
      <Nav categoriesArray={categoriesArray} />
      <div className="main-section">
        <div className="first-section">
          <Search updateRecent={updateRecent} />
          <Most whichMost="most recent" updateRecent={updateRecent} />
          <Viewed updateRecent={updateRecent} />
        </div>
        <Form
          updateRecent={updateRecent}
          setUpdateRecent={setUpdateRecent}
          categoriesArray={categoriesArray}
        />
      </div>
    </div>
  )
}
