function Plane(ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "img/Planepainted.png";
  
    this.x = 100;
    this.y = 200;
    this.w = 250;
    this.h = 100;  

    this.vx = 10;
    this.vy = 10;

    this.g = 0.8;    
}

Plane.prototype.animate = function() {
    this.y -= this.vy;
    this.x += this.vx;

    this.vx *= 0.9;
    this.vy *= 0.9;
}

Plane.prototype.draw = function(){
    this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      );

    this.animate();
}

Plane.prototype.gravity = function(){
    this.y += this.g;
}

Plane.prototype.collide = function(clouds) {
    var collitions = clouds.filter(function(cloud) {
        return cloud.collide(this);
    }.bind(this));
    
    this.vx -= collitions.length * 0.2;
}

Plane.prototype.fly = function(){
    var element = document.getElementById("flyId")
    element.onclick = function() {
        this.vy = 10;
        this.vx = 8;
    }.bind(this)
}
