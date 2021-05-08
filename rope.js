class Rope{
    constructor(bodyA,pointB){
    var options = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 1,
        length : 250
    }
    this.pointB = pointB
    this.rope = constraint.create(options)
    World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push()
     strokeWeight(0)
     stroke("white")
     line(pointA.x,pointA.y,pointB.x,pointB.y)
     pop()
        
    }
}