class particles {
    constructor(x, y,r){
        var options ={
            restitution:0.4
        }
        this.r=r;
        
        this.body = Bodies.circle(x, y, this.r,options);
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        AudioWorkletNode.add(world, this.body);
    }
        
}
display() {


    var pos = this.body.position;
    var anglr = this.body.angle;

    Push();
    trnanslate(pos.x,pos);
    Rotate(angle);
    //imageMode(centre);
    noStroke();
    Fill(this.color)
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r,this.r);
    Pop();

}



