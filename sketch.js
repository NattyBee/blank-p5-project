var movedirectx = -4 ;
var movedirecty = 4 ;
var ballr = 255 ;
var ballg = 0 ;
var ballb = 0 ;
var ball = {
  x: 20,
  y: 200,
  size: 15,

  display: function () {
    // note that to access any of ball's properties, you must use dot notation, using the special keyword this
    fill(ballr,ballg,ballb);
    ellipse(this.x, this.y, this.size, this.size);
  },

  update: function () {
    this.checkForBounce();
    this.move();
  },

  move: function () {
    this.y = this.y + movedirecty; // this line is the same as: this.x = this.x + 1;
    this.x = this.x + movedirectx;

  },

  checkForBounce: function () {
    if (this.y > height - this.size / 2) this.bouncey();
    if (this.y < 0 + this.size / 2) this.bouncey();
    if (this.x < 0 + this.size / 2) this.bouncex();
    if (this.x > width - this.size / 2) this.bouncex();
  },

  bouncey: function () {
   ballr = random(0,255);
   ballg = random(0,255);
   ballb = random(0,255);
    movedirecty = movedirecty * -1;
    // your code goes here; a hint: this will require making your own variable as well as defining this function
    // another hint: notice that ball is defined using object literal notation
  },

  bouncex: function() {
    ballr = random(0,255);
    ballg = random(0,255);
    ballb = random(0,255);
    movedirectx = movedirectx * -1;
  },
};
var setup = function() { // setup is called only when the sketch starts
  createCanvas(600, 400);
};

var draw = function() { // draw is called 60 times per second; animation goes here.
  background(100); // pay special attention to this line; what does it do?
  ball.display();
  ball.update();
};
