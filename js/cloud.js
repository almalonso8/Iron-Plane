function Cloud(ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "img/cloud.svg"

    this.x = Math.floor((Math.random() * 1200) + 1);
    this.y = Math.floor((Math.random() * 600) + 1);;

    this.w = this.ctx.canvas.width/10;
    this.h = this.ctx.canvas.height/10;

    this.vx = 2;
    this.vy = 0;
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

Cloud.prototype.collide = function(p) {
    var c = this;

    var colX = p.x + p.w >= c.x && p.x <= c.x + c.w;
    var colY = p.y + p.h >= c.y && p.y <= c.y + c.h;

    return colX && colY;
}
