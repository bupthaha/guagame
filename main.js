var loadLevel = function(game, n) {
  n -= 1
  blocks = []
  var level = levels[n]
  for (var i = 0; i < level.length; i++) {
    var attr = level[i]
    var b = Block(game, attr)
    blocks.push(b)
  }
  return blocks
}

var blocks = []
var enableDebugMode = function(game, enable) {
  if(!enable) {
    return
  }
  window.paused = false
  window.addEventListener('keydown', function(event){
    var k = event.key
    if(k == 'p') {
      window.paused = !window.paused
    } else if('123456789'.includes(k)) {
      blocks = loadLevel(game, Number(k))
    }
  })
  // speed control
  document.querySelector('#id-input-speed').addEventListener('input', function(event) {
    var input = event.target
    window.fps = Number(input.value) + 1
    log(window.fps)
  })
}

var __main = function() {
  var images = {
    ball: 'img/ball.png',
    paddle: 'img/paddle1.png',
    block_yellow: 'img/block_yellow.png',
    block_blue: 'img/block_blue.png',
    block_green: 'img/block_green.png',
    block_red: 'img/block_red.png',
  }
  var game = GuaGame.instance(30, images, function(g) {
    var s = SceneTitle.new(g)
    g.runWithScene(s)
  })

  enableDebugMode(game, true)


}
__main()
