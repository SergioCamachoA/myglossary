import { useParams, Link } from "react-router-dom"
import React from "react"

export function SingleCategory() {
  let { name } = useParams()
  return (
    <div className="category">
      <h1>{name}</h1>
      <Link to="/">regrese uno</Link>
    </div>
  )
}
