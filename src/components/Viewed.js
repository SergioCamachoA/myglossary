import React, { useState } from "react"
import { Link } from "react-router-dom"

export const Viewed = () => {
  const [isClicked, setIsClicked] = useState(false)
  const list = JSON.parse(localStorage.getItem("mainList"))
  // console.log(list)
  let viewsList = []
  if (list !== null) viewsList = list
  return (
    <div>
      {!isClicked ? (
        <div onClick={() => setIsClicked(true)}>
          <h1 className="most-unclicked">most viewed</h1>
        </div>
      ) : (
        <div className="viewed-list" onClick={() => setIsClicked(false)}>
          {viewsList !== null &&
            viewsList.map((each, index) => {
              return (
                <Link key={index + "most"} to={`/${each.topic}`}>
                  <h6>{each.topic}</h6>
                </Link>
              )
            })}
        </div>
      )}
    </div>
  )
}
