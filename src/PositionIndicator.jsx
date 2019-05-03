import React, { Fragment } from 'react'
import propTypes from 'prop-types'

class PositionIndicator extends React.Component {
  render() {
    const { topPos, leftPos } = this.props
    const stylePositionInd = {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: 'red',
      position: 'absolute',
      top: topPos + 'px',
      left: leftPos + 'px'
    }
    console.log('Top position:', topPos, 'and Left Position:', leftPos)
    return (
      <Fragment>
        <div style={stylePositionInd} />
      </Fragment>
    )
  }
}

export default PositionIndicator

PositionIndicator.propTypes = {
  topPos: propTypes.number,
  leftPos: propTypes.number
}
