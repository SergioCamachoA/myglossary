import React, { useRef, useState } from "react"
import { Form } from "./Form"

export function SectionOne({ categoriesArray }) {
  const opac = useRef(null)
  const opacTwo = useRef(null)

  const [animated, setAnimated] = useState(false)
  const [clicked, setClicked] = useState(false)

  function handleOpacity(e) {
    let axisX = Number.parseFloat(
      (e.pageX / window.innerWidth) * 1.8 + 0.1
    ).toFixed(2)

    opac.current.style.opacity = axisX
    opacTwo.current.style.opacity = axisX - 0.3

    if (axisX > 1.22) {
      opacTwo.current.style.color = "#d39935"
    }
    if (axisX <= 1.22) {
      opacTwo.current.style.color = "#2f2f30"
    }
  }

  function handleEndedAnimation() {
    setAnimated(false)
    setClicked(true)
  }
  return (
    <>
      {!clicked ? (
        <div onMouseMove={handleOpacity} className="start">
          <div
            onClick={() => setAnimated(true)}
            className="clicker"
          // className={animated ? "layer clicker" : "clicker"}
          ></div>
          <h1
            ref={opac}
            onAnimationEnd={handleEndedAnimation}
            className={
              animated ? "section-one-title layer" : "section-one-title"
            }
          >
            Add A neW concept
          </h1>
          <h1
            ref={opacTwo}
            className={
              animated ? "section-one-title-two layer" : "section-one-title-two"
            }
          >
            Add A neW concept
          </h1>
        </div>
      ) : (
        <Form
          categoriesArray={categoriesArray}
          setClicked={setClicked} />
      )}
    </>
  )
}
