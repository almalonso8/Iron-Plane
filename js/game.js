function Game(canvasElem){
    this.ctx = canvasElem.getContext("2d");

    this.back = new Background(this.ctx);
    this.plane = new Plane(this.ctx);
    this.cloud = new Cloud(this.ctx);
    this.clock = new Clock(this.ctx);
}

Game.prototype.start = function(){
    this.intervalId = setInterval(function() {
        this.drawAll(); 
        this.moveAll();
    }.bind(this), 16/1000);
};

Game.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
}
Game.prototype.drawAll = function(){
    this.back.draw();
    this.plane.draw();
    this.cloud.draw();
    this.clock.draw();
}
Game.prototype.moveAll = function(){
    this.back.move();
    this.plane.gravity();
    this.plane.fly();
    }



