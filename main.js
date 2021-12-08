rightWristX="";
rightWristY="";
scorerightWrist = 0;

function preload(){
}

function start(){
  Gamestatus="start Game";
  document.getElementById("status").innerHTML = "Game is loading!!"
  }

function setup(){
  video= createCapture(VIDEO);
	video.size(800,400);
	video.parent("Game_console");
  
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
  
}

function modelLoaded(){
    console.log("Model Loaded");
}

function draw(){
  if(scorerightWrist >0.2){
  fill("red");
  stroke("red");
  circle(rightWristX,rightWristY,20.5);
  }
}

function gotPoses(results){
	if(results.length >0){

		console.log(results);
    scorelrightWrist = results[0].pose.keypoints[10].score;
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;

    console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);

		

	}
}
