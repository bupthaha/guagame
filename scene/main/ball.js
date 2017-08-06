var Ball = function(game) {
  // var image = imgByName('ball')
  var o = game.imageByName('ball')
  o.x = ball_x
  o.y = ball_y
  o.speedX = 6
  o.speedY = 6
  o.fired = false
  o.fire = function() {
    o.fired = true
  }

  o.move = function() {
    if(o.fired) {
      if(o.x < 0 || o.x > screen_w) {
        o.speedX *= -1
      }
      if(o.y < 0 || o.y > screen_h) {
        o.speedY *= -1
      }
      // move
      o.x += o.speedX
      o.y += o.speedY

    }
  }
  o.reflect = function() {
    o.speedY *= -1
  }
  o.hasPoint = function(x, y) {
    var xIn = x >= o.x && x <= o.x + o.w
    var yIn = y >= o.y && y <= o.y + o.h
    return xIn && yIn
  }
  return o
}
