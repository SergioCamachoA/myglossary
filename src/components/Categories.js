import React from "react"
import { Link } from "react-router-dom"


export function Categories({ categoriesArray }) {

  return (
    <div className="categories">
      {categoriesArray.map((each, index) => {
        return each !== 'cAtegoRy' && (
          <Link key={index + 'category'} to={`/category/${each}`}>
            {/*SET UP A CLASSNAME TO CHANGE UPPER AND LOWER CASE*/}
            <h1 className='category-element'>{each}</h1>
          </Link>)
      })}
    </div>
  )
}
