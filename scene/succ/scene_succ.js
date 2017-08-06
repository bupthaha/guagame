class SceneSucc extends GuaScene {
  constructor(game) {
    super(game)
    game.registerAction('r', function(){
      var s = SceneTitle.new(game)
      game.replaceScene(s)
    })
  }
  draw() {
    this.game.context.fillStyle = 'black'
    this.game.context.fillText('琪琪真棒，竟然通关了', screen_w/2-200, screen_h/2)
    this.game.context.fillText('琪琪真机智！', screen_w/2-200, screen_h/2+ 30)
    this.game.context.fillText('按r返回标题界面吧。', screen_w/2-200, screen_h/2 + 60)
    this.game.drawGlasses()
  }
}
