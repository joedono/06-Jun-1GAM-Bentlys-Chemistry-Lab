goog.provide('bentlyschemistrylab.GamePlayer');
goog.require("lime.Sprite");
goog.require("lime.Label");
goog.require("lime.RoundedRect");
goog.require("lime.fill.Frame");
goog.require("lime.audio.Audio");

var objMap = {
	easy : [
		{answer: "Hydrogen", x: 0, y: 0, width: 128, height: 128}, 
		{answer: "Helium", x: 128, y: 0, width: 128, height: 128}, 
		{answer: "Boron", x: 256, y: 0, width: 128, height: 128}, 
		{answer: "Carbon", x: 384, y: 0, width: 128, height: 128}, 
		{answer: "Nitrogen", x: 512, y: 0, width: 128, height: 128}, 
		{answer: "Oxygen", x: 640, y: 0, width: 128, height: 128}, 
		{answer: "Fluorine", x: 768, y: 0, width: 128, height: 128}, 
		{answer: "Neon", x: 896, y: 0, width: 128, height: 128}, 
		{answer: "Sodium", x: 1024, y: 0, width: 128, height: 128}, 
		{answer: "Magnesium", x: 1152, y: 0, width: 128, height: 128}, 
		{answer: "Aluminium", x: 1280, y: 0, width: 128, height: 128}, 
		{answer: "Silicon", x: 1408, y: 0, width: 128, height: 128}, 
		{answer: "Phosphorus", x: 1536, y: 0, width: 128, height: 128}, 
		{answer: "Sulfur", x: 1664, y: 0, width: 128, height: 128}, 
		{answer: "Chlorine", x: 1792, y: 0, width: 128, height: 128}, 
		{answer: "Calcium", x: 0, y: 128, width: 128, height: 128}, 
		{answer: "Titanium", x: 128, y: 128, width: 128, height: 128}, 
		{answer: "Vanadium", x: 256, y: 128, width: 128, height: 128}, 
		{answer: "Cobalt", x: 384, y: 128, width: 128, height: 128}, 
		{answer: "Nickel", x: 512, y: 128, width: 128, height: 128}, 
		{answer: "Copper", x: 640, y: 128, width: 128, height: 128}, 
		{answer: "Zinc", x: 768, y: 128, width: 128, height: 128}, 
		{answer: "Krypton", x: 896, y: 128, width: 128, height: 128}, 
		{answer: "Iodine", x: 1024, y: 128, width: 128, height: 128}, 
		{answer: "Xenon", x: 1152, y: 128, width: 128, height: 128}, 
		{answer: "Platinum", x: 1280, y: 128, width: 128, height: 128}, 
		{answer: "Radon", x: 1408, y: 128, width: 128, height: 128}, 
		{answer: "Francium", x: 1536, y: 128, width: 128, height: 128}, 
		{answer: "Radium", x: 1664, y: 128, width: 128, height: 128} 

	],
	medium: [
		{answer: "Lithium", x: 0, y: 256, width: 128, height: 128},
		{answer: "Beryllium", x: 128, y: 256, width: 128, height: 128},
		{answer: "Potassium", x: 256, y: 256, width: 128, height: 128},
		{answer: "Argon", x: 384, y: 256, width: 128, height: 128},
		{answer: "Scandium", x: 512, y: 256, width: 128, height: 128},
		{answer: "Iron", x: 640, y: 256, width: 128, height: 128},
		{answer: "Chromium", x: 768, y: 256, width: 128, height: 128},
		{answer: "Manganese", x: 896, y: 256, width: 128, height: 128},
		{answer: "Gallium", x: 1024, y: 256, width: 128, height: 128},
		{answer: "Germanium", x: 1152, y: 256, width: 128, height: 128},
		{answer: "Arsenic", x: 1280, y: 256, width: 128, height: 128},
		{answer: "Selenium", x: 1408, y: 256, width: 128, height: 128},
		{answer: "Bromine", x: 1536, y: 256, width: 128, height: 128},
		{answer: "Rubidium", x: 1664, y: 256, width: 128, height: 128},
		{answer: "Strontium", x: 1792, y: 256, width: 128, height: 128},
		{answer: "Yttrium", x: 0, y: 384, width: 128, height: 128},
		{answer: "Silver", x: 128, y: 384, width: 128, height: 128},
		{answer: "Tin", x: 256, y: 384, width: 128, height: 128},
		{answer: "Zirconium", x: 384, y: 384, width: 128, height: 128},
		{answer: "Ruthenium", x: 512, y: 384, width: 128, height: 128},
		{answer: "Barium", x: 640, y: 384, width: 128, height: 128},
		{answer: "Tungsten", x: 768, y: 384, width: 128, height: 128},
		{answer: "Gold", x: 896, y: 384, width: 128, height: 128},
		{answer: "Mercury", x: 1024, y: 384, width: 128, height: 128},
		{answer: "Lead", x: 1152, y: 384, width: 128, height: 128},
		{answer: "Bismuth", x: 1280, y: 384, width: 128, height: 128},
		{answer: "Polonium", x: 1408, y: 384, width: 128, height: 128}
	],
	hard: [
		{answer: "Niobium", x: 0, y: 512, width: 128, height: 128},
		{answer: "Molybdenum", x: 128, y: 512, width: 128, height: 128},
		{answer: "Technetium", x: 256, y: 512, width: 128, height: 128},
		{answer: "Rhodium", x: 384, y: 512, width: 128, height: 128},
		{answer: "Palladium", x: 512, y: 512, width: 128, height: 128},
		{answer: "Cadmium", x: 640, y: 512, width: 128, height: 128},
		{answer: "Indium", x: 768, y: 512, width: 128, height: 128},
		{answer: "Antimony", x: 896, y: 512, width: 128, height: 128},
		{answer: "Tellurium", x: 1024, y: 512, width: 128, height: 128},
		{answer: "Caesium", x: 1152, y: 512, width: 128, height: 128},
		{answer: "Lanthanum", x: 1280, y: 512, width: 128, height: 128},
		{answer: "Cerium", x: 1408, y: 512, width: 128, height: 128},
		{answer: "Praseodymium", x: 1536, y: 512, width: 128, height: 128},
		{answer: "Neodymium", x: 1664, y: 512, width: 128, height: 128},
		{answer: "Promethium", x: 1792, y: 512, width: 128, height: 128},
		{answer: "Samarium", x: 0, y: 640, width: 128, height: 128},
		{answer: "Europium", x: 128, y: 640, width: 128, height: 128},
		{answer: "Gadolinium", x: 256, y: 640, width: 128, height: 128},
		{answer: "Terbium", x: 384, y: 640, width: 128, height: 128},
		{answer: "Dysprosium", x: 512, y: 640, width: 128, height: 128},
		{answer: "Holmium", x: 640, y: 640, width: 128, height: 128},
		{answer: "Erbium", x: 768, y: 640, width: 128, height: 128},
		{answer: "Thulium", x: 896, y: 640, width: 128, height: 128},
		{answer: "Ytterbium", x: 1024, y: 640, width: 128, height: 128},
		{answer: "Lutetium", x: 1152, y: 640, width: 128, height: 128},
		{answer: "Hafnium", x: 1280, y: 640, width: 128, height: 128},
		{answer: "Tantalum", x: 1408, y: 640, width: 128, height: 128}
	],
	imageFile: "asset/graphic/game/Chemistry.png"
};

