import React from 'react'
import { render } from 'react-dom'
import PositionIndicator from './PositionIndicator'
import './style.css'

class App extends React.Component {
  constructor() {
    super()
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }
  state = {
    leftPos: 0,
    topPos: 0
  }

  handleMouseMove = event => {
    var x = event.clientX
    var y = event.clientY
    this.setState({
      leftPos: x,
      topPos: y
    })
  }

  render() {
    const { leftPos, topPos } = this.state
    return (
      <div className="movement-container" onMouseMove={this.handleMouseMove}>
        <PositionIndicator
          leftPos={leftPos}
          topPos={topPos}
          stylePositionInd={this.stylePositionInd}
        />
        <p>Move your mouse around the page to see something cool!</p>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
