function Game(canvasElem){
    this.ctx = canvasElem.getContext("2d");

    this.back = new Background(this.ctx);
}

Game.prototype.start = function(){
    this.intervalId = setInterval(function() {
        this.drawAll(); 
    }.bind(this), 16/1000);
};

Game.prototype.drawAll = function(){
    this.back.draw();

};


