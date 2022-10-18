import React, { useState, useMemo } from 'react'
import Plotly from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import Dropbox from '../dropbox/Dropbox'
import keywords from '../../../assets/data/keywords.json'
import './pieplot.scss'

const Plot = createPlotlyComponent(Plotly)

const options = ['Accident', 'Non Accidnte']

const PiePlot = () => {
  const [option, setOption] = useState(options[0])
  const data = useMemo(
    () => (
      option === options[0] ? keywords.accident : keywords.nonAccident
    ),
    [option],
  )

  return (
    <div className="plot-container">
      <div className="dropbox-container">
        <Dropbox options={options} setOption={setOption} />
      </div>
      <Plot
        data={[
          {
            type: 'pie',
            labels: data.label.slice(0, 10),
            values: data.value.slice(0, 10),
            marker: {
              colors: [
                '#0f4f66', '#12627e', '#167697', '#1989af', '#1d9cc8',
                '#21aedf', '#3ab7e3', '#53c0e6', '#6bc9ea', '#84d2ed',
              ],
            },
          },
        ]}
        layout={{
          title: `Most repeated keywords in ${option} tweets`,
          font: { size: 12 },
        }}
      />
    </div>
  )
}

PiePlot.propTypes = {}

export default PiePlot
