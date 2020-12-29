var nose_x , nose_y ;
var status=0;
function preload() {
 clown=loadImage("https://i.postimg.cc/MH6zdrW9/unnamed.png");

}
function setup() {
canvas=createCanvas(400 , 400);
canvas.position(510, 200);
video=createCapture(VIDEO);
video.size(400 , 400);
video.hide();
posenet=ml5.poseNet(video , ModelLoaded);
posenet.on('pose' , gotPoses);

}

function draw() {
image(video , 0 , 0 , 400 , 400);
if (status==1)
{
    fill(255 , 0 , 0);
    stroke(255 , 0 , 0);
    image(clown , nose_x, nose_y , 150 , 150);
}

}

function ModelLoaded()
{
console.error("ModelLoaded");   
}

function gotPoses(results)
{
console.log(results);
if (results.length>0)
{
    nose_x=results[0].pose.nose.x-75;
    nose_y=results[0].pose.nose.y-75;
    console.error(nose_x);
    console.error(nose_y);
    status=1;
}

}
