import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export function SectionThree({ scaleMost }) {
  const [scale, setScale] = useState()

  useEffect(() => {
    setScale({ fontSize: `${scaleMost}vw` })
  }, [scaleMost])

  return (
    <section className="section-three">
      <div className="s3-main-title">
        <h1 style={scale} className="most-recent">
          Most
          <Link to='/most-recent'>
            <span> Recent</span>
          </Link>
        </h1>
        <h1 style={scale} className="most-viewed">
          Most
          <Link to='most-viewed'>
            <span> vieWed</span>
          </Link>
        </h1>
      </div>
      <div className="s3-shadow-title">
        <h1 style={scale} className="most-recent">
          Most <span className='s2'>Recent </span>
        </h1>
        <h1 style={scale} className="most-viewed">
          Most <span className='s2'>vieWed</span>
        </h1>
      </div>
    </section>
  )
}
