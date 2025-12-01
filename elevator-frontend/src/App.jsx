import React, { useState } from "react";
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import Counter from "./counter";
import TravelResult from "./components/travel-result/travelResult";
import Elevator from "./components/elevator/elevator";
import ElevatorPanel from "./components/elevator-panel/elevatorPanel";
// import './src/style.css'

const App = () => {
  const minFloors = 1;
  const [numFloors, setNumFloors] = useState(minFloors);

  return (
    <div id="app">
      <TravelResult/>
      <Elevator numFloors={numFloors}/>
      <ElevatorPanel minValue={minFloors} onChange={setNumFloors}/>
    </div>
  )
}


export default App;