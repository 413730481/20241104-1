let font;  //載入字型文字
let points = [];  //轉成點狀文字
let r=5  //增加上下幅度
let angle=0  //三角函數內的角度
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("fonts/PlaywriteGBS-VariableFont_wght.ttf") 
}
//===================================================


function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ffe5ec")
  points = font.textToPoints("winnie", -200, 80, 200, {
    sampleFactor:0.06
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
    //for (let i=0; i<points.length; i++) { 
    // text(str(i),points[i].x,points[i].y)
   //} 
   angleMode(DEGREES);  //宣告角度使用0~360
   translate(width/2,height/2)  //把(0,0)座標點，移到視窗中間
}



function draw() {

    background("#ffe5ec");

    translate(mouseX,mouseY)  //把(0,0)座標點，移到視窗中間
    rotate((frameCount/2)%360)
  for (let i=0; i<points.length-1; i++) { 
    //text(str(i),points[i].x,points[i].y)
    fill("#8da9c4")
    noStroke()
    ellipse(points[i].x+r*sin(angle+i*20), points[i].y,10)
    strokeWeight(3)
    stroke("#1e6091")
    line(points[i].x,points[i].y,points[i+1].x,points[i+1].y)
  
 } 
 angle= angle + 10  //美化圖一次就要調整角度+10
}
