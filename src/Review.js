import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'

const Review = () => {
  const [index, setindex] = useState(2)
  // console.log(people)
  const { name, job, image, text } = people[index]
  const checkNumber = (Number) => {
    if (Number < 0) {
      return people.length - 1
    }
    if (Number > people.length - 1) {
      return 0
    }

    return Number
  }
  const prevperson = () => {
    setindex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const nextperson = () => {
    setindex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const randomperson = () => {
    setindex(() => {
      let random = Math.floor(Math.random() * people.length)
      if (random === index) {
        random = index + 1
      }

      return checkNumber(random)
    })
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevperson} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextperson} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomperson}>
        suprise me
      </button>
    </article>
  )
}

export default Review
