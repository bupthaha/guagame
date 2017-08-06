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
