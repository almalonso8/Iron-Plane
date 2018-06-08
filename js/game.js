function Game(canvasElem){
    this.ctx = canvasElem.getContext("2d");

    this.back = new Background(this.ctx);
    this.plane = new Plane(this.ctx);
    this.cloudFactory = new CloudFactory(this.ctx);
    this.clock = new Clock(this.ctx);

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
        this.landing();
    }.bind(this), 16/1000);
};

Game.prototype.landing = function() {
    if (this.plane.x + this.plane.w >= this.ctx.canvas.width) {
        this.back.img.src = "img/airport.png";
        this.plane.x = 0;  
        this.landed();//llamamos a la funcion cuando pasamos a esta fase, pero sola la llamamos una vez?
    }
}
    // && ((this.plane.y + this.plane.y) === this.x > 0)
Game.prototype.landed = function(){
   
}

    // if(landing().bind() === true){
    //    alert("hola")
    // }
//     if(landing()){
//         clearInterval(this.intervalId);
//         if (confirm("FLIGHT ON TIME")) {
//           location.reload();
//     }
// }
Game.prototype.clean = function(){
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.cloudFactory.clean();
}
Game.prototype.drawAll = function(){
    this.back.draw();
    this.plane.draw();
    this.cloudFactory.draw();
    this.clock.draw();
}

Game.prototype.moveAll = function(){
    this.back.move();
    this.plane.gravity();
    this.plane.hits();
    this.cloudFactory.move();
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

Game.prototype.keyboardListners = function(){
    window.addEventListener("keydown", function(e){
        this.plane.onKeyDown(event.keyCode);
    }.bind(this));
        
};
