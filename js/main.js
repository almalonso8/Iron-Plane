window.onload = function(){
    var canvas = document.createElement("canvas");

    canvas.width = 1350;
    canvas.height = 700;

    document.body.prepend(canvas);

    new Game(canvas).start();
    new Game(canvas).clean();
};