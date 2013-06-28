//set main namespace
goog.provide('bentlyschemistrylab');

//get requirements
goog.require("lime.Director");
goog.require("lime.Scene");
goog.require("lime.Layer");
goog.require("lime.transitions.Dissolve");
goog.require("lime.audio.Audio");

goog.require('bentlyschemistrylab.GamePlayer');

// entrypoint
bentlyschemistrylab.start = function() {
	var gameObj = {
		width: 480,
		height: 640,
		renderer: lime.Renderer.CANVAS,
		curMode: 1,
		curDifficulty: 1
	};
	
	var director = new lime.Director(document.getElementById("gameContainer"), gameObj.width, gameObj.height);
	
	var titleScene = new lime.Scene();
	var difficultyScene = new lime.Scene();
	var gameScene = new lime.Scene();
	var creditScene = new lime.Scene();
	
	var titleLayer = new lime.Layer().setAnchorPoint(0, 0).setRenderer(gameObj.renderer).setPosition(0, 0);
	var difficultyLayer = new lime.Layer().setAnchorPoint(0, 0).setRenderer(gameObj.renderer).setPosition(0, 0);
	var gameLayer = new lime.Layer().setAnchorPoint(0, 0).setRenderer(gameObj.renderer).setPosition(0, 0);
	var creditLayer = new lime.Layer().setAnchorPoint(0, 0).setRenderer(gameObj.renderer).setPosition(0, 0);
	
	titleScene.appendChild(titleLayer);
	difficultyScene.appendChild(difficultyLayer);
	gameScene.appendChild(gameLayer);
	creditScene.appendChild(creditLayer);
	
	var menuSound = new lime.audio.Audio("asset/sound/MenuSelect.wav");
	
	// Title Screen Objects
	var titleImage = new lime.Sprite()
		.setSize(gameObj.width, gameObj.height)
		.setFill("asset/graphic/screen/TitleScreen.png")
		.setAnchorPoint(0, 0)
		.setPosition(0, 0);
	titleLayer.appendChild(titleImage);
	
	var startButton = new lime.Sprite()
		.setSize(320, 230)
		.setFill("asset/graphic/button/StartButton.png")
		.setAnchorPoint(0, 0)
		.setPosition(75, 330);
	titleLayer.appendChild(startButton);
	goog.events.listen(startButton, ["touchstart", "mousedown"], function(e) {
		menuSound.play();
		director.replaceScene(difficultyScene, lime.transitions.Dissolve, 0.5);
		difficultyLayer.setDirty(255);
	});
	
	// Difficult Select Screen Objects
	var difficultySelectImage = new lime.Sprite()
		.setSize(gameObj.width, gameObj.height)
		.setFill("asset/graphic/screen/DifficultySelectScreen.png")
		.setAnchorPoint(0, 0)
		.setPosition(0, 0);
	difficultyLayer.appendChild(difficultySelectImage);
	
	var easyButton = new lime.Sprite()
		.setSize(320, 70)
		.setFill("asset/graphic/button/EasyButton.png")
		.setAnchorPoint(0, 0)
		.setPosition(80, 250);
	difficultyLayer.appendChild(easyButton);
	goog.events.listen(easyButton, ["touchstart", "mousedown"], function(e) {
		menuSound.play();
		gameObj.curDifficulty = 1;
		gamePlayer.initialize(gameObj);
		director.replaceScene(gameScene, lime.transitions.Dissolve, 0.5);
		gameLayer.setDirty(255);
	});
	
	var mediumButton = new lime.Sprite()
		.setSize(320, 70)
		.setFill("asset/graphic/button/MediumButton.png")
		.setAnchorPoint(0, 0)
		.setPosition(80, 350);
	difficultyLayer.appendChild(mediumButton);
	goog.events.listen(mediumButton, ["touchstart", "mousedown"], function(e) {
		menuSound.play();
		gameObj.curDifficulty = 2;
		gamePlayer.initialize(gameObj);
		director.replaceScene(gameScene, lime.transitions.Dissolve, 0.5);
		gameLayer.setDirty(255);
	});
	
	var hardButton = new lime.Sprite()
		.setSize(320, 70)
		.setFill("asset/graphic/button/HardButton.png")
		.setAnchorPoint(0, 0)
		.setPosition(80, 450);
	difficultyLayer.appendChild(hardButton);
	goog.events.listen(hardButton, ["touchstart", "mousedown"], function(e) {
		menuSound.play();
		gameObj.curDifficulty = 3;
		gamePlayer.initialize(gameObj);
		director.replaceScene(gameScene, lime.transitions.Dissolve, 0.5);
		gameLayer.setDirty(255);
	});
	
	// Game Screen Objects
	var gamePlayer = new bentlyschemistrylab.GamePlayer(gameObj, gameLayer, function() {
		director.replaceScene(creditScene, lime.transitions.Dissolve, 0.5);
		creditLayer.setDirty(255);
	});
	gameLayer.appendChild(gamePlayer);
	
	// Credit Screen Objects
	var creditImage = new lime.Sprite()
		.setSize(gameObj.width, gameObj.height)
		.setFill("asset/graphic/screen/CreditScreen.png")
		.setAnchorPoint(0, 0)
		.setPosition(0, 0);
	creditLayer.appendChild(creditImage);
	
	var continueButton = new lime.Sprite()
		.setSize(320, 70)
		.setFill("asset/graphic/button/ContinueButton.png")
		.setAnchorPoint(0, 0)
		.setPosition(80, 400);
	creditLayer.appendChild(continueButton);
	goog.events.listen(continueButton, ["touchstart", "mousedown"], function(e) {
		menuSound.play();
		director.replaceScene(titleScene, lime.transitions.Dissolve, 0.5);
		titleLayer.setDirty(255);
	});
	
	director.makeMobileWebAppCapable();
	director.replaceScene(titleScene);
}

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('bentlyschemistrylab.start', bentlyschemistrylab.start);