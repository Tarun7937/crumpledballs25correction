class Paper {
    constructor (x,y,r){
        var options  = {
            isStatic: false, 
            restitution : 0.3,
            friction : 1,
            density :1.2,

        }
        this.body = Bodies.circle(x,y,r,options);
        
        this.image = loadImage("images/paper.png");
        
        World.add(world,this.body);
        this.radius = 70;
    }

    display(){
        var pos = this.body.position;

        
        push();
       
        imageMode(RADIUS);
       // fill("pink")
        image(this.image, pos.x,pos.y,this.radius,this.radius)
        
        pop();



    }
}