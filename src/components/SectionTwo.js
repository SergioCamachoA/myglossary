import React, { useState } from "react"
import { Categories } from "./Categories";

export function SectionTwo({ categoriesArray, moveOneL, moveTwoL, moveTwoR }) {
  const [showCategories, setShowCategories] = useState(false)

  return (
    <section className="section-two">
      {!showCategories
        ? <div
          onClick={() => setShowCategories(true)}
          className="titles-two">
          <div className="s2-main-title">
            <h1 style={{ transform: `translateX(${moveOneL}%)` }} className="section-two-title">
              bRoWse
            </h1>
            <h1 style={{ transform: `translateX(${moveTwoL}%)` }} className="section-two-title">
              cAtegoRies
            </h1>
          </div>
          <div className="s2-shadow-title">
            <h1 style={{ transform: `translateX(${-moveOneL}%)` }} className="section-two-title-two">
              bRoWse
            </h1>
            <h1 style={{ transform: `translateX(${moveTwoR}%)` }} className="section-two-title-two">
              cAtegoRies
            </h1>
          </div>
        </div>
        : <Categories
          categoriesArray={categoriesArray} />
      }
    </section>)
}