var maxTimer = 10000;

bentlyschemistrylab.GamePlayer = function(gameObj, gameLayer, gameOverCallback) {
	goog.base(this);
	
	this.gameObj = gameObj;
	this.gameLayer = gameLayer;
	this.gameOverCallback = gameOverCallback;
	this.setPosition(0, 0);
	this.setAnchorPoint(0, 0);
	this.setSize(gameObj.width, gameObj.height);
	this.setFill("asset/graphic/screen/GameScreen.png");
	this.curTime = 0;
	this.timeIncrement = 5000;
	this.active = false;
	
	this.correctSound = new lime.audio.Audio("asset/sound/RightAnswer.wav");
	this.wrongSound = new lime.audio.Audio("asset/sound/WrongAnswer.wav");
	
	this.correctAnswer = new lime.Sprite().setAnchorPoint(0.5, 0.5);
	this.otherAnswer1 = new lime.Sprite().setAnchorPoint(0.5, 0.5);
	this.otherAnswer2 = new lime.Sprite().setAnchorPoint(0.5, 0.5);
	
	this.answerLabel = new lime.Label()
		.setAnchorPoint(0.5, 0.5)
		.setFontColor("#0000FF")
		.setFontSize(58);
	
	this.timeBar = new lime.RoundedRect()
		.setAnchorPoint(0, 0)
		.setRadius(0)
		.setPosition(0, 508)
		.setSize(gameObj.width, 5)
		.setFill("#00FF00");
		
	goog.events.listen(this.correctAnswer, ["touchstart", "mousedown"], function(e) {
		this.getParent().correctSound.play();
		this.getParent().increaseTimer();
		this.getParent().nextQuestion();
	});
	
	goog.events.listen(this.otherAnswer1, ["touchstart", "mousedown"], function(e) {
		this.getParent().wrongSound.play();
		this.getParent().decreaseTimer();
		this.getParent().nextQuestion();
	});
	
	goog.events.listen(this.otherAnswer2, ["touchstart", "mousedown"], function(e) {
		this.getParent().wrongSound.play();
		this.getParent().decreaseTimer();
		this.getParent().nextQuestion();
	});
	
	this.appendChild(this.correctAnswer);
	this.appendChild(this.otherAnswer1);
	this.appendChild(this.otherAnswer2);
	this.appendChild(this.answerLabel);
	this.appendChild(this.timeBar);
	
	this.initialize(gameObj);
	
	lime.scheduleManager.schedule(function(dt) {
		this.update(dt);
	}, this);
	
	this.nextQuestion();
};

