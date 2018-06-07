function Blob (r){
    this.pos = createVector(x,y);
    this.r = 64

    this.show = function (){
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.x*2, this.y*2);
    }
}