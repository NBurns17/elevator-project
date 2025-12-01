import { useEffect, useState } from 'react';
import style from './elevatorPanel.module.css'

// Panel for the elevator
const ElevatorPanel = ({minValue, onChange}) => {
  const [count, setCount] = useState(minValue)

  // Update parent whenever updating the count
  useEffect(() => {
    onChange(count);
  }, [count])

  const handleInputChange = (event) => {
    setCount(event.target.value);
  }

  const onUpPress = () => {
    setCount(count + 1);
  }

  const onDownPress = () => {
    setCount(count - 1);
  }

  return (
    <div className={style.container}>
      <h3>Add Floor</h3>
      <div className={style.panel}>
        <button onClick={onUpPress}>Up</button>
        <input type='number' min={minValue} value={count} onChange={handleInputChange}/>
        <button disabled={count <= minValue} onClick={onDownPress}>Down</button>
      </div>
      <h3>Remove Floor</h3>
    </div>
  )
}

export default ElevatorPanel;