function preload(){

}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    Image(video,10,10,150,120);
    fill(0, 128, 0);
    stroke(0,128,10);
    circle(460,40,50);
    circle(460,40,50);
    circle(460,40,50);
    circle(460,40,50)
    
    rect(30, 20, 55, 55, 20);
    rect(30, 20, 55, 55, 20);
    rect(30, 20, 55, 55, 20);
    rect(30, 20, 55, 55, 20);
    
}

function take_snapshot(){
    save("FIRST P5.JS");
}