import { useState } from "react"

const Counter = () => {
  let [count, setCount] = useState(0)

  return (
    <button id="counter" type="button" onClick={() => setCount(count + 1)}>Count is {count}</button>
  )
}

export default Counter;