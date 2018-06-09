function Clock(ctx){
    this.ctx = ctx;
    this.ctx.font = "30px Courier New"
    this.text = "Seconds to arrive "
    this.x = 675;
    this.y = 80;
    var gradient = this.ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
gradient.addColorStop("0", "black");
gradient.addColorStop("1.0", "red");
    this.ctx.fillStyle = gradient;
    this.countdown = 240;
}

Clock.prototype.draw = function(){
    this.ctx.fillText(
        this.text + Math.floor(this.countdown),
        this.x,
        this.y
    );
}

Clock.prototype.clockRuning = function(){
   return this.countdown -= 0.1;
}
Clock.prototype.clockStops = function(){
    console.log(this.countdown); 
}
