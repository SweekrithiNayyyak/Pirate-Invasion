class Tower{
    constructor(x,y,width,height){
        var tow={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,tow);
        this.width=width;
        this.height=height;
        this.image=loadImage("assets/tower.png")
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        rotate(angle)
        fill("blue")
        stroke("white")
       image(this.image,0,0,this.width,this.height);
        pop()
    }
}