canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var car1="car1.png"
var car2="car2.png"

var car1X=10;
var car1Y=10;
var car2X=10;
var car2Y=60;



function add(){
    backgroundImg=new Image();
    backgroundImg.onload=uploadBackground;
    backgroundImg.src="racingCanvas.jpg";
    car1_Img= new Image();
    car1_Img.onload = uploadcar1;
    car1_Img.src=car1;

    car2_Img= new Image();
    car2_Img.onload = uploadcar2;
    car2_Img.src=car2;
}
function uploadBackground(){
    ctx.drawImage (backgroundImg, 0, 0, canvas.width, canvas.height);
        
}
function uploadcar1(){
    ctx.drawImage(car1_Img, car1X, car1X, 75, 50);

}
function uploadcar2(){
    ctx.drawImage(car2_Img, car2X, car2Y, 75, 50);
}
window.addEventListener("keydown", keyDownCar)
function keyDownCar(e){
    var keypressed=e.keyCode;
    if (keypressed == "38") {
        up();
        console.log("up");
    }
    if (keypressed == "40") {
        down();
        console.log("down");
    }
    if (keypressed == "37") {
        left();
        console.log("left");
    }
    if (keypressed == "39") {
        right();
        console.log("right");
    }
    
    
   
    if (keypressed == "87") {
        up2();
        console.log("up2");
    }
    if (keypressed == "83") {
        down2();
        console.log("down2");
    }
    if (keypressed == "65") {
        left2();
        console.log("left2");
    }
    if (keypressed == "68") {
        right2();
        console.log("right2");
    }
}


    

function up(){
    if (car1Y >= 0) {
        car1Y-=10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        
    }
}
function down(){
    if (car1Y <= 400) {
        car1Y+=10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function left(){
    if (car1X >= 0) {
        car1X-=10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function right(){
    if (car1X <= 800) {
        car1X+=10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
        
    }
}
function up2(){
    if (car2Y >= 0) {
        car2Y-=10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
function down2(){
    if (car2Y <= 400) {
        car2Y+=10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
        
    }
}
function left2(){
    if (car2X >= 0) {
        car2X-=10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
function right2(){
    if (car2X <= 800) {
        car2X+=10;
        uploadBackground();
        uploadcar2();
        uploadcar1();
    }
}
