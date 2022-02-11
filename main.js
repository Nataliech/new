function preload(){


}

function setup() {
    createCanvas(390, 240);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    
    //capture.hide();
  }

function modelLoaded(){

    console.log('PoseNet Is Initialized');
}

function draw() {
    background(255);
    image(capture, 0, 0, 320, 240);
    filter(INVERT);
    
  }
  

function take_snapshot(){

    save('myFilterImage.png');
}

function gotPoses(results){

    if (results.length>0){

        console.log(results);
        console.log("nose_x = "+ results[0].pose.nose.x);
        console.log("nose_y = "+ results[0].pose.nose.y);
    }
}