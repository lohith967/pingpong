function preload(){
}

function setup(){
    canvas =  createCanvas(600,500);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(400, 400);
  
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
  
}

function modelLoaded(){
    console.log("Model Loaded");
}

