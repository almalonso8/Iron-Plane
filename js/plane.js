function Plane(ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "img/Planepainted.png";
  
    this.x = 0;
    this.y = 0;
    this.w = 200;
    this.h = 100;  

    this.vx = 0;
    this.vy = 0;

    this.g = 0.8;

    this.clickable = true;
}

Plane.prototype.animate = function() {
    this.y -= this.vy;
    this.x += this.vx;

    this.vx *= 0.9;
    this.vy *= 0.9;
}

Plane.prototype.hits = function(){
    ((this.ctx.canvas.height - this.y)>= this.ctx.canvas.height)? this.y *= -20 : this.vy;
    ((this.ctx.canvas.width - this.x)>= this.ctx.canvas.width)? this.vx *= -2 : this.vx;
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

Plane.prototype.fly = function() {
    this.vy = 15;
    this.vx = 15;
}

var KEY_UP = 32;

Plane.prototype.onKeyDown = function(code) {
    if (KEY_UP === code && this.clickable) {
        this.fly();
        this.pressTimeOut();
    }
};

Plane.prototype.pressTimeOut = function(){
    this.clickable = false;
    setTimeout(function(){
        this.clickable = true;
    }.bind(this), 300)
}


