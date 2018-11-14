var w = window.innerWidth;
var h = window.innerHeight;
var button01
var button02
var button03
var button04
var button05
var button06
var button07
var button08
var button09
var animline07;
var lineparams07;
var instructionsWindow;
var instructionsButton;
var close07;
//you need to create a boolean trap so that when you click on a number it is not able to call the press again and again
//will need to do this for each stanza
var stanza01active;
var stanza02active;
var stanza03active;
var stanza04active;
var stanza05active;
var stanza06active;
var stanza07active;
var stanza08active;

var stanza01p2active;
var stanza02p2active;
var stanza03p2active;
var stanza04p2active;
var stanza05p2active;
var stanza06p2active;
var stanza07p2active;
var stanza08p2active;


function setup() {
    
    //its not on screen so make it false
    //no take a look at the function where the stanza appears
    stanza01active = false;
    stanza02active = false;
    stanza03active = false;
    stanza04active = false;
    stanza05active = false;
    stanza06active = false;
    stanza07active = false;
    stanza08active = false;
    
    stanza01p2active = false;
    stanza02p2active = false;
    stanza03p2active = false;
    stanza04p2active = false;
    stanza05p2active = false;
    stanza06p2active = false;
    stanza07p2active = false;
    stanza08p2active = false;
    
    
    canvas = createCanvas(w,h);
    canvas.parent('p5-container');
    console.log("it's alive!");
    
    //parent for container 
    
    instructionsWindow = createDiv("");
    instructionsWindow.id('instructions-window');
    instructionsWindow.position(w/2-instructionsWindow.width/2, h/2-instructionsWindow.height/2);
    
    instructionsButton = createButton("");
    instructionsButton.class('instructions-button');
    instructionsButton.position(770,0);
    instructionsButton.mousePressed(instructionsclose);
    instructionsButton.parent('instructions-window');
    
    
     //display button

    button01 = createButton("01");
    button01.class('button01');
    button01.mousePressed(stanza01);
  
    button02 = createButton("02");
    button02.class('button02');
    button02.mousePressed(stanza02);
    
    button03 = createButton("03");
    button03.class('button03');
    button03.mousePressed(stanza03);
    
    button04 = createButton("04");
    button04.class('button04');
    button04.mousePressed(stanza04);
    
    button05 = createButton("05");
    button05.class('button05');
    button05.mousePressed(stanza05);
    
    button06 = createButton("06");
    button06.class('button06');
    button06.mousePressed(stanza06);
    
    
    button07 = createButton("07");
    button07.class('button07');
    button07.mousePressed(stanza07);

    button08 = createButton("08");
    button08.class('button08');
    button08.mousePressed(stanza08);
}

function instructionsclose(){
    console.log("going to next screen");
    instructionsWindow.remove();
    
}

