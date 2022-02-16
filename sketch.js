let goLeft=false;
let x=292;
let y=83;
function setup() {
  // put setup code here
  createCanvas(400,200);

}

function draw() {
  // put drawing code here

  background(200);
  line(200,0,200,200);

  //BAGIAN KIRI

  // Kaki
  fill(255,0,0);
  arc(80,195, 25, 25, radians(180), radians(0));
  arc(120,195, 25, 25, radians(180), radians(0));

  fill(0,0,128);
  rect(77.5,162, 5, 13);
  rect(117.5,162, 5,13);

  fill(63,255,0);
  rect(75,155, 10, 7);
  rect(75,175, 10, 11);
  rect(115,155, 10,7);
  rect(115,175, 10,11);

  // Badan
  fill(0,0,128);
  rect(72.5,150, 55,5);

  fill(63,255,0);
  rect(65,90, 70,60);
  fill(0,0,128);
  rect(73,98, 53,43);
  fill(192,192,192);
  rect(77,102, 10,35);
  fill(135,206,235);
  rect(90,102, 32,15);
  fill(255,0,0);
  rect(90,119, 32,5);

  fill(255,255,0);
  ellipse(82,107,5,5);
  fill(135,206,235);
  ellipse(82,115,5,5);
  fill(255,0,0);
  ellipse(82,123,5,5);
  fill(34,139,35);
  ellipse(82,131,5,5);

  fill(249,0,255);
  rect(90,127, 1,10);
  rect(93,127, 1,10);
  rect(96,127, 1,10);
  rect(99,127, 1,10);

  rect(105,127, 3,3);
  rect(111,127, 3,3);
  rect(117,127, 3,3);
  rect(111,132, 3,3);
  rect(117,132, 3,3);

  line(76,146,123,146);

  fill(0,0,0);
  ellipse(69,96,3,3);
  ellipse(69,144,3,3);
  ellipse(130,96,3,3);
  ellipse(130,144,3,3);

  //Bahu
  fill(63,255,0);
  arc(65,90,20,20,radians(-270),radians(0));
  arc(135,90,20,20,radians(180),radians(-270));

  //Tangan
  fill(63,255,0);
  rect(50,85,10,10);
  rect(40,80,10,25);

  rect(40,115,10,20);
  rect(35,145,20,10);
  rect(35,155,8,10);
  rect(47,155,8,10);

  rect(140,85,10,10);
  rect(150,75,10,25);

  rect(150,55,10,10);
  rect(145,25,20,10);
  rect(145,15,8,10);
  rect(157,15,8,10);
  
  fill(255,0,0);
  arc(65,90,15,15, radians(-270),radians(0));
  arc(135,90,15,15, radians(180),radians(-270));

  fill(0,0,128);
  rect(42.5,105,5,10);
  rect(152.5,65,5,10);

  rect(40,135,10,10);
  rect(40,125,10,10);
  rect(150,35,10,10);
  rect(150,45,10,10);

  fill(255,0,0);
  ellipse(45,90,15,15);
  ellipse(155,90,15,15);

  ellipse(45,135,15,15);
  ellipse(155,45,15,15);

  //Kepala
  fill(0,0,128);
  rect(92,83,15,7);
  fill(63,255,0);
  rect(77,71,45,13);
  
  arc(99.5,51,35,35, radians(180),radians(0));
  fill(255,0,0);
  rect(97.5,31,4,4);
  line(85,15,97.5,31);
  line(115,15,101.5,31);

  fill(63,255,0);
  rect(82,49, 35,22);

  fill(255,0,0);
  rect(74,51,8,17);
  rect(117,51,8,17);

  fill(63,255,0);
  rect(77,58,10,13);
  rect(112,58,10,13);

  fill(255,0,0);
  rect(90,54,6,5);
  rect(103,54,6,5);

  fill(0,0,128);
  triangle(87,64, 87,71, 94,71);
  triangle(112,64,112,71,105,71);
  triangle(100,64,94,71,105,71);


  //BAGIAN KANAN

  // Kaki
  fill(255,0,0);
  arc(280,195, 25, 25, radians(180), radians(0));
  arc(320,195, 25, 25, radians(180), radians(0));

  fill(0,0,128);
  rect(277.5,162, 5, 13);
  rect(317.5,162, 5,13);

  fill(163,255,0);
  rect(275,155, 10, 7);
  rect(275,175, 10, 11);
  rect(315,155, 10,7);
  rect(315,175, 10,11);

  // Badan
  fill(0,0,128);
  rect(272.5,150, 55,5);
 
  fill(63,255,0);
  rect(265,90, 70,60);
  fill(0,0,128);
  rect(273,98, 53,43); 
  fill(192,192,192);
  rect(277,102, 10,35);
  fill(135,206,235);
  rect(290,102, 32,15);
  fill(255,0,0);
  rect(290,119, 32,5);

  fill(255,255,0);
  ellipse(282,107,5,5);
  fill(135,206,235);
  ellipse(282,115,5,5);
  fill(255,0,0);
  ellipse(282,123,5,5);
  fill(34,139,35);
  ellipse(282,131,5,5);

  fill(249,0,255);
  rect(290,127, 1,10);
  rect(293,127, 1,10);
  rect(296,127, 1,10);
  rect(299,127, 1,10);

  rect(305,127, 3,3);
  rect(311,127, 3,3);
  rect(317,127, 3,3);
  rect(311,132, 3,3);
  rect(317,132, 3,3);
  
  line(276,146,323,146);

  fill(0,0,0);
  ellipse(269,96,3,3);
  ellipse(269,144,3,3);
  ellipse(330,96,3,3);
  ellipse(330,144,3,3);
  
  //Bahu
  fill(63,255,0);
  arc(265,90,20,20,radians(-270),radians(0));
  arc(335,90,20,20,radians(180),radians(-270));

  //Tangan
  fill(63,255,0);
  rect(250,85,10,10);
  rect(240,80,10,25);

  fill(0,0,128);
  rect(242.5,105,5,30);
  rect(352.5,45,5,30);

  fill(63,255,0);
  rect(x-52,y+35,10,20);
  rect(x-57,y+64,20,10);
  rect(x-57,y+74,8,10);
  rect(x-45,y+74,8,10);

  rect(340,85,10,10);
  rect(350,75,10,25);

  rect(x+58,y-25,10,10);
  rect(x+53,y-55,20,10);
  rect(x+53,y-65,8,10);
  rect(x+65,y-65,8,10);

  fill(255,0,0);
  arc(265,90,15,15, radians(-270),radians(0));
  arc(335,90,15,15, radians(180),radians(-270));

  fill(0,0,128)
  rect(x-52,y+44,10,20);
  rect(x+58,y-44,10,18);
   
  fill(255,0,0);
  ellipse(245,90,15,15);
  ellipse(355,90,15,15);
  ellipse(x-47,y+54,15,15);
  ellipse(x+63,y-35,15,15);

  //Kepala
  fill(0,0,128);
  rect(292,70,15,20);
  fill(63,255,0);
  rect(x-15,y-12,45,13);

  arc(x+7.5,y-32,35,35, radians(180),radians(0));
  fill(255,0,0);
  rect(x+5.5,y-52,4,4);
  line(x-7,y-68,x+5.5,y-52);
  line(x+23,y-68,x+9.5,y-52);
  
  fill(63,255,0);
  rect(x-10,y-34, 35,22);

  fill(255,0,0);
  rect(x-18,y-32,8,17);
  rect(x+25,y-32,8,17);

  fill(63,255,0);
  rect(x-15,y-25,10,13);
  rect(x+20,y-25,10,13);

  fill(255,0,0);
  rect(x-2,y-29,6,5);
  rect(x+11,y-29,6,5);

  fill(0,0,128);
  triangle(x-5,y-19, x-5,y-12, x+2,y-12);
  triangle(x+20,y-19,x+20,y-12,x+13,y-12);
  triangle(x+8,y-19,x+2,y-12,x+13,y-12);

  if(goLeft==false){
    y=y+2;

  }
  if(goLeft==true){
    y=y-2;
  }
  if(y>88){
    goLeft=true;
  }
  if(y<70){
    goLeft=false;
  }






  

  
  


 

}