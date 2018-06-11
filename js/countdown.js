function Clock(ctx){
    this.ctx = ctx;
    this.ctx.font = "30px Courier New"
    this.text = "Seconds to arrive "
    this.x = 900;
    this.y = 80;
    var gradient = this.ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
gradient.addColorStop("0", "black");
gradient.addColorStop("1.0", "red");
    this.ctx.fillStyle = gradient;
    this.countdown = 240;
    this.time = true;
}

Clock.prototype.draw = function(){
    this.ctx.fillText(
        this.text + Math.floor(this.countdown),
        this.x,
        this.y
    );
}

Clock.prototype.clockRuning = function(){
    if(this.time){
        this.countdown -= 0.1;
    }
}
