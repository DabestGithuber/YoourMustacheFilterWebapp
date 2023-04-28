noseX = 0;
noseY = 0;

function preload() {
    mustacheWhichisnottendollars = loadImage('https://i.postimg.cc/QtMDgdXp/download-removebg-preview.png')
}

function setup() {
    canvas = createCanvas(350, 300);
    canvas.center();


    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("'Model Initialized' From Mustache.net")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x - 32;
        noseY = results[0].pose.nose.y - 10;
    }
}

function draw() {
    image(video, 0, 0, 350, 300);
    image(mustacheWhichisnottendollars, noseX, noseY, 70, 50);
}


function take_snapshot() {
    save('YourAmazingMustacheUsingMustacheFilter.png')
}