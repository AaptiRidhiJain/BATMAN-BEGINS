class Umbrella {
    constructor(x,y,radius){
         var options = {
              isStatic: true,
              restitution: 0.5
         }

        this.x = x;
        this.y = y;
        this.r = radius;
        this.image = loadImage("walking_1.png");
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rotate(angle);
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,300,300);
        pop();
    }
}
