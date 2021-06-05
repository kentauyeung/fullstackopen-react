import React from 'react'



const App = () => {

  const Header = () => {

  }
  
  const Content = () => {
    return (
      <div>
        <Part />
        <Part />
        <Part />
      </div>
    )
  }
  
  const Total = () => {
  
  }

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'Start of a component'
  const exercise3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercise1}
      </p>
      <p>
        {part2} {exercise2}
      </p>
      <p>
        {part3} {exercise3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
