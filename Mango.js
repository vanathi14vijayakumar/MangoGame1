

class Mango {
  constructor(x, y, radius) {
    var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
        'isStatic':true
    }
    this.body = Bodies.circle(x, y, radius, options);
    
    this.radius = radius
    this.image2 = loadImage("Images/mango.png");
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
     translate(pos.x, pos.y);
     rotate(angle);
     imageMode(RADIUS);
    fill(255);
    image(this.image2,0,0,this.radius*2,this.radius*2);
   //ellipse(pos.x,pos.y,this.radius)
     pop();
  }
};