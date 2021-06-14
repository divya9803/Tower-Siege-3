class Box{
    constructor(x, y, width, height, angle) 
    {
        var options = {
            'restitution':0.5,
            'friction':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity=255;
        this.remove = true;
      }
      display()
      {
        if(this.body.speed < 3)
        {
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
        }
        else
        {
          World.remove(world, this.body);

          if(this.remove === true)
          {
              score = score + 50;
              this.remove = false;
          }

          push();
          this.Visiblity=this.Visiblity-5;
          tint(255,this.Visiblity);
          pop();
        }
      }
}