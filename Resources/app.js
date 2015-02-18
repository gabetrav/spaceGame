//var
var mainWindow = Ti.UI.createWindow({
	backgroundColor: 'white',
	fullscreen: true
});
var gameWindow = Ti.UI.createWindow({
	backgroundColor: 'white',
});
var playButton = Ti.UI.createView({
  backgroundColor : 'red',
  height : '100',
  width : '100',
  borderRadius: 50,
  zIndex: 0,
});

var optionsButton = Ti.UI.createView({
            width: 80,
            height: 80,
            bottom: 40,
            right: 20,
            borderRadius: 40,
            backgroundColor: 'green',
            zIndex: 0,
});
var creditsButton = Ti.UI.createView({
            width: 60,
            height: 60,
            bottom: 60,
            left: 30,
            borderRadius: 30,
            backgroundColor: 'blue',
            zIndex: 0,
            
});

var appTitle = Ti.UI.createLabel ({
	text: "Space Game",
	font: { fontSize:45 },
	top: 40,
	color: 'black',
	zIndex: 0
});

var planets = [];
var planetWidth = 320;
var planetHeight = 568;

var gravityX;
var gravityY;
var gravityZ;

//dynamic gravity
var accelerometerCallback = function(e) {
  gravityX = e.x;
  gravityY = e.y;
  gravityZ = e.z;
  gravity.gravityDirection = {
        x: (gravityX),
        y: (-1 * gravityY),
        z: (gravityZ)
    };
};
Ti.Accelerometer.addEventListener('update', accelerometerCallback);


//animation
var matrix = Ti.UI.create2DMatrix();
//matrix = matrix.rotate(180);
  matrix = matrix.scale(20, 20);

var matrix2 = Ti.UI.create2DMatrix();
    matrix2 = matrix2.scale(.8, .8);

var a = Ti.UI.createAnimation({
    transform : matrix,
    duration : 1000,
    //autoreverse : true,
    //repeat : 3
});

var b = Ti.UI.createAnimation({
    transform : matrix2,
    duration : 200,
});

var animator = Ti.UI.iOS.createAnimator({referenceView: mainWindow});

var collision = Ti.UI.iOS.createCollisionBehavior();

var gravity = Ti.UI.iOS.createGravityBehavior({
    gravityDirection: {x: 0.0, y: 1.0}
});

animator.addBehavior(collision);
animator.addBehavior(gravity);

collision.addItem(playButton);
collision.addItem(optionsButton);
collision.addItem(appTitle);
collision.addItem(creditsButton);

gravity.addItem(playButton);
gravity.addItem(optionsButton);
gravity.addItem(appTitle);
gravity.addItem(creditsButton);



//includes
Ti.include('eventListeners.js');

//.adds
mainWindow.add(optionsButton);
mainWindow.add(playButton);
mainWindow.add(appTitle);
mainWindow.add(creditsButton);



mainWindow.open();