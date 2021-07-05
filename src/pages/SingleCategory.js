import { useParams, Link } from "react-router-dom"
import React from "react"

export function SingleCategory() {
  const { name } = useParams()

  const conceptsArray = JSON.parse(localStorage.getItem("mainList"))
  const filteredArray = conceptsArray.filter((each) => each.category === name)

  return (
    <div className="category-page">
      <Link to="/">regrese uno</Link>
      <div className="category-details">
        <h1>{name}</h1>
        <div className="category-specs">
          {filteredArray.map((each, index) => {
            return (
              <Link key={index} to={`/${each.topic}`}>
                <h2>{each.topic}</h2>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
