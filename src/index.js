// importing external packages
import React from 'react'
import ReactDOM from 'react-dom'

// importing the css
import './index.css'

// Importing the external books list
import { books } from './books'

// Import book components from external JS file
import BookContainer from './book'

// Importing heading component from external JS file
import { PageHeading } from './heading'

// Main components
function Booklist() {
  return (
    <section className='booklist-container'>
      {books.map((book) => {
        return <BookContainer key={book.id} {...book}></BookContainer>
      })}
    </section>
  )
}

// Rendering the functions
ReactDOM.render(
  <React.Fragment>
    <PageHeading />
    <Booklist />
  </React.Fragment>,
  document.getElementById('root')
)
