// setup the variables
// const img =
//   'https://images-eu.ssl-images-amazon.com/images/I/715qi-cIbML._AC_UL600_SR600,400_.jpg'
// const title = "Don't Believe Everything You Think (English)"
// const author = 'Joseph Nguyen'

// first components (function):
// this is a stateless functional components
// It always return the JSX
// function Greetings() {
//   return (
//     <>
//       <h3>Hey this is purushothaman! This is my first react components</h3>
//       <p> My first react tutorials </p>
//     </>
//   )
// }

// components example 2 (creating the html element)
// const Greetings = () => {
//   return React.createElement('h3', {}, 'Hello, This is purushothaman..')
// }

// rendering the components on the webpage
// ReactDOM.render(<Greetings />, document.getElementById('root'))

// JSX rules
// Return single element
// div/section/ article or Fragments
// use camelCase for html attributes
// className instead of class
// Close every elements
// Formatting

// // Nested components, React tools
// function Greetings() {
//   return (
//     <>
//       <Heading />
//       <Message />
//     </>
//   )
// }

// // Heading components
// const Heading = () => (
//   <h3>Hey this is purushothaman! This is my first react components</h3>
// )

// // Message components
// const Message = () => <p> My first react tutorials </p>

// // Rendering the functions
// ReactDOM.render(<Greetings />, document.getElementById('root'))

// First Hands on

// Component for the image book
// const BookImage = () => (
//   <img
//     src='https://images-eu.ssl-images-amazon.com/images/I/715qi-cIbML._AC_UL600_SR600,400_.jpg'
//     alt='Do not Believe Everything You Think book'
//     loading='lazy'
//     width={300}
//     className='BookCardImage'
//   />
// )
// components for the image title
// const BookTitle = () => (
//   <a className='BookTitle' href='/'>
//     Don't Believe Everything You Think (English)
//   </a>
// )
// components for the book author
// const BookAuthor = () => <p className='BookAuthor'>Joseph Nguyen</p>
