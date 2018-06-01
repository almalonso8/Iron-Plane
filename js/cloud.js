function Cloud(ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "img/cloud.svg"

    this.x = 300;
    this.y = 100;
    this.w = 200;
    this.h = 100;

    this.vx = 1;
    this.vy = 1;
}

Cloud.prototype.draw = function(){
    this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      );
}

Cloud.prototype.move = function() {
    this.x -= this.vx; 
    this.y += this.vy;
  };

Cloud.prototype.checkCollision = function () {

  };