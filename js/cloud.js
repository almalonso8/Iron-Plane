function Cloud(ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "img/cloud.svg"

    this.x = 300;
    this.y = 500;
    this.w = 100;
    this.h = 50; 
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