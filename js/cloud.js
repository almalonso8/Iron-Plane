function Cloud(ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "img/cloud.svg"

    this.x = 300;
    this.y = 500;
    this.w = 200;
    this.h = 100; 
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