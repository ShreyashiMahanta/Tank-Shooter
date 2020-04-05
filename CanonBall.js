class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.canon= loadImage('assets/canonBall.png');
    this.trajectory =[];
  };
 
  display(){
    image(this.canon,450,400,canon.width = 80,canon.height = 60);
   push();
    pop();
  };
};
