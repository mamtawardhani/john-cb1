class Paper {
    constructor(x,y){
        var options = {
            restitution : 0.3,
            isStatic : false,
            friction : 0.5,
            density : 0.2
        }
        this.body = Bodies.circle(x,y, 30, options);
        World.add(world, this.body);
    }
    display(){
        fill("cyan");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y, 30);
    }
}