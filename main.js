function preload(){

}
function setup(){
    canvas1 = createCanvas(950, 950);
    canvas1.position(350, 200)
    video = createCapture(VIDEO);
    video.hide();
    tint_color = ""
}
function draw(){
    image(video, 90, 90, 640, 480);

    circle(45, 42, 80)
    stroke(0, 128, 0);

    rect(42, 80, 10, 530);
    fill(0, 255, 0)

    circle(45, 600, 80);
    stroke(0, 128, 0); 

    rect(85, 600, 710, 10);
    
    circle(780, 600, 80);
    stroke(0, 128, 0);

     rect(772 , 30, 10, 530);

     rect(85, 40, 710, 10);

     circle(780, 40, 80);
    stroke(0, 128, 0);
}
function take_snapshot(){
    save('frame_photo.png')
}