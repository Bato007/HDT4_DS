import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import RenderGraph from './components/renderGraph/RenderGraph'

import bar from '../assets/bar.png'
import cloud from '../assets/cloud.png'
import pie from '../assets/pie.png'

import './theme.scss'

const App = () => {
  const [actualGraph, setActualGraph] = useState(1)

  return (
    <div className="root">
      <div className="title" />

      <div className="exploratoy">
        <div className="tweet-container">
          <p>
            Se cuenta con cinco variables, las cuales se encuentran en
            el idioma inglés y se describen a continuación:
            <ul>
              <li>id: Este es el identificador del tweet.</li>
              <li>text: Muestra lo que escribió el usuario en el tweet.</li>
              <li>location: Desde que lugar fue enviado el tweet.</li>
              <li>keyword: Una palabra clave del tweet que puede estar vacía.</li>
              <li>target: Muestra si el tweet si es sobre un desastre real (1) o no (0).</li>
            </ul>
          </p>
          <hr />
          <button type="button">Tweet</button>
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
          </div>
          <div className="right-container">
            <RenderGraph graphNumber={actualGraph} />
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
