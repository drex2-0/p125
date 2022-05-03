song="";
function preload()
{
    song=loadSound("music.mp3");
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
}