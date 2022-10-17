difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    background('#00b7eb');

    document.getElementById("font_size").innerHTML = "Font size of the Text will be = " + difference + "px";
    textSize(difference);
    fill('#00d1dd');
    text('Kart', 50, 400);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!')
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+ leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}