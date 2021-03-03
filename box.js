class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.4,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
        rect(pos.x, pos.y,this.width,this.height)
    }
    
}