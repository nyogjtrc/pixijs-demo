import React from 'react'
import ReactDOM from 'react-dom'
import * as PIXI from 'pixi.js'

import Hello from './component/Hello'
import Jump from './component/Jump'

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
  width: '100%',
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

const App = () => (
  <div style={mainStyle}>
    <header style={headerStyle}>
      <h1>Demo</h1>
    </header>
    <div style={wrapStyle}>
      <div style={sidebarStyle}>
        <li>1</li>
      </div>
      <div style={contentStyle}>
        <Hello />
        <Jump />
      </div>
    </div>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
