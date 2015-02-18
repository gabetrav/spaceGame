playButton.addEventListener('touchend', function() {
  playButton.animate(a);
  //gameWindow.open();
  playButton.animate({zIndex: 1});

}); 

playButton.addEventListener('touchstart', function() {
  playButton.animate(b);

});


optionsButton.addEventListener('touchend', function() {
  optionsButton.animate(a);
  optionsButton.animate({zIndex: 1});


}); 

optionsButton.addEventListener('touchstart', function() {
  optionsButton.animate(b);

});
Ti.Gesture.addEventListener('shake', function(e){
    animator.startAnimator();
});
gameWindow.addEventListener('open', function(e){
	for (var i = 0; i < 20; i++) {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    var rgb = 'rgb(' + r +"," + g + "," + b + ")";

    planets[i] = Ti.UI.createView({
        width: 25,
        height: 25,
        borderRadius: 12.5,
        top: Math.round(Math.random() * (planetHeight - 25) + 25),
        left: Math.round(Math.random() * (planetWidth - 25) + 25),
        backgroundColor: rgb
    	});
    	gameWindow.add(planets[i]);
    	collision.addItem(planets[i]);
	}
});