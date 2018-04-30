import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'
import * as PIXI from 'pixi.js'

import Hello from './component/Hello'
import Jump from './component/Jump'
import Move from './component/Move'

let type = 'WebGL'
if (!PIXI.utils.isWebGLSupported()) {
  type = 'canvas'
}
PIXI.utils.sayHello(type)

const mainStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'column'
}

const headerStyle = {
  background: '#6666AA',
  width: '100 vw',
  padding: '0 10px'
}

const wrapStyle = {
  width: '100%',
  height: '100%',
  display: 'flex'
}

const sidebarStyle = {
  background: '#DDDDFF',
  width: '200px',
  padding: '10px'
}

const contentStyle = {
  background: '#DDFFDD',
  width: '100%',
  height: '100%',
  padding: '20px'
}

const Sidebar = () => (
  <div style={sidebarStyle}>
    <li>
      <NavLink to="/">Hello</NavLink>
    </li>
    <li>
      <NavLink to="/jump">Jump</NavLink>
    </li>
    <li>
      <NavLink to="/move">Move</NavLink>
    </li>
  </div>
)

const App = () => (
  <BrowserRouter>
  <div style={mainStyle}>
    <header style={headerStyle}>
      <h1>Demo</h1>
    </header>
    <div style={wrapStyle}>
      <Sidebar />
      <div style={contentStyle}>
        <Switch>
          <Route path="/jump" component={Jump} />
          <Route path="/move" component={Move} />
          <Route path="/" component={Hello} />
        </Switch>
      </div>
    </div>
  </div>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