function stanza01(){
    //this will stop it from being able to call this function with multiple presses
    if (stanza01active == false) {
        //set it to true so this code cant run again till we make it false
        //when we close the window/lines we make it false again
        stanza01active = true;    
    
        lines01div = createDiv("");
        lines01div.id('alllines');
    
        openbutton = createButton("");
        openbutton.class('popupbuttonopen01');
        openbutton.parent('alllines');
        openbutton.mousePressed(popup01);
    

        var stanza01params = {
            container: document.getElementById('alllines'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path:'stanzalines.json',  
        };

        var animstanza01;
        anim = lottie.loadAnimation(stanza01params);
        anim.addEventListener("DOMLoaded", function() {
        anim.playSegments([0,210], true);})
            
//        anim.playSegments([[0,220],[500,600]], true);})
        
        
     
        
    //lines animation
    }
}

function popup01(){
    
     if (stanza01p2active == false) {
        stanza01p2active = true;  
    
    popup01Windowdiv = createDiv("");
    popup01Windowdiv.id('popup01Window');
    
    close01= createButton("");
    close01.class('popupbuttonclose01');
    close01.parent('popup01Window');
    close01.mousePressed(popup01close);
                           
          var params = {
    container: document.getElementById('popup01Window'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:'popupstanza01.json'        
    };

    var anim;

    anim = lottie.loadAnimation(params);
      //popup animation   
     }
    
 }

function popup01close(){
                           
    popup01Window.remove();
    alllines.remove();
    //make it false again we have closed it
    stanza01active = false;
      //popup animation
    stanza01p2active = false;
}




function stanza02(){
    
    if (stanza02active == false) {
    stanza02active = true;    
    
    lines02div = createDiv("");
    lines02div.id('alllines');
    
    openbutton = createButton("");
    openbutton.class('popupbuttonopen02');
    openbutton.parent('alllines');
    openbutton.mousePressed(popup02);
    

     var stanza02params = {
        container: document.getElementById('alllines'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path:'stanzalines.json'    
    };

    var animstanza02;
    anim = lottie.loadAnimation(stanza02params);
    anim.addEventListener("DOMLoaded", function() {
    anim.playSegments([350,567],true);})
    //lines animation
    }
    
}

function popup02(){
    
     if (stanza02p2active == false) {
        stanza02p2active = true;  
    
    
    popup02Windowdiv = createDiv("");
    popup02Windowdiv.id('popup02Window');
    
    close02= createButton("");
    close02.class('popupbuttonclose02');
    close02.parent('popup02Window');
    close02.mousePressed(popup02close);
                           
          var params = {
    container: document.getElementById('popup02Window'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:'popupstanza02.json'        
    };

    var anim;

    anim = lottie.loadAnimation(params);
      //popup animation  
     }
}

function popup02close(){
                           
    popup02Window.remove();
    alllines.remove();
      //popup animation
    stanza02active = false;
    
    stanza02p2active = false;
}






function stanza03(){
    
    if (stanza03active == false) {
    stanza03active = true;    
    
    lines03div = createDiv("");
    lines03div.id('alllines');
    
    open = createButton("");
    open.class('popupbuttonopen03');
    open.parent('alllines');
    open.mousePressed(popup03);
    

     var stanza03params = {
        container: document.getElementById('alllines'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path:'stanzalines.json'    
    };

    var animstanza03;
    anim = lottie.loadAnimation(stanza03params);
    anim.addEventListener("DOMLoaded", function() {
    anim.playSegments([640,860],true);})
    //lines animation
    }
}

function popup03(){
    
     if (stanza03p2active == false) {
        stanza03p2active = true;  
    
    
    popup03Windowdiv = createDiv("");
    popup03Windowdiv.id('popup03Window');
    
    close03= createButton("");
    close03.class('popupbuttonclose03');
    close03.parent('popup03Window');
    close03.mousePressed(popup03close);
                           
          var params = {
    container: document.getElementById('popup03Window'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:'stanza03popup.json'        
    };

    var anim;

    anim = lottie.loadAnimation(params);
      //popup animation  
     }
}

function popup03close(){
                           
    popup03Window.remove();
    alllines.remove();
      //popup animation
    stanza03active = false;
    stanza03p2active = false;
    }




function stanza04(){
    
    if (stanza04active == false) {
    stanza04active = true;    
    
    lines04div = createDiv("");
    lines04div.id('alllines');
    
    open = createButton("");
    open.class('popupbuttonopen04');
    open.parent('alllines');
    open.mousePressed(popup04);
    

     var stanza04params = {
        container: document.getElementById('alllines'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path:'stanzalines.json'    
    };

    var animstanza04;
    anim = lottie.loadAnimation(stanza04params);
    anim.addEventListener("DOMLoaded", function() {
    anim.playSegments([930,1150],true);})
    //lines animation
    }
    
}

function popup04(){
    
     if (stanza04p2active == false) {
        stanza04p2active = true;  
    
    
    popup04Windowdiv = createDiv("");
    popup04Windowdiv.id('popup04Window');
    
    close04= createButton("");
    close04.class('popupbuttonclose04');
    close04.parent('popup04Window');
    close04.mousePressed(popup04close);
                           
          var params = {
    container: document.getElementById('popup04Window'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:'popupstanza04.json'        
    };

    var anim;

    anim = lottie.loadAnimation(params);
      //popup animation   
     }
}

function popup04close(){
                           
    popup04Window.remove();
    alllines.remove();
      //popup animation
    stanza04active = false;
    stanza04p2active = false;
}




function stanza05(){
    
    if (stanza05active == false) {
    stanza05active = true;    
    
    lines05div = createDiv("");
    lines05div.id('alllines');
    
    open05 = createButton("");
    open05.class('popupbuttonopen05');
    open05.parent('alllines');
    open05.mousePressed(popup05);
    

     var stanza05params = {
        container: document.getElementById('alllines'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path:'stanzalines.json'    
    };

    var animstanza05;
    anim = lottie.loadAnimation(stanza05params);
    anim.addEventListener("DOMLoaded", function() {
    anim.playSegments([1250,1455],true);})
    //lines animation
    }
    
}

function popup05(){
    
     if (stanza05p2active == false) {
        stanza05p2active = true;  
    
    
    popup05Windowdiv = createDiv("");
    popup05Windowdiv.id('popup05Window');
    
    close05= createButton("");
    close05.class('popupbuttonclose05');
    close05.parent('popup05Window');
    close05.mousePressed(popup05close);
                           
          var params = {
    container: document.getElementById('popup05Window'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:'popupstanza05.json'        
    };

    var anim;

    anim = lottie.loadAnimation(params);
      //popup animation   
     }
}

function popup05close(){
                           
    popup05Window.remove();
   alllines.remove();
      //popup animation
    stanza05active = false;
    stanza05p2active = false;
}







function stanza06(){
    
    if (stanza06active == false) {
    stanza06active = true;    
    
    lines06div = createDiv("");
    lines06div.id('alllines');
    
    open = createButton("");
    open.class('popupbuttonopen06');
    open.parent('alllines');
    open.mousePressed(popup06);
    

     var stanza06params = {
        container: document.getElementById('alllines'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path:'stanzalines.json'    
    };

    var animstanza06;
    anim = lottie.loadAnimation(stanza06params);
    anim.addEventListener("DOMLoaded", function() {
    anim.playSegments([1530,1760],true);})
    //lines animation
    }
}

function popup06(){
    
     if (stanza06p2active == false) {
        stanza06p2active = true;  
    
    
    popup06Windowdiv = createDiv("");
    popup06Windowdiv.id('popup06Window');
    
    close06= createButton("");
    close06.class('popupbuttonclose06');
    close06.parent('popup06Window');
    close06.mousePressed(popup06close);
                           
          var params = {
    container: document.getElementById('popup06Window'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:'popupstanza06.json'        
    };

    var anim;

    anim = lottie.loadAnimation(params);
      //popup animation  
     }
}

function popup06close(){
                           
    popup06Window.remove();
   alllines.remove();
      //popup animation
     stanza06active = false;
    stanza06p2active = false;
}







function stanza07(){
    
    if (stanza07active == false) {
    stanza07active = true;    
    
    lines07div = createDiv("");
    lines07div.id('alllines');
    
    button09 = createButton("");
    button09.class('popupbuttonopen07');
    button09.parent('alllines');
    button09.mousePressed(popup07);
    

     var stanza07params = {
        container: document.getElementById('alllines'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path:'stanzalines.json'    
    };

    var animstanza07;
    anim = lottie.loadAnimation(stanza07params);
    anim.addEventListener("DOMLoaded", function() {
    anim.playSegments([1850,2055],true);})
    //lines animation
    }
}

function popup07(){
    
     if (stanza07p2active == false) {
        stanza07p2active = true;  
    
    
    popup07Windowdiv = createDiv("");
    popup07Windowdiv.id('popup07Window');
    
    close07= createButton("");
    close07.class('popupbuttonclose07');
    close07.parent('popup07Window');
    close07.mousePressed(popup07close);
                           
          var params = {
    container: document.getElementById('popup07Window'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:'stanza07popup.json'        
    };

    var anim;

    anim = lottie.loadAnimation(params);
      //popup animation   
}

function popup07close(){
                           
    popup07Window.remove();
    alllines.remove();
      //popup animation
     stanza07active = false;
    stanza07p2active = false;
    }
}




function stanza08(){
    
    if (stanza08active == false) {
    stanza08active = true;    
    
    lines08div = createDiv("");
    lines08div.id('alllines');
    
    open = createButton("");
    open.class('popupbuttonopen08');
    open.parent('alllines');
    open.mousePressed(popup08);
    

     var stanza08params = {
        container: document.getElementById('alllines'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path:'stanzalines.json'    
    };

    var animstanza08;
    anim = lottie.loadAnimation(stanza08params);
    anim.addEventListener("DOMLoaded", function() {
    anim.playSegments([2150,2355],true);})
    //lines animation
    }
}

function popup08(){
    
     if (stanza08p2active == false) {
        stanza08p2active = true;  
    
    
    popup08Windowdiv = createDiv("");
    popup08Windowdiv.id('popup08Window');
    
    close08= createButton("");
    close08.class('popupbuttonclose08');
    close08.parent('popup08Window');
    close08.mousePressed(popup08close);
                           
          var params = {
    container: document.getElementById('popup08Window'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:'popupstanza8.json'        
    };

    var anim;

    anim = lottie.loadAnimation(params);
      //popup animation   
     }
}

function popup08close(){
                           
    popup08Window.remove();
   alllines.remove();
      //popup animation
     stanza08active = false;
    stanza08p2active = false;
}









function draw() {
  clear();
fill(255, 255, 0);
noStroke();
  ellipse(mouseX,mouseY,30,30);
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


