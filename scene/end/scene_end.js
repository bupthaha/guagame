class SceneEnd extends GuaScene {
  constructor(game) {
    super(game)
    game.registerAction('r', function(){
      var s = SceneTitle.new(game)
      game.replaceScene(s)
    })
  }
  draw() {
    this.game.context.fillStyle = 'black'
    this.game.context.fillText('琪琪好傻呀，这都玩不过去 - -！', screen_w/2-200, screen_h/2)
    this.game.context.fillText('按r返回标题界面吧。', screen_w/2-200, screen_h/2 + 30)
    this.game.drawGlasses()
  }
}
