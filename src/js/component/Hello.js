import React, { Component } from 'react'
import * as PIXI from 'pixi.js'

const hh = 800
const ww = 600
const app = new PIXI.Application(hh, ww)
app.renderer.backgroundColor = 0xFF9999

const hello = new PIXI.Text('Hello World!')
hello.anchor.set(0.5)
hello.x = app.screen.width / 2
hello.y = app.screen.height / 2

app.stage.addChild(hello)

class Hello extends Component {
  componentDidMount() {
    this.game.appendChild(app.view)
  }
  render() {
    return (
      <div>
        <h2>Hello</h2>
        <div ref={(c) => { this.game = c }} />
      </div>
    )
  }
}

export default Hello
