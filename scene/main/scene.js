var Scene = function(game) {
  var s = {
    game: game,
  }

  var paddle = Paddle(game)
  var ball = Ball(game)
  var score = 0
  var blocks = loadLevel(game, 3)

  game.registerAction('a', function(){
    paddle.moveLeft()
  })

  game.registerAction('d', function(){
    paddle.moveRight()
  })

  game.registerAction('f', function(){
    ball.fire()
  })

  s.draw = function() {
    // draw background
    game.context.fillStyle = "#554"
    game.context.fillRect(0, 0, screen_w, screen_h)
    // draw
    game.drawImage(paddle)
    game.drawImage(ball)
    for (var i = 0; i < blocks.length; i++) {
      block = blocks[i]
      if(block.alive) {
        switch (block.lifes) {
          case 1:
            block.image = block.game.imageByName('block_green').image
            break;
            case 2:
              block.image = block.game.imageByName('block_blue').image
              break;
              case 3:
                block.image = block.game.imageByName('block_yellow').image
                break;
          default:

        }
        game.drawImage(block)
      }
    }
    game.context.font = "20px"
    game.context.fillStyle = "white"
    game.context.fillText('分数:' + score, score_x, score_y)
  }
  s.update = function() {
    if(window.paused) {
      return
    }
    ball.move()
    // end game
    if(ball.y > paddle.y) {
      // jump to game end scene
      var end = SceneEnd.new(game)
      game.replaceScene(end)
    }

    // collide
    if(paddle.collide(ball)) {
      ball.reflect()
    }

    // blocks and ball collide
    for (var i = 0; i < blocks.length; i++) {
      block = blocks[i]
      if(block.collide(ball)) {
        log('相撞')
        block.kill()
        ball.reflect()
        score += 100
      }
    }

    // success
    var flag = true
    for (var i = 0; i < blocks.length; i++) {
      if(blocks[i].alive){
        flag = false
      }
    }
    if(flag){
      var succ = SceneSucc.new(game)
      game.replaceScene(succ)
    }
  }

  // mouse event
  var enableDrag = false
  game.canvas.addEventListener('mousedown', function(event) {
    var x = event.offsetX
    var y = event.offsetY
    if(ball.hasPoint(x, y)) {
      enableDrag = true
    }
  })
  game.canvas.addEventListener('mousemove', function(event) {
    var x = event.offsetX
    var y = event.offsetY
    if(enableDrag) {
      ball.x = x
      ball.y = y
    }
  })
  game.canvas.addEventListener('mouseup', function(event) {
    var x = event.offsetX
    var y = event.offsetY
    log(event)
    enableDrag = false
  })

  return s
}
