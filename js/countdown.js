function Clock(ctx){
    this.ctx = ctx;
    this.text = "00:00 secs to arrive on time!";
    this.ctx.font = "50px Verdana"
    this.x = 600;
    this.y = 100;
    var gradient = this.ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
gradient.addColorStop("0", "red");
gradient.addColorStop("0.5", "silver");
gradient.addColorStop("1.0", "red");
    this.ctx.fillStyle = gradient;
}

Clock.prototype.draw = function(){
    this.ctx.fillText(
        this.text,
        this.x,
        this.y
    );
}

Clock.prototype.countdown = function(){

}
