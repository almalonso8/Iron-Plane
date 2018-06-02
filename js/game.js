function Game(canvasElem){
    this.ctx = canvasElem.getContext("2d");

    this.back = new Background(this.ctx);
    this.plane = new Plane(this.ctx);
    this.cloudFactory = new CloudFactory(this.ctx);
    this.clock = new Clock(this.ctx);
}

Game.prototype.start = function(){
    this.intervalId = setInterval(function() {
        this.clear();
        this.drawAll(); 
        this.moveAll();
        //check game over
    }.bind(this), 16/1000);
};

Game.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
}
Game.prototype.drawAll = function(){
    this.back.draw();
    this.plane.draw();
    this.cloudFactory.draw();
    this.clock.draw();
    this.checkCollision();
}

Game.prototype.clear = function() {
    this.cloudFactory.clean();
}

Game.prototype.moveAll = function(){
    this.back.move();
    this.plane.gravity();
    this.plane.fly();
    this.cloudFactory.move();
}

Game.prototype.checkCollision = function(){
    
}

// Game.prototype.gameOver = function(){
//     this.clock.gameOver();
// }
// console.log(Game.prototype.gameOver());

// Game.prototype.checkGameOver = function() {
//     if (this.clock.isCollisions(this.player)) {
//       this.gameOver();
//     }
//   };
  
//   Game.prototype.gameOver = function() {
//     clearInterval(this.intervalId);
    
//     if (confirm("GAME OVER! Play again?")) {
//       location.reload();
//     }
//   };


