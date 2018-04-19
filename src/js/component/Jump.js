import React, { Component } from 'react'
import * as PIXI from 'pixi.js'

const hh = 800
const ww = 600
const app = new PIXI.Application(hh, ww)
app.renderer.backgroundColor = 0x99FF99

let speed = 0
const gravity = 0.2
const bounce = -0.8
const floot = ww - 50

const onClick = () => {
  speed = -10
}

const graph = new PIXI.Graphics()
graph.beginFill(0x000000)
graph.drawCircle(0, 0, 25)
graph.endFill()

const sp = new PIXI.Sprite(graph.generateCanvasTexture())
sp.anchor.set(0.5)
sp.x = hh / 2
sp.y = floot
sp.interactive = true
sp.buttonMode = true
sp.on('pointerdown', onClick)

app.stage.addChild(sp)

app.ticker.add((delta) => {
  if (speed !== 0) {
    sp.y += delta * speed
    speed += gravity
    if (sp.y > floot) {
      sp.y = floot
      if (speed <= 1.9) {
        speed = 0
      } else {
        speed *= bounce
      }
    }
  }
})

class Jump extends Component {
  componentDidMount() {
    this.game.appendChild(app.view)
  }
  render() {
    return (
      <div>
        <h2>Jump</h2>
        <div ref={(c) => { this.game = c }} />
      </div>
    )
  }
}

export default Jump
