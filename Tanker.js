class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.tanker= loadImage('assets/tank.png');
     
    };
    attach(body){
      this.canon.bodyA = body;
  }
  
  fly(){
      this.canon.bodyA = null;
  }
  
    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      image(this.tanker,20,340,tank.width = 350,tank.height = 350);
      
      push();
      pop();
    };
}
