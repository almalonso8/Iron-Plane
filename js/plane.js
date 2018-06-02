function Plane(ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "img/Plane.png";
  
    this.x = 100;
    this.y = 200;
    this.w = 250;
    this.h = 100;  

    this.vx = 10;
    this.vy = 50;

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
    var element = document.getElementById("flyId")
    element.onclick = function() {
        this.y -= this.vy;
        this.x += this.vx;
    }.bind(this)
}
