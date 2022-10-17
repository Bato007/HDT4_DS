import React from 'react'
import PropTypes from 'prop-types'
import './renderGraph.scss'

const RenderGraph = ({ graphNumber }) => {
  const renderHTML = () => {
    switch (graphNumber) {
      case 1:
        return <div className="skyblue-graph" />
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
