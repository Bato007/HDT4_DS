import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import RenderGraph from './components/renderGraph/RenderGraph'

import bar from '../assets/bar.png'
import cloud from '../assets/cloud.png'
import world from '../assets/world.png'
import pie from '../assets/pie.png'

import './theme.scss'

const App = () => {
  const [actualGraph, setActualGraph] = useState(1)

  return (
    <div className="root">
      <div className="title">

        <h1>Clasificación de Tweets</h1>
        <h2>Desastre o no?</h2>
      </div>

      <div className="container">
        <div className="left-container">
          <button type="button" onClick={() => setActualGraph(1)}>
            <img src={bar} alt="bar" />
          </button>
          <button type="button" onClick={() => setActualGraph(2)}>
            <img src={cloud} alt="cloud" />
          </button>
          <button type="button" onClick={() => setActualGraph(3)}>
            <img src={pie} alt="pie" />
          </button>
          <button type="button" onClick={() => setActualGraph(4)}>
            <img src={world} alt="world" />
          </button>
        </div>
        <div className="right-container">
          <RenderGraph graphNumber={actualGraph} />
        </div>

      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
