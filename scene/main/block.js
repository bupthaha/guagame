var Block = function(game, attributes) {
  // position's schema = [0,0]
  attr = attributes
  color = attr[3]
  // var image = imgByName('block')
  var img = game.imageByName('block_'+ color)
  var o = {
    x: attr[0],
    y: attr[1],
    alive: true,
    lifes: attr[2] || 1,
  }
  o.game = game
  o.image = img.image
  o.w = img.w
  o.h = img.h
  o.kill = function() {
    o.lifes -= 1
    if(o.lifes <= 0) {
      o.alive = false
    }
  }
  o.collide = function(ball) {
    return (o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o)))
  }
  return o
}
