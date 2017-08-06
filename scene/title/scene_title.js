class SceneTitle extends GuaScene {
  constructor(game) {
    super(game)
    game.registerAction('k', function(){
      var s = Scene(game)
      game.replaceScene(s)
    })
  }
  draw() {
    this.game.context.fillStyle = 'black'
    this.game.context.font="25px Georgia";
    this.game.context.fillText('小傻妞，快来按K键开始游戏吧!', screen_w/2-200, screen_h/2)
    this.game.context.fillText('按P键可以暂停哦。', screen_w/2-200, screen_h/2 + 30)
    this.game.drawGlasses()
  }
}
