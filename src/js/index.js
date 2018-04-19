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

const App = () => (
  <div>
    <header>
      <h1>Demo</h1>
    </header>
    <div className="wrap-sidebar">
      <li>1</li>
    </div>
    <div className="wrap-content">
      <Hello />
      <Jump />
    </div>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
