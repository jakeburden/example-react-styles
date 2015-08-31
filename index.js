var React = require('react')
var Radium = require('radium')
var styles = require('./styles')

var App = React.createClass({
  getInitialState: function () {
    return {
      n: 0
    }
  },
  handleClick: function () {
    this.setState({
      n: this.state.n + 1
    })
  },
  render: function () {
    return (
      <div>
        <h1>clicked
          <span style={[this.state.n % 2 === 0 ?
              styles.even :
              styles.odd,
              styles.flex
            ]}>{this.state.n}</span> times
        </h1>
        <button
          onClick={this.handleClick}
          style={styles.button}
        >click me!</button>
      </div>
    )
  }
})
App = Radium(App)
React.render(<App />, document.querySelector('#content'))
