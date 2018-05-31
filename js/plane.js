function Plane(ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "img/Plane.png";
  
    this.x = 100;
    this.y = 200;
    this.w = 200;
    this.h = 80;  

    this.vx = 5;
    this.vy = 1.5;

    this.g = 0.8;
    
    
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

Plane.prototype.gravity = function(){
    this.y += this.g;
}
Plane.prototype.fly = function(){
    document.getElementsByClassName("button").onclick = function(){
    this.y -= this.y
    }
}