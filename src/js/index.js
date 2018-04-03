import * as PIXI from 'pixi.js'

let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type)


const app = new PIXI.Application(800, 450)
app.renderer.backgroundColor = 0xCC5555

document.body.appendChild(app.view)

const hello = new PIXI.Text("hello world!")
hello.x = 200
hello.y = 110

app.stage.addChild(hello)
