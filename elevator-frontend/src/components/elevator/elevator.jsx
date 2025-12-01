import style from './elevator.module.css'

const Elevator = () => {

  return (
    <div className={style.elevator}>
      <h3>Starting Floor: </h3>
      <input type='number' min={0}/>
      <div className={style.elevatorDoors}>
        <div className={style.elevatorDivider}/>
      </div>
      <h3>Floors to visit: </h3>
      <input type='number' min={0}/>
    </div>
  )
}

export default Elevator;