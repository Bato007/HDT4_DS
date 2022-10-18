import React from 'react'
import PropTypes from 'prop-types'
import BarPlot from '../barPlot/BarPlot'
import Wordcloud from '../wordcloud/Wordcloud'
import PiePlot from '../piePlot/piePlot'
import './renderGraph.scss'

const RenderGraph = ({ graphNumber }) => {
  const renderHTML = () => {
    switch (graphNumber) {
      case 1:
        return <BarPlot />
      case 2:
        return <Wordcloud />
      case 3:
        return <PiePlot />
      default:
        return <div className="blue-graph" />
    }
  }

  return (
    renderHTML()
  )
}

RenderGraph.propTypes = {
  graphNumber: PropTypes.number.isRequired,
}

export default RenderGraph
