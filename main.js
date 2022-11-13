noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/26xTdX1G/favpng-clip-art-illustration-clown-nose-vector-graphics.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 30, 25);
}

function take_snapshot(){    
  save('myFilterImage.png');
}

function preload() {  
}

noseX=0;
noseY=0;

function preload() {
  lipstick = loadImage('https://img.freepik.com/premium-vector/realistic-lips-vector-icon-isolated-white-women-3d-mouth-red-shiny-glossy-lipstick-fashion-glamour-illustration_550143-298.jpg?w=2000')
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX - 50, noseY - 55, 100, 100);
}
