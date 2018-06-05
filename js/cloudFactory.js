function CloudFactory(ctx) {
    this.ctx = ctx;
  
    this.clouds = [];
  
    this.drawCounter = 0;
  }

  CloudFactory.prototype.draw = function(){
    this.drawCounter++;

    this.pushCloud();

    this.clouds.forEach(function(c) {
      c.draw();
    });

  }

  CloudFactory.prototype.pushCloud = function(){
    var max = 100,
    min = 10;

    var random = Math.floor(Math.random() * (max - min + 1) + min);

    if (this.drawCounter % random === 0) {
      this.drawCounter = 0;

      this.clouds.push(
        new Cloud(this.ctx)
      );
    }
  }

  CloudFactory.prototype.move = function(){
    this.clouds.forEach(function(c) {
    c.move();
    }); 
  }

  CloudFactory.prototype.clean = function(){
    this.clouds = this.clouds.filter(function(c) {
      return c.x + c.w > 0;
    });
  }