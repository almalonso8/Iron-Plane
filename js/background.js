function Background(ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "img/cartoon_clouds_and_blue_sky-wallpaper-1440x900.jpg";

    this.x = 0;
    this.y = 0;
    console.log(this)
    this.w = this.ctx.canvas.width;
    this.h = this.ctx.canvas.height;
    this.vx = -5;
}

Background.prototype.draw = function(){
    this.ctx.drawImage (
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
    );

    this.ctx.drawImage(
        this.img,
        this.x + this.w,
        this.y,
        this.w,
        this.h
    );
        
};

