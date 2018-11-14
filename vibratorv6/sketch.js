var w = window.innerWidth;
var h = window.innerHeight;
var instructionsWindow;
var instructionsButton;
var canvas;
//I am moving some variables up here so they are global
//i have also renamed your variables so easier to know what's what!
//only one file for animations left and right now
//right ones
var animRight;
var rightparams;
//left ones
var animLeft;
var leftparams;
//beginning animation
var animbeginning;
//divs that will hold the left and right animation
var leftWindow;
var rightWindow;
//using a counter to count through animations and play different ones
//rather than loading and unloading new buttons/animations
//code is 1/4 the length!
var rightcount=0;
var leftcount=0;

var topbar;
//canvas 


function setup() {
    
    //this is the full canvas
    //which is the width and height of the browser window
    canvas = createCanvas(w,h);
    canvas.parent('p5-container');
    console.log("it's alive!");
    
    //this is the instructions window
    //div
    instructionsWindow = createDiv("");
    instructionsWindow.id('instructions-window');
    //this centers it in the window
    //see the resize function also which keeps it in the center if it is re-sized
    instructionsWindow.position(w/2-instructionsWindow.width/2, h/2-instructionsWindow.height/2);
    
    
    //parent for container 
    
    
    /*The problem with your button not appearing is due to the way the
    browser window and contents are resizing i.e your entire window is sizing
    but your button is always positioned at (1180, 70). To fix this you either need
    to re-arrange how you draw windows i.e. not relying upon AE > JS for the full window
    or work out how to get stay in the right spot!*/
    instructionsButton = createButton("");
    //instructions.position(1180,70);
    instructionsButton.class('instructions-button');
    instructionsButton.mousePressed(instructionsclose);
    //put the button inside the instructions div, this means it is positioned relative to the instructions div
    instructionsButton.parent('instructions-window');
    //displaying instructions close button 
    //work on the animation you had here but only to the size of the animation itseld and try placing it inside the div like the button 
    
    //create a div to put the animation in and put that div inside the instrct-window
    //look at the animation-window id in the stylesheet to see
    //how I am controlling its size and position
    animationWindow = createDiv("");
    animationWindow.id('animation-window');
    animationWindow.parent('instructions-window');
    
    //changed the below so its element is animation-window
    var params = {
        container: document.getElementById('animation-window'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path:'instructions.json'        
    };
     
    //instructions for window animation specs
    
    var animpopup;
    animpopup = lottie.loadAnimation(params);
    animpopup.addEventListener("DOMLoaded", function() {
    animpopup.play();}) 
    /*animpopup.position(100,100);*/
    
    topbar = createDiv("");
    topbar.id('topbar');
    
    var leftbar = createDiv("<h1>D A R Y L</h1>");
    leftbar.id('leftbar');
    leftbar.parent('topbar');
    
    //ask Monica about why adding image causes the divs to move around
    
    var rightbar = createDiv("<h1>S E X Y P I E 3 . 1 4 6 9 6 9</h1>");
    rightbar.id('rightbar');
    rightbar.parent('topbar');
    
    //create divs to hold left and right anmation
    leftWindow = createDiv("");
    leftWindow.id('left-window');
    
    rightWindow = createDiv("");
    rightWindow.id('right-window');
    //now load the animations
    //note this is all inside setup
    
    
    
      var leftparams = {
        container: document.getElementById('left-window'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path:'leftsideinterface.json'
        };

    animLeft = lottie.loadAnimation(leftparams);
    animLeft.goToAndStop(240, true);
    
    
    var rightparams = {
        container: document.getElementById('right-window'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path:'rightsideinterface.json'
    };

        
    animRight = lottie.loadAnimation(rightparams);
    //come back later and fix this so you don't need to jumpahead
    //cut off first frames of AE file
    animRight.goToAndStop(20, true);
    
  
    
}

function instructionsclose(){
    console.log("going to next screen");
 
    instructionsWindow.remove();
    //destroy/closing theinstructions window animation  
    
        topbar.show();
        beginningdiv = createDiv("");
        beginningdiv.id('beginning');
    
        var params = {
        container: document.getElementById('beginning'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path:'beginning.json'
        };

        //create the buttons
        //position is still a bit of an issue, lets talk about that this afternoon
    
        Lbutton01 = createButton("");
        Lbutton01.class('interface-button');
        Lbutton01.parent('left-window');
        Lbutton01.mousePressed(Lbutton01PLAY);
    
        Rbutton01 = createButton("");
        Rbutton01.class('interface-button');
        Rbutton01.parent('right-window');
        Rbutton01.mousePressed(Rbutton01PLAY);
        
        //play the beginning animation
        //when it is done, destroy it and its container div
        //now show the lefyt and right windows
        animbeginning = lottie.loadAnimation(params);
        animbeginning.addEventListener("DOMLoaded", function() {
        animbeginning.play();
        animbeginning.addEventListener('complete', function(){
                animbeginning.destroy();
                beginningdiv.remove();
                rightWindow.show();
                leftWindow.show();
                /*Lbutton01.position((displayWidth/2)/2,displayHeight*0.705);
                Rbutton01.position((rightWindow/2)/2,displayHeight*0.705);*/

            })
        }) 
        
        
}

function Lbutton01PLAY(){
    
        if (leftcount==0) {
            //these might be wrong
            
            //done
            animLeft.playSegments([240,595],true);
            leftcount+=1;
            //here I would add an extra control so that users cannot
            //click until the animation is finished.
            
            //done
        } else if (leftcount == 1) {
            animLeft.playSegments([595,1125],true);
            leftcount+=1;
            
            //done
        } else if (leftcount == 2) {
             animLeft.playSegments([1125,1550],true);  
            leftcount+=1;
            
            //done
        } else if (leftcount == 3) {
            animLeft.playSegments([1550,1975],true); 
            leftcount+=1;
            
            //done 
        } else if (leftcount == 4) {
            animLeft.playSegments([1975,2400],true);
            leftcount+=1;
            
            //done
        } else if (leftcount == 5) {
            animLeft.playSegments([2400,3160],true);
            leftcount+=1;
            
            //done
        } else if (leftcount == 6) {
            animLeft.playSegments([3160,3875],true);
            leftcount+=1;
            
            
        } else if (leftcount == 7) {
            animLeft.playSegments([3875,4500],true);
            leftcount+=1;
        } 
}


//these are the functions that get called when you press the button
//we count through with each click to play different sections of the file
function Rbutton01PLAY(){
        //count each time we click the button to play different
        //parts of the animation. much easier than adding and destrying animations!
    
    //done
        if (rightcount==0) {
            animRight.playSegments([140,310],true);
            rightcount+=1;
            //here I would add an extra control so that users cannot
            //click until the animation is finished. but this is fine for
            //the prototype on Tuesday
            
            //done
        } else if (rightcount == 1) {
            animRight.playSegments([310,900],true);
            rightcount+=1;
            
            //done
        } else if (rightcount == 2) {
            animRight.playSegments([900,1360],true);
            rightcount+=1;
            
            //done
        }else if (rightcount == 3) {
            animRight.playSegments([1360,1900],true);
            rightcount+=1;
            
            //done
        }else if (rightcount == 4) {
            animRight.playSegments([1900,2200],true);  
            rightcount+=1;
            
            //done
        }else if (rightcount == 5) {
             animRight.playSegments([2200,2720],true);
            rightcount+=1;
            
            //done
        }else if (rightcount == 6) {
            animRight.playSegments([2720,3085],true);  
            rightcount+=1;
            
            //done
        }else if (rightcount == 7) {
             animRight.playSegments([3085,3320],true);
            rightcount+=1;
            
         //done   
        }else if (rightcount == 8) {
            animRight.playSegments([3320,3575],true);  
            rightcount+=1;
            
            //done
        }else if (rightcount == 9) {
            animRight.playSegments([3575,3830],true);  
            rightcount+=1;
            
            //done
        }else if (rightcount == 10) {
            animRight.playSegments([3830,4060],true);  
            rightcount+=1;
            
            
        }else if (rightcount == 11) {
            animRight.playSegments([4060,4290],true);  
            rightcount+=1;
            
        }else if (rightcount == 12) {
            animRight.playSegments([4290,4520],true);  
            rightcount+=1;
        }

}




    

/*This is the p5.js script that makes the circle follow the mouse*/
function draw() {
    clear();
    noStroke();
    fill(255,0,0);
    ellipse(mouseX,mouseY,30,30);
}

//whenever window is resized you can use this function to control the relative positioning of things
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
