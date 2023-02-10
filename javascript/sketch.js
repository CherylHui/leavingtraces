let June2019;
let timelineObj = [];
let startLoc ={};
let Lat=[];
let Long=[];
let endLat=[];
let endLong=[];
let xPos=[];
let yPos=[];
let endxPos=[];
let endyPos=[];
function preload(){
  June2019 = loadJSON('2019_JUNE.json');
}
function setup() {


  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element


     console.log(June2019.timelineObjects.length);
   for(i=0;i< 20; i ++){
    // Need to enter manually as the data format is not well organised
  Lat.push(June2019.timelineObjects[0].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[1].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[3].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[5].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[7].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[8].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[10].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[12].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[14].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[16].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[17].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[18].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[19].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[20].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[22].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[24].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[25].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[27].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[28].activitySegment.startLocation.latitudeE7);
  Lat.push(June2019.timelineObjects[29].activitySegment.startLocation.latitudeE7);

  endLat.push(June2019.timelineObjects[0].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[1].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[3].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[5].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[7].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[8].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[10].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[12].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[14].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[16].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[17].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[18].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[19].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[20].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[22].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[24].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[25].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[27].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[28].activitySegment.endLocation.latitudeE7);
  endLat.push(June2019.timelineObjects[29].activitySegment.endLocation.latitudeE7);


  Long.push(June2019.timelineObjects[0].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[1].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[3].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[5].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[7].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[8].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[10].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[12].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[14].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[16].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[17].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[18].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[19].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[20].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[22].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[24].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[25].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[27].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[28].activitySegment.startLocation.longitudeE7);
  Long.push(June2019.timelineObjects[29].activitySegment.startLocation.longitudeE7);

  endLong.push(June2019.timelineObjects[0].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[1].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[3].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[5].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[7].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[8].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[10].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[12].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[14].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[16].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[17].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[18].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[19].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[20].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[22].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[24].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[25].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[27].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[28].activitySegment.endLocation.longitudeE7);
  endLong.push(June2019.timelineObjects[29].activitySegment.endLocation.longitudeE7);
  
  // console.log("LatitudeE7: " + Lat[i]);
  // console.log("LongitudeE7: " + endLong[i]);
   }
  createCanvas(windowWidth, windowHeight);
  textSize(40);
 

}


function draw() {
  background(0);
  for (i=0;i<20;i++){
  xPos[i] = map(Lat[i],222000000,225000000,0,width-10);
  yPos[i] = map(Long[i],1137000000,1145000000,0,height)+noise(1000)*20;
  endxPos[i] = map(endLat[i],222000000,225000000,0,width-10);
  endyPos[i] = map(endLong[i],1137000000,1145000000,0,height)+noise(1000)*20;
  noStroke();
  fill(255,0,0,noise(100)*255);
    circle(xPos[i],yPos[i],5);
    circle(endxPos[i],endyPos[i],5);
    stroke(255,0,0,random(255));
    line(xPos[i],yPos[i]+random(50),endxPos[i]+random(150),endyPos[i]);
  }
  }
  
  function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}