import React, { Component } from 'react'
import * as PIXI from 'pixi.js'

const keyboard = (keyCode) => {
  const key = {}
  key.code = keyCode
  key.isDown = false
  key.isUp = true
  key.press = undefined
  key.release = undefined
  key.downHandler = (event) => {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press()
      key.isDown = true
      key.isUp = false
    }
    event.preventDefault()
  }

  key.upHandler = (event) => {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release()
      key.isDown = false
      key.isUp = true
    }
    event.preventDefault()
  }

  window.addEventListener('keydown', key.downHandler.bind(key), false)
  window.addEventListener('keyup', key.upHandler.bind(key), false)
  return key
}

const hh = 800
const ww = 600
const app = new PIXI.Application(hh, ww)
app.renderer.backgroundColor = 0xF9F999

const graph = new PIXI.Graphics()
graph.beginFill(0x000000)
graph.drawRoundedRect(0, 0, 50, 50, 10)
graph.endFill()

const sp = new PIXI.Sprite(graph.generateCanvasTexture())
sp.anchor.set(0.5)
sp.x = 50
sp.y = 50
sp.vx = 0
sp.vy = 0
app.stage.addChild(sp)

const left = keyboard(37)
const up = keyboard(38)
const right = keyboard(39)
const down = keyboard(40)

left.press = () => {
  sp.vx = -50
}

up.press = () => {
  sp.vy = -50
}

right.press = () => {
  sp.vx = 50
}

down.press = () => {
  sp.vy = 50
}

app.ticker.add(() => {
  sp.x += sp.vx
  sp.vx = 0
  sp.y += sp.vy
  sp.vy = 0
})


class Move extends Component {
  componentDidMount() {
    this.game.appendChild(app.view)
  }
  render() {
    return (
      <div>
        <h2>Move</h2>
        <div ref={(c) => { this.game = c }} />
      </div>
    )
  }
}

export default Move
