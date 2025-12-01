import React from "react";
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import Counter from "./counter";
import TravelResult from "./components/travel-result/travelResult";
import Elevator from "./components/elevator/elevator";
import ElevatorPanel from "./components/elevator-panel/elevatorPanel";
// import './src/style.css'

const App = () => {

  return (
    <div id="app">
      <TravelResult/>
      <Elevator/>
      <ElevatorPanel/>
    </div>
  )
}


export default App;