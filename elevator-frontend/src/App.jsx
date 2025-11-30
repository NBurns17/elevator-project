import React from "react";
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import Counter from "./counter";
// import './src/style.css'

const App = () => {

  return (
    <div id="app">
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src={javascriptLogo} className="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!</h1>
      <div className="card">
        <Counter/>
      </div>
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </div>
  )
}


export default App;