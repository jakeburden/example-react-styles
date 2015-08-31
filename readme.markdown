# example-react-styles

Minimal [react](https://facebook.github.io/react/) starter with [radium](http://projects.formidablelabs.com/radium/) for styles.
Using [reactify](https://npmjs.com/package/reactify) for jsx
under [browserify](http://browserify.org)/[watchify](https://npmjs.com/package/watchify)
with [npm run scripts](http://substack.net/task_automation_with_npm_run)


# quick start

```
$ npm install
$ npm run watch &
$ npm start
```

# commands

* `npm run build` - build for production
* `npm run watch` - automatically recompile during development
* `npm start` - start a static development web server

# styles.js
``` js
module.exports = {
  even: {
    color: 'blue'
  },
  odd: {
    color: 'red'
  },
  flex: {
    display: 'flex'
  },
  button: {
    ':hover': {
      cursor: 'pointer'
    }
  }
}

```

# index.js

``` js
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

```
