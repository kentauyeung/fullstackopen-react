import React from 'react'



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise = 10
      },
      {
        name: 'Using props to pass data',
        exercise = 7
      },
      {
        name: 'Start of a component',
        exercise = 14
      }
    ]
  }

  return (
    <div>
     <Header course = {course} />
     <Content course = {parts} />
     <Total parts = {parts} />
    </div>
  )
}

export default App
