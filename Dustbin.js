class Dustbin {
    constructor (x,y,width,height){
        var options  = {
          isStatic: true }
       this.width = width 
       this.height  = height 
       this.body  = Bodies.rectangle (x,y,width,height,options);   
       this.image = loadImage("images/dustbingreen.png");
       World.add(world,this.body);
      

  }
  display(){
      var pos =this.body.position;
      push()

      imageMode(CENTER);
     // fill(this.colour);
      image(this.image,530,395,120,120);
      pop()
  }
}
