import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { handlerVisitCount } from '../helpers/handlerVisitCount'

export const Viewed = ({ updateRecent }) => {
  const [isClicked, setIsClicked] = useState(false)
  const [viewsList, setViewsList] = useState([])

  useEffect(() => {
    let fetchedList = JSON.parse(localStorage.getItem("mainList"))

    function changeOrder(list) {
      list.sort((a, b) => b.views - a.views)

      return list.slice(0, 7)
    }

    if (fetchedList !== null) {
      setViewsList(changeOrder(fetchedList))
    }
  }, [updateRecent])

  // function handlerVisitCount(id) {
  //   let fetchedList = JSON.parse(localStorage.getItem("mainList"))

  //   let filtered = fetchedList.find((each) => each.id === id)
  //   if (filtered !== undefined) filtered.views += 1
  //   localStorage.setItem("mainList", JSON.stringify(fetchedList))
  // }

  return (
    <div>
      {!isClicked ? (
        <div onClick={() => setIsClicked(true)}>
          <h1 className="most-unclicked">most viewed</h1>
        </div>
      ) : (
        <div className="viewed-list" onClick={() => setIsClicked(false)}>
          {viewsList !== null &&
            viewsList.map((each) => {
              return (
                <Link
                  onClick={() => handlerVisitCount(each.id)}
                  key={each.id}
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
