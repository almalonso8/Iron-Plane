function Plane(ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "img/Plane.png";
  
    this.x = 100;
    this.y = 200;
    this.w = 200;
    this.h = 80;  

    this.vx = 20;
    this.vy = 20;

    this.g = 1;
    
    
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
