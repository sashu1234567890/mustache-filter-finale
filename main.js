noseX=0;
noseY=0;

function preload()
 {
     img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
 }

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("noseX" + results[0].pose.nose.x);
        console.log("noseY" + results[0].pose.nose.y);
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
    }
}

function modelLoaded() {
    console.log("PoseNet is intialized")
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(img, noseX-35 , noseY-5 , 70 , 40)
}

function take_snapshot() {
    save('myFilterImage.png');
}