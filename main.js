rightWristX="";
leftWristX="";
defference="";
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(100,100);

    canvas=createCanvas(550,500);
    canvas.position(700,130);

    posenet= ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);

        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        defference=floor(rightWristX-leftWristX);
        console.log("rightWristX ="+ rightWristX+"leftWristX ="+leftWristX);
        console.log(defference)
    }
}

function draw(){
    background('#FFFF99');
    textSize(defference);
    fill("#FF0000");
    text('Harshitha',200,200);
}

function modelLoaded(){
    console.log("model loaded!!");
}

