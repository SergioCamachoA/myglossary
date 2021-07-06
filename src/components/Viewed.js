import React, { useState } from "react"
import { Link } from "react-router-dom"

export const Viewed = () => {
  const [isClicked, setIsClicked] = useState(false)
  const list = JSON.parse(localStorage.getItem("mainList"))
  console.log(list)

  function handlerVisitCount(topic) {
    console.log("matematicas perronas")
    console.log(topic)
    console.log(list)
    // let indexOfViewed = list.findIndex((each) => each.topic === topic)
    let visitedTopic = list.find((each) => each.topic === topic)
    if (visitedTopic.views === undefined) {
      visitedTopic.views = 1
    } else {
      visitedTopic.views += 1
    }
    localStorage.setItem("mainList", JSON.stringify(list))
    // list.splice(indexOfViewed, 1, visitedTopic)
    // console.log(list)
  }

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
                <Link
                  onClick={() => handlerVisitCount(each.topic)}
                  key={index + "most"}
                  to={`/${each.topic}`}
                >
                  <h6>{each.topic}</h6>
                </Link>
              )
            })}
        </div>
      )}
    </div>
  )
}
