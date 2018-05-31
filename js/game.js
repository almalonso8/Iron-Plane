function Game(canvasElem){
    this.ctx = canvasElem.getContext("2d");

    this.back = new Background(this.ctx);
    this.plane = new Plane(this.ctx);
}

Game.prototype.start = function(){
    this.intervalId = setInterval(function() {
        this.drawAll(); 
        this.moveAll();
    }.bind(this), 16/1000);
};

Game.prototype.drawAll = function(){
    this.back.draw();
    this.plane.draw();

    Game.prototype.moveAll = function(){
        this.back.move();
        this.plane.move();
    }
};


