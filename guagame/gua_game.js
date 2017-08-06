class GuaGame {
  constructor(fps=60, images, runCallback) {
    window.fps = fps
    this.images = images
    this.runCallback = runCallback
    //
    this.scene = null
    this.actions = {}
    this.keydowns = {}
    this.canvas = document.querySelector('#id-canvas')
    this.context = this.canvas.getContext('2d')

    // events
    var self = this
    window.addEventListener('keydown', event => {
      this.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function(event){
      self.keydowns[event.key] = false
    })
    this.init()
  }

  static instance(...args) {
    this.i = this.i || new this(...args)
    return this.i
  }

  drawImage(img) {
    this.context.drawImage(img.image, img.x, img.y)
  }
  // update
  update() {
    this.scene.update()
  }

  // draw
  draw() {
    this.scene.draw()
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawGlasses() {
    this.context.fillRect(5, 5, 40, 40)
    this.context.fillRect(45, 45/2, 50, 5)
    this.context.fillRect(90, 5, 40, 40)
  }

  // register
  registerAction(key, callback) {
    this.actions[key] = callback
  }

  runloop() {
    // events
    var g = this
    var actions = Object.keys(g.actions)
    for(var i = 0; i < actions.length; i++){
      var key = actions[i]
      if(g.keydowns[key]){
        g.actions[key]()
      }
    }
    // clear
    g.clear()

    // draw
    g.draw()

    //update
    g.update()

    setTimeout(function(){
      g.runloop()
    }, 1000/window.fps)
  }

  init() {
    var g = this
    var loads = []
    //载入图片
    var names = Object.keys(g.images)
    for (var i = 0; i < names.length; i++) {
      let name = names[i]
      var path = g.images[name]
      let img = new Image()
      img.src = path
      img.onload = function() {
        // 存入g.images
        g.images[name] = img
        // 所有图片载入成功后调用g.run()
        loads.push(1)
        if(loads.length == names.length) {
          g.__start()
        }
      }
    }
  }

  imageByName(name) {
    var g = this
    var img = g.images[name]
    var image = {
      w: img.width,
      h: img.height,
      image: img,
    }
    return image
  }

  //运行程序
  runWithScene(scene) {
    var g = this
    g.scene = scene
    setTimeout(function() {
      g.runloop()
    }, 1000/window.fps)
  }

  replaceScene(scene) {
    this.scene = scene
  }

  __start(scene) {
    this.runCallback(this)
  }
}
