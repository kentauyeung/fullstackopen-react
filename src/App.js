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

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)


  return (
    <div>
      <h3>Give Feedback</h3>
      <Button handleClick={() => setGood + 1} text="good" />
      <Button handleClick={() => bad + 1} text="bad" />
      <Button handleClick={() => setNeutral + 1} text="neutral" />
      <h3>Stats</h3>
      <div>Good {good.value}</div>
      <div>Bad {bad.value}</div>
      <div>Neutral {neutral.value}</div>
    </div>
  )
}

export default App

// https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps
// exercises