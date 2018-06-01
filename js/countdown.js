function Clock(ctx){
    this.ctx = ctx;
    this.text = "00:00";
    this.ctx.font = "30px Verdana"
    this.x = 900;
    this.y = 80;
    var gradient = this.ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
gradient.addColorStop("0", "black");
gradient.addColorStop("0.5", "white");
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
    this.text =01 + ":" + 00;
  startTimer();
  
  function startTimer() {
    var presentTime = this.text;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
    //if(m<0){alert('timer completed')}
    
    this.text = m + ":" + s;
    setTimeout(startTimer, 1000);
  }
  
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }
}
