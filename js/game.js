function Game(canvasElem){
    this.ctx = canvasElem.getContext("2d");

    this.back = new Background(this.ctx);
    this.plane = new Plane(this.ctx);
    this.cloudFactory = new CloudFactory(this.ctx);
    this.clock = new Clock(this.ctx);

    this.landing = false;

    this.intervalId = null;
    this.keyboardListners();
}

Game.prototype.start = function(){
    
    this.intervalId = setInterval(function() {
        this.clean();
        this.gameOver();
        this.drawAll(); 
        this.moveAll();
        this.checkCollision();
        this.gameOver();
        this.onTime();
        this.airport();
        this.isLanding();
    }.bind(this), 16/1000);
};

Game.prototype.isLanding = function(){
    if(this.landing && ((this.plane.y + this.plane.h) >= this.ctx.canvas.height - 280)){
        this.plane.y = this.ctx.canvas.height - 280;
        this.plane.vx = 1;
        this.clock.time = false;
    }
}


Game.prototype.airport = function() {
    if (this.plane.x + this.plane.w >= this.ctx.canvas.width) {
        this.back.img.src = "img/airport.png";
        this.plane.x = 0;
        this.landing = true;
        this.cloudFactory.clouds = [];
    }

}

Game.prototype.clean = function(){
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.cloudFactory.clean();
}
Game.prototype.drawAll = function(){
    this.back.draw();
    this.plane.draw();
    if (!this.landing){
        this.cloudFactory.draw();
    } 
    this.clock.draw();
}

Game.prototype.moveAll = function(){
    this.back.move();
    this.plane.gravity();
    this.plane.hits();
    this.cloudFactory.move();
    this.clock.clockRuning();
}

Game.prototype.checkCollision = function(){
    this.plane.collide(this.cloudFactory.clouds);
};

Game.prototype.gameOver = function(){
    if(this.clock.countdown <= 0){
        clearInterval(this.intervalId);
        if (confirm("DELAYED! Try again?")) {
          location.reload();
        }
    }
}

Game.prototype.onTime = function(){
    if(this.landing && (this.plane.x + this.plane.w >= this.ctx.canvas.width - 500)){
        clearInterval(this.intervalId);
        if (confirm("YOU'RE ON TIME, Play again?")) {
          location.reload();
        }
    }
}

Game.prototype.keyboardListners = function(){
    window.addEventListener("keydown", function(e){
        this.plane.onKeyDown(event.keyCode);
    }.bind(this));
        
};

