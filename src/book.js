// book components

import React, { useState } from 'react'

// importing the external css file
import './index.css'

// Book container
const Book = (props) => {
  const { img, title, author, description } = props
  const [isModalOpen, setModalOpen] = useState(false)
  //   toggleModal function
  const toggleModal = () => {
    setModalOpen(!isModalOpen)
  }
  return (
    // component for the book card
    <section className='BookCard'>
      {/* Component for the book image */}
      <img
        src={img}
        alt={title}
        loading='lazy'
        width={300}
        className='BookCardImage'
      />
      {/* components for the image title */}
      <a
        className='BookTitle'
        href='/'
        onClick={(e) => {
          e.preventDefault()
          toggleModal()
        }}
      >
        {title}
      </a>
      {/* components for the book author */}
      <p className='BookAuthor'>{author}</p>
      {/* modal for description */}
      {isModalOpen && (
        <div className='BookModal'>
          <p>{description}</p>
          <button className='btn CloseButton' onClick={toggleModal}>
            Close
          </button>
        </div>
      )}
    </section>
  )
}

export default Book
