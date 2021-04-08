class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':0.8,
          
      }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push ();
      translate (pos.x, pos.y);
      rotate (angle);

      ellipseMode(RADIUS);
      fill(255);
      ellipse(0, 0, this.radius);

      imageMode(CENTER);
      image(this.image, 0, 0, 80, 90);
      pop();
    
    }
  }