import React, { useState, useEffect, useRef } from "react"
import { handlerVisitCount } from "../helpers/handlerVisitCount"
import { Link } from 'react-router-dom'

export const Search = ({ updateRecent }) => {
  const singleResult = useRef(null)

  const [searchInput, setSearchInput] = useState("")
  const [fetchedList, setFetchedList] = useState([])
  const [results, setResults] = useState([])
  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    setFetchedList(JSON.parse(localStorage.getItem("mainList")))
  }, [updateRecent])

  function handlerSearch(e) {
    e.preventDefault()
    if (searchInput === '') {
      setNoResults(false)
      setResults([])
    } else {

      let results = fetchedList.filter((each) =>
        each.topic.toLowerCase().includes(searchInput.toLowerCase())
      )

      if (results.length === 0) {
        singleResult.current.className = 'results-two'
        setNoResults(true)
      } else if (results.length === 1) {
        singleResult.current.className = 'results-two'
        setNoResults(false)
        setResults(results)
      } else {
        singleResult.current.className = 'results'
        setNoResults(false)
        setResults(results.slice(0, 11))
      }
      setSearchInput('')
    }
  }

  function handlerInput(e) {
    setSearchInput(e.target.value)
  }

  return (
    <>
      <form onSubmit={handlerSearch}>
        <input onChange={handlerInput} type="text" value={searchInput} />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div ref={singleResult} className='results'>
        {noResults
          ? <h6>that word doesn't look familiar...</h6>
          : results.map((each) => {
            return (
              <Link
                onClick={() => handlerVisitCount(each.id)}
                key={each.id}
                to={`/${each.topic}`}
              >
                <h6>{each.topic}</h6>
              </Link>
            )
          })
        }
      </div>
    </>
  )
}
