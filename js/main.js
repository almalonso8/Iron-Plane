window.onload = function(){
    var canvas = document.createElement("canvas");

    canvas.width = 1580;
    canvas.height = 800;

    document.body.prepend(canvas);

    new Game(canvas).start();
    new Game(canvas).clean();
};