import React, { useState, useMemo } from 'react'
import Plotly from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import Dropbox from '../dropbox/Dropbox'
import words from '../../../assets/data/words.json'
import './barplot.scss'

const Plot = createPlotlyComponent(Plotly)

const options = ['Accident', 'Non Accidnte']
const amounts = [10, 15, 20]

const BarPlot = () => {
  const [option, setOption] = useState(options[0])
  const [amount, setAmount] = useState(amounts[0])
  const data = useMemo(
    () => (
      option === options[0] ? words.accident : words.nonAccident
    ),
    [option],
  )

  return (
    <div className="plot-container">
      <div className="dropbox-container">
        <Dropbox options={options} setOption={setOption} />
        <Dropbox options={amounts} setOption={setAmount} />
      </div>
      <Plot
        data={[
          {
            type: 'bar',
            x: data.label.slice(0, amount),
            y: data.value.slice(0, amount),
          },
        ]}
      />
    </div>
  )
}

BarPlot.propTypes = {}

export default BarPlot
