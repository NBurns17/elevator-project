import style from './elevatorPanel.module.css'

const ElevatorPanel = () => {
  return (
    <div className={style.container}>
      <h3>Add Floor</h3>
      <div className={style.panel}>
        <p>1</p>
        <input type='number' min={0}/>
        <p>2</p>
      </div>
      <h3>Remove Floor</h3>
    </div>
  )
}

export default ElevatorPanel;