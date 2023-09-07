/* eslint-disable no-undef */
// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    lettersCount: 0,
  }

  onChangingInput = event => {
    const count = event.target.value.length
    this.setState({lettersCount: count})
  }

  render() {
    const {lettersCount} = this.state
    return (
      <div className="page">
        <div className="calculation-container">
          <h1 className="calculation-heading">
            Calculate the letters you enter
          </h1>
          <label htmlFor="wordInput">Enter the phrases</label>
          <br />
          <input
            type="text"
            id="wordInput"
            placeholder="Enter the phrase"
            className="text-input"
            onChange={this.onChangingInput}
          />
          <div>
            <p className="display-count">No.of letters: {lettersCount}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
