function Game(canvasElem){
    this.ctx = canvasElem.getContext("2d");

    this.back = new Background(this.ctx);
    this.plane = new Plane(this.ctx);
    this.cloudFactory = new CloudFactory(this.ctx);
    this.clock = new Clock(this.ctx);

    this.intervalId = null;
}

Game.prototype.start = function(){
    this.intervalId = setInterval(function() {
        this.clean();
        this.gameOver();
        this.drawAll(); 
        this.moveAll();
        this.gameOver();
    }.bind(this), 16/1000);
};

Game.prototype.clean = function(){
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.cloudFactory.clean();
}
Game.prototype.drawAll = function(){
    this.back.draw();
    this.plane.draw();
    this.cloudFactory.draw();
    this.clock.draw();
    this.checkCollision();
}

Game.prototype.moveAll = function(){
    this.back.move();
    this.plane.gravity();
    this.plane.fly();
    this.cloudFactory.move();
}

Game.prototype.checkCollision = function(){
    this.plane.collide(this.cloudFactory.clouds);
    
     //console.log(this.plane);

    // for(var i = 0; i < clouds.length; i++) {
    //     if ((this.plane.x + this.plane.w) >= this.cloud){
    //         console.log("choque")}
    //     }
}

Game.prototype.gameOver = function(){
    if(this.clock.countdown <= 0){
        clearInterval(this.intervalId);
        if (confirm("DELAYED! Try again?")) {
          location.reload();
        }
    }
}

 