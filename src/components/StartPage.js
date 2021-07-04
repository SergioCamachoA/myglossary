import React, { useState } from "react"
import { SectionOne } from "./SectionOne"
import { SectionTwo } from "./SectionTwo"
import { SectionThree } from "./SectionThree"

export const StartPage = () => {
  const categoriesArray = [
    "cAtegoRy",
    "dAtA stRuctuRes",
    "ReAct",
    "ARRAys",
    "objects",
    "css",
    "MAth And numbeRs",
  ]

  //opening animation
  const [initialLine, setInitialLine] = useState(false)
  const [openingFinished, setOpeningFinished] = useState(false)

  //values for section two translating
  const [moveOneL, setMoveOneL] = useState()
  const [moveTwoL, setMoveTwoL] = useState()
  const [moveTwoR, setMoveTwoR] = useState()
  //values for section three scaling
  const [scaleMost, setScaleMost] = useState()

  function handleScroll(e) {
    let scrollpercent = e.target.scrollTop
    let clientHeight = document.documentElement.clientHeight

    //SECTION TWO ANIMATION
    let moveTop = ((scrollpercent - clientHeight * 0.45) * 0.22575758).toFixed(
      2
    )
    if (moveTop >= 0 && moveTop <= 74.5) {
      setMoveOneL(moveTop)
    }

    let moveBottom = (
      (scrollpercent - clientHeight * 0.45) *
      0.16666667
    ).toFixed(2)
    if (moveBottom >= 0 && moveBottom <= 55) {
      setMoveTwoL(moveBottom)
      setMoveTwoR(-(moveBottom * 1.70909091))
    }

    if (moveTop > 74.5) {
      setMoveOneL(74.5)
      setMoveTwoL(55)
      setMoveTwoR(-94)
    }
    if (moveTop < 0) {
      setMoveOneL(0)
      setMoveTwoL(0)
      setMoveTwoR(0)
    }

    //SECTION THREE ANIMATION
    let mostHeight = Number.parseFloat(
      ((scrollpercent - clientHeight) / clientHeight) * 7.94 + 5.6
    ).toFixed(2)
    if (mostHeight < 5.6) setScaleMost(5.6)
    if (mostHeight >= 5.6 && mostHeight <= 11.32) setScaleMost(mostHeight)
  }

  return (
    <div onScroll={handleScroll} className="start-page">
      {!openingFinished ? (
        <div className="start-opening">
          <div
            onAnimationEnd={() => setOpeningFinished(true)}
            className={initialLine ? "start-line opening-line" : "start-line"}
          ></div>
          <div
            onMouseEnter={() => setInitialLine(true)}
            className={
              initialLine ? "start-title opening-title" : "start-title"
            }
          >
            <h1>MyGlossARy</h1>
          </div>
        </div>
      ) : (
        <>
          <SectionOne categoriesArray={categoriesArray} />
          <SectionTwo
            categoriesArray={categoriesArray}
            moveOneL={moveOneL}
            moveTwoL={moveTwoL}
            moveTwoR={moveTwoR}
            setOpeningFinished={setOpeningFinished}
          />
          <SectionThree scaleMost={scaleMost} />
        </>
      )}
    </div>
  )
}
