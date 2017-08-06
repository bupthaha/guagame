var Paddle = function(game) {
  var o = game.imageByName('paddle')
  o.speed = 15
  o.x = paddle_x
  o.y = paddle_y
  // var o = {
  //   image: image,
  //   x: 25,
  //   y: 200,
  //   speed:5,
  // }
  o.moveLeft = function() {
    o.x -= o.speed
    if(o.x < 0) {
      o.x = 0
    }
  }
  o.moveRight = function() {
    o.x += o.speed
    if(o.x > screen_w - o.w) {
      o.x = screen_w - o.w
    }
  }
  o.collide = function(ball) {
    if(ball.y + ball.h >= o.y) {
      if(ball.x > o.x && ball.x < o.x + o.w){
        return true
      }
    }
    return false
  }
  return o
}
