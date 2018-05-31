function Game(canvasElem){
    this.ctx = canvasElem.getContext("2d");

    this.back = new Background(this.ctx);
    this.plane = new Plane(this.ctx);
}

Game.prototype.start = function(){
    this.intervalId = setInterval(function() {
        this.drawAll(); 
        this.moveAll();
    }.bind(this), 20);
};

Game.prototype.clear = function(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
Game.prototype.drawAll = function(){
    this.back.draw();
    this.plane.draw();

    Game.prototype.moveAll = function(){
        this.back.move();
        this.plane.gravity();
        this.plane.fly();
    }
};


