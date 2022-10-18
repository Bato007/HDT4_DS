/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './dropbox.scss'

const RenderGraph = ({ options, setOption }) => {
  const [currentValue, setCurrent] = useState(options[0])

  const handleChange = (e) => {
    setCurrent(e.target.value)
    setOption(e.target.value)
  }

  return (
    <select value={currentValue} onChange={handleChange}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  )
}

RenderGraph.propTypes = {
  options: PropTypes.array.isRequired,
  setOption: PropTypes.func.isRequired,
}

export default RenderGraph
