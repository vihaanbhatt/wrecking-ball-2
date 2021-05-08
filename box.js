class Box {
    constructor (x,y,width,height){
        var options = {
            restitution : 0.5,
            friction : 1,
            density : 0.05,
            
            
        }
        this.visibility = 255
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = color(random(0,255),random(0,255),random(0,255))

        World.add(world,this.body );
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        if(this.body.speed<10){

        
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill(this.color)
        rect(0,0,this.width,this.height)

        pop()
        }
        else{
            World.remove(world,this.body)
            this.visibility = this.visibility -5
        }
    }
}