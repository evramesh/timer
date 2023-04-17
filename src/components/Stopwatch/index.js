import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeInSecs: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  minutes = () => {
    const {timeInSecs} = this.state
    const minu = Math.floor(timeInSecs / 60)
    if (minu < 10) {
      return `0${minu}`
    }
    return minu
  }

  second = () => {
    const {timeInSecs} = this.state
    const sec = Math.floor(timeInSecs % 60)
    if (sec < 10) {
      return `0${sec}`
    }
    return sec
  }

  start = () => {
    this.timerId = setInterval(this.runTime, 1000)
  }

  runTime = () => {
    this.setState(prevState => ({timeInSecs: prevState.timeInSecs + 1}))
  }

  reset = () => {
    clearInterval(this.timerId)
    this.setState({timeInSecs: 0})
  }

  stop = () => {
    clearInterval(this.timerId)
  }

  render() {
    const display = `${this.minutes()}:${this.second()}`
    console.log(display)
    return (
      <div className="main">
        <h1 className="head">Stopwatch</h1>
        <div className="sub">
          <img
            alt="stopwatch"
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
          />
          <p>Timer</p>
          <h1 className="head">{display}</h1>
          <button onClick={this.start} type="button">
            Start
          </button>
          <button onClick={this.stop} type="button">
            Stop
          </button>
          <button onClick={this.reset} type="button">
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
