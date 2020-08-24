var fixed_object,moving_object;

function setup()
 { createCanvas(1200,800); 
  fixed_object=createSprite(600,400,100,100);
  moving_object=createSprite(200,200,50,50);
 
fixed_object.shapeColor="black";
moving_object.shapeColor="black";


}
   function draw() {
      background(255,255,255);
      moving_object.x=World.mouseX;
      moving_object.y=World.mouseY;
      drawSprites();


      if(colide(fixed_object,moving_object)){
        fixed_object.shapeColor=color(random(0,255),random(0,255),random(0,255))
        moving_object.shapeColor=color(random(0,255),random(0,255),random(0,255));
     
      }
      else {
        fixed_object.shapeColor="black";
        moving_object.shapeColor="black";
      }
    
       }
   