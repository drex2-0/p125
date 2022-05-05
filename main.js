song1="";
song2="";
song1Status="";
song2Status="";
scoreRightWrist=0;
scoreLeftWrist=0;
RightWristX=0;
RightWristY=0;
LeftWristX=0;
LeftWristY=0;
function preload()
{
    song1=loadSound("Alone.mp3");
    song2=loadSound("IM FADED.mp3");
    
}
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);

}
function modelloaded()
{
    console.log("Posenet is started")
}
function draw()
{
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreRightWrist>0.2) {
        circle(RightWristX,RightWristY,20);
    }
    if(scoreLeftWrist>0.2) {
        circle(LeftWristX,LeftWristY,20);
    }
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotposes(results)
{
    console.log(results);
    scoreRightWrist=results[0].pose.keypoints[10].score;
    scoreLeftWrist=results[0].pose.keypoints[9].score;
    RightWristX=results[0].pose.rightWrist.x;
    RightWristY=results[0].pose.rightWrist.y;
    LeftWristX=results[0].pose.leftWrist.x;
    LeftWristY=results[0].pose.leftWrist.y;
}
