function Plane(ctx){
    this.ctx = ctx;
  
    this.x = 100;
    this.y = 200;
    this.w = 200;
    this.h = 80;  

    this.vx = 0;
    this.vy = 0;

    this.g = 0.8;
    
    this.img = new Image();
    this.img.src = "img/Plane.png";
}

Plane.prototype.draw = function(){
    this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h

      );
}