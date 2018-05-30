function Plane(ctx){
    this.ctx = ctx;
  
    this.w = this.w;
    this.h = this.h;
    
    this.x = this.x;
    this.y = this.y;
    
    this.vx = 0;
    this.vy = 0;
    this.g = 0;
    
    this.img = new Image();
    this.img.src = "img/Plane.png";
}

Plane.prototype.draw = function(){
    this.ctx.drawImage(
        this.img,
        100,
        100,

      );
}