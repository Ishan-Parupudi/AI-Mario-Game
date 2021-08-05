img="";
noseX = "";
noseY = "";
marioX = "";
marioY = "";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video= createCapture(VIDEO);
	video.size(600,300);
	video.parent('game_console');

	poseNet=ml5.poseNet(video,modleLoaded);
	poseNet.on("pose", gotPoses);
}

function draw() {
	game();
		
}

function modleLoaded() 
{
	console.log("PoseNet Initiated!");
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	  noseX=results[0].pose.nose.x;
	  noseY=results[0].pose.nose.y;
	  console.log("Nose X = " + noseX);
	  console.log("Nose Y = " + noseY);
  }
}