goog.inherits(bentlyschemistrylab.GamePlayer, lime.Sprite);

bentlyschemistrylab.GamePlayer.prototype.initialize = function(gameObj) {
	this.curDifficulty = gameObj.curDifficulty;
	this.curTime = maxTimer;
	this.active = true;
};

bentlyschemistrylab.GamePlayer.prototype.nextQuestion = function() {
	var choices = objMap;
	var imageFile = choices.imageFile;
	
	switch(this.curDifficulty){
		case 1:
			choices = choices.easy;
			break;
		case 2:
			choices = choices.medium;
			break;
		case 3:
			choices = choices.hard;
			break;
	}
	
	var numChoices = choices.length;
	var cBtn = choices[Math.floor(Math.random() * numChoices)];
	var iBtn1 = choices[Math.floor(Math.random() * numChoices)];
	var iBtn2 = choices[Math.floor(Math.random() * numChoices)];
	
	var cFrame = new lime.fill.Frame(imageFile, cBtn.x, cBtn.y, cBtn.width, cBtn.height);
	var iFrame1 = new lime.fill.Frame(imageFile, iBtn1.x, iBtn1.y, iBtn1.width, iBtn1.height);
	var iFrame2 = new lime.fill.Frame(imageFile, iBtn2.x, iBtn2.y, iBtn2.width, iBtn2.height);
	
	this.answerLabel.setText(cBtn.answer).setPosition(this.gameObj.width / 2, 585);
	
	var pos = [
		{x: 240, y: 120},
		{x: 100, y: 350},
		{x: 380, y: 350},
		{x: 240, y: 120},
		{x: 100, y: 350}
	];
	var startPos = Math.floor(Math.random() * 3);
	
	this.correctAnswer
		.setSize(cBtn.width, cBtn.height)
		.setFill(cFrame).setPosition(pos[startPos].x, pos[startPos].y);
	
	this.otherAnswer1
		.setSize(iBtn1.width, iBtn1.height)
		.setFill(iFrame1).setPosition(pos[startPos + 1].x, pos[startPos + 1].y);
	
	this.otherAnswer2
		.setSize(iBtn2.width, iBtn2.height)
		.setFill(iFrame2).setPosition(pos[startPos + 2].x, pos[startPos + 2].y);
};

bentlyschemistrylab.GamePlayer.prototype.update = function(dt) {
	if(this.active) {
		if(this.curTime > 0) {
			this.curTime -= dt;
			this.timeBar.setSize((this.curTime / maxTimer) * this.gameObj.width, 5);
		} else {
			this.active = false;
			this.gameOverCallback();
		}
	}
};

bentlyschemistrylab.GamePlayer.prototype.increaseTimer = function() {
	this.curTime += this.timeIncrement;
	
	if(this.curTime > maxTimer) {
		this.curTime = maxTimer;
	}
};

bentlyschemistrylab.GamePlayer.prototype.decreaseTimer = function() {
	this.curTime -= 10;
	if(this.timeIncrement > 250) {
		this.timeIncrement -= 50;
	}
};