var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/man.png");
ASSET_MANAGER.queueDownload("./sprites/cartoon-game-background.jpg");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
	PARAMS.CANVAS_WIDTH = canvas.width;

	var gameEngine = new GameEngine();
	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});
