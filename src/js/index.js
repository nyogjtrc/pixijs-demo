import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as PIXI from 'pixi.js'

let type = 'WebGL'
if (!PIXI.utils.isWebGLSupported()) {
  type = 'canvas'
}
PIXI.utils.sayHello(type)

const hh = 800
const ww = 600

const app = new PIXI.Application(hh, ww)
app.renderer.backgroundColor = 0xFF9999

const hello = new PIXI.Text('Hello World!')
hello.anchor.set(0.5)
hello.x = app.screen.width / 2
hello.y = app.screen.height / 2

app.stage.addChild(hello)

class CanvasApp extends Component {
  componentDidMount() {
    this.game.appendChild(app.view)
  }
  render() {
    return (
      <div>
        <h1>Demo</h1>
        <h2>Hello World</h2>
        <div ref={(c) => { this.game = c }} />
      </div>
    )
  }
}

ReactDOM.render(
  <CanvasApp />,
  document.getElementById('root')
)
