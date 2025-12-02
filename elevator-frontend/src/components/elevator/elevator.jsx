import { useEffect, useState } from 'react';
import style from './elevator.module.css'

const Elevator = ({startingFloor, numFloors}) => {
  const [currentFloor, setCurrentFloor] = useState(startingFloor);
  const [floorArray, setFloorArray] = useState('');

  const onCurrentFloorChange = (newFloor) => {
    setCurrentFloor(newFloor);
  }

  const onFloorArrayChange = (newArray) => {
    setFloorArray(newArray);
  }

  const onPress = async () => {
    await fetch('/api/');
    await fetch('/api/trip', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({startingFloor: 1, floorsToVisit: [1, 3, 5]})
    })
    .then(response => response.json())
    .then(data => {console.log(data);})
  }

  return (
    <div className={style.elevator}>
      <h3>Starting Floor: </h3>
      <input type='number' min={startingFloor} value={currentFloor} onChange={onCurrentFloorChange}/>
      <div className={style.elevatorDoors}>
        <div className={style.elevatorDivider}/>
      </div>
      <h3>Floors to visit: </h3>
      <input type='text' value={floorArray} onChange={onFloorArrayChange}/>
      <button onClick={onPress}>press me</button>
    </div>
  )
}

export default Elevator;