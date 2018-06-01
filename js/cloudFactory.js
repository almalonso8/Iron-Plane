function CloudFactory(ctx) {
    this.ctx = ctx;
  
    this.clouds = [];
  
    this.drawCounter = 0;
  }
  
  cloudFactory.prototype.draw = function() {
    this.drawCounter++;
    this.drawClouds();
    this.clouds.forEach(function(cloud) {
      cloud.draw();
    });
  
    this.cleanClouds();
  };
  
  cloudFactory.prototype.move = function() {
    this.clouds.forEach(function(cloud) {
      cloud.move();
    }); 
  };
  
  
  cloudFactory.prototype.draw = function() {
    var max = 100,
        min = 50;
  
    var random = Math.floor(Math.random() * (max - min + 1) + min);
  
    if (this.drawCounter % random === 0) {
      this.drawCounter = 0;
  
      this.clouds.push(
        new Cloud(this.ctx)
      );
    }
  };
  
  cloudFactory.prototype.cleanClouds = function() {
    this.clouds = this.clouds.filter(function(cloud) {
      return cloud.x + cloud.w > 0;
    });
  };
  