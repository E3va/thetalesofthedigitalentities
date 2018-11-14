var pg;
var w = window.innerWidth;
var h = window.innerHeight;
var x;
var y;
var yspeed=0;
var xspeed =0;
var js;
//add all janstatements here
var janstatements;
var animatingtohome = false;
var easing = 0.05;
var homeX;
var homeY;
var startScreen = true;
var instructionsWindow;
var instructionsButton;
var sidebarOpen = false;

//statement - node - node

function setup() {
    createCanvas(w, h);
    //this will be the size of your artboard
    pg = createGraphics(13700, 4670);
    //if you want to load your graph as a jpg do it here and uncomment out the 
    //drawing stuff below
    pg = loadImage('flowchartv9.png');
    imageMode(CENTER);
    homeX = w/2+6650;
    homeY = h/2+650;
    x = homeX; //13000 (dimensions of image)
    y = homeY; //4670
    
//    //drawing stuff just putting stuff in the pgraphics object so we can see it
//    pg.fill(0);
//    pg.background(100);
//    pg.noStroke();
//    pg.ellipse(pg.width / 2, pg.height / 2, 50, 50);
//    for (var i=0; i<80; i++) {
//        pg.ellipse(random(0,pg.width), random(0,pg.height),10,10);
//    }
//    //here I am starting to think about how you might do the diagram / interaction
//    //let's talk through this on Tuesday
//    js = new janstatement(pg.width / 2, pg.height / 2, true, [['one',-150,150],['two',150,150]]);
//    js.setup();
//    js.display();
    
    /*
    button01 = createButton("01");
    button01.class('button1');
    button01.mousePressed(button01press);
    */
    instructionsWindow = createDiv("");
    instructionsWindow.id('instructions-window');
    instructionsWindow.position(w/2-instructionsWindow.width/2, h/2-instructionsWindow.height/2);
    
    instructionsButton = createButton("");
    instructionsButton.class('instructions-button');
    instructionsButton.parent('instructions-window');
    instructionsButton.position(770,0);
    instructionsButton.mousePressed(instructionsClose);
    
    
    }
    

function instructionsClose(){
    console.log("going to next screen");
    instructionsWindow.remove();
    startScreen = false;
}
  
function button01press(){
    
      console.log("it's alive!");

}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    animatingtohome = false;
    sidebarOpen = true;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    animatingtohome = false;
    sidebarOpen = false;
}


function draw() {
    background(200);
    //draw the pgraphic
    image(pg, x, y);
    console.log(sidebarOpen);
    

    //map the speed of movement to the position of the mouse on screen
    if (animatingtohome==false && startScreen==false && sidebarOpen == false){
        //constrain the movement of the pgraphic so it stays within the bounds of the frame
        if (frameCount >50) {
            if (dist(mouseX, mouseY, windowWidth/2, windowHeight/2) < 100) {
            //don't move
                xspeed=0;
                yspeed=0;
            } else {
                xspeed = map(mouseX,0,windowWidth,10,-10);    
                yspeed = map(mouseY,0,windowHeight,10,-10);
                x+=xspeed;
                y+=yspeed;

                if (x < windowWidth/2 - pg.width/2 + windowWidth/2) {
                    x = windowWidth/2 - pg.width/2 + windowWidth/2;
                    //xspeed =0;
                } else if (x > windowWidth/2 +pg.width/2 - windowWidth/2) {
                    x  = windowWidth/2 +pg.width/2 - windowWidth/2;
                    //xspeed =0;
                }
        
                if (y < windowHeight/2 - pg.height/2 + windowHeight/2) {
                    y = windowHeight/2 - pg.height/2 + windowHeight/2;
                    //xspeed =0;
                } else if (y > windowHeight/2 +pg.height/2 - windowHeight/2) {
                    y  = windowHeight/2 +pg.height/2 - windowHeight/2;
                    //xspeed =0;
                }
            }
        }
    } else if (animatingtohome == true && sidebarOpen == false) {
        animateTo(homeX, homeY);
    }
    
    if (mouseIsPressed && animatingtohome==false && startScreen == false) {
        console.log("mousepressed");
        animatingtohome = true;
    }
    
    
}

//you could re-use this function to animate to different positions
//by changing the homeX and homeY variables values when you click on something
//and them setting animatingtohome to true
function animateTo (_hx, _hy) {
    //if we are not near/close to where we want to be
    // i.e. the distance from where we want to be _hx, _hy to where we are x, y then
    if (dist(_hx, _hy, x, y) > 5) {
            //hx is out target
            var targetX = _hx;
            //get the distance to our target
            var dx = targetX - x;
            // move a percetange of this distance closer to the target
            x += dx * easing;
        
            //do the same with y position
            var targetY = _hy;
            var dy = targetY - y;
            y += dy * easing;
        } else {
            //we are where we want to be and end animating to home by setting it to false
            animatingtohome = false;
    }  
}


// janstatement class
//we could make a class for a statement, and have answer nodes attached to it
//will talk through more on Tuesday
function janstatement(_x, _y, _visible, _nodeArray) {
    this.x = _x;
    this.y = _y;
    this.visible = _visible;
    this.nodeArray = _nodeArray;
    this.nodes = [];

    this.setup = function () {
        for (var i=0; i<this.nodeArray.length; i++) {
            n = new node(this.nodeArray[i][1],this.nodeArray[i][2]);
            this.nodes.push(n);
        }
    }
    
  this.display = function() {
    pg.noStroke();
    pg.fill(255,0,0);
      pg.rectMode(CENTER);
    pg.rect(this.x, this.y, 100, 100);
    
    for (var i=0; i<this.nodes.length; i++) {
        this.nodes[i].display(this.x, this.y); 
        
    }
  }
}

function node (_x, _y) {
    this.x = _x;
    this.y = _y;
    this.display = function (px, py) {
        pg.fill(0,255,0);
        pg.noStroke();
        pg.ellipse(px+this.x, py+this.y, 100, 100);
        pg.stroke(0,0,255);
        pg.strokeWeight(2);
        pg.line(px, py,this.x+px,this.y+py);
    }
}




function windowResized() {
    //keeps the canvas to the full window size 
    resizeCanvas(displayWidth, displayHeight);
    var x = (windowWidth) / 2;
    var y = (windowHeight) / 2;
    //this keeps it in the center of the window
    instructionsWindow.position(x-instructionsWindow.width/2, y-instructionsWindow.height/2);
    var buttonPosY = displayWidth*0.705;
    var buttonPosX = displayHeight*0.5;
    //Rbutton01.position(buttonPosY,buttonPosX);
    
}