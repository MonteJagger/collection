import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Topics from './Topic'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/topics'>topics</Link></li>
          </ul>
        </div>

        <hr />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route exact path='/topics' component={Topics} />
        <Route path='/topics/:id' component={Topics} />
      </BrowserRouter>
    )
  }
}

export default App;
