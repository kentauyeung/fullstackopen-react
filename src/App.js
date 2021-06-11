import React, { useState } from 'react'

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Sum = (p1, p2, p3) => {
  return p1 + p2 + p3
}

const Average = (p1, p2, p3) => {
  return 
}

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1
    }
    setClicks(newClicks)
  }

  const handleNeutralClick = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1
    }
    setClicks(newClicks)
  }

  const handleBadClick = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1
    }
    setClicks(newClicks)
  }


  return (
    <div>
      <h3>Give Feedback</h3>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      console.log({clicks.good})
      <div>
        <h3>Stats</h3>
        <div>Good {clicks.good}</div>
        <div>Bad {clicks.bad}</div>
        <div>Neutral {clicks.neutral}</div>
        <div>All {Sum(clicks.good, clicks.bad, clicks.neutral)}</div>
      </div>
    </div>
  )
}

export default App