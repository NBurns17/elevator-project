import style from './elevator.module.css'

const Elevator = ({numFloors, floorArray}) => {


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
    .then(response => console.log(response.json))
    .then(data => console.log(data))
  }

  return (
    <div className={style.elevator}>
      <h3>Starting Floor: </h3>
      <input type='number' min={0}/>
      <div className={style.elevatorDoors}>
        <div className={style.elevatorDivider}/>
      </div>
      <h3>Floors to visit: </h3>
      <input type='text' min={0}/>
      <button onClick={onPress}>press me</button>
    </div>
  )
}

export default Elevator;