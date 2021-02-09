class Drop {
    constructor(x, y, width, height) {
        var options={
         isStatic: false,
         restitution: 0.1,
         friction: 0.1
      }

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height, options);
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      fill(141,254,252);
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
    }
     update(){
       if(this.body.position.y > 600){
          Matter.Body.setPosition(this.body,{
          x: random(0,400),
          y: random(-10,0)
          })
        }
     }
  }