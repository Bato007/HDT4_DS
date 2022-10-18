import React, { useState, useMemo } from 'react'
import ReactWorldcloud from 'react-wordcloud'
import { Resizable } from 're-resizable'
import Dropbox from '../dropbox/Dropbox'
import location from '../../../assets/data/location.json'
import './wordcloud.scss'

const options = ['Accident', 'Non Accidnte']

const Wordcloud = () => {
  const [option, setOption] = useState(options[0])
  const data = useMemo(
    () => (
      option === options[0] ? location.accident : location.nonAccident
    ),
    [option],
  )

  const resizeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
  }

  return (
    <div className="wordcloud-container">
      <div className="dropbox-container">
        <Dropbox options={options} setOption={setOption} />
      </div>
      <Resizable
        defaultSize={{
          width: 600,
          height: 300,
        }}
        style={resizeStyle}
      >
        <div className="words-container">
          <ReactWorldcloud
            words={data}
            options={{
              fontFamily: 'courier new',
              fontSizes: [60, 70],
            }}
          />
          <h3>Tweets country of origin</h3>
        </div>
      </Resizable>
    </div>
  )
}

Wordcloud.propTypes = {}

export default Wordcloud
