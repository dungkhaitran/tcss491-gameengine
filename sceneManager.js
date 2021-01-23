class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.score = 0;
        this.coins = 0;
        this.lives = 3;

        this.man = new Man(this.game, 2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);

        this.loadLevelOne(2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);
    };

    loadLevelOne(x,y) {
        this.game.entities = [];
        this.x = 0;

        this.man.x = x;
        this.man.y = this.man.size ? y - PARAMS.BLOCKWIDTH : y;
        this.game.addEntity(this.man);
    };

    update() {
        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;

        if (this.x < this.man.x - midpoint) this.x = this.man.x - midpoint;
    
        if (this.man.dead && this.man.y > PARAMS.BLOCKWIDTH * 16) {
            this.man.dead = false;
            this.loadLevelOne(2.5 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH);
        };
    };

    draw(ctx) {
        ctx.font = PARAMS.BLOCKWIDTH/2 + 'px "Press Start 2P"';
        ctx.fillStyle = "White";
        ctx.fillText("MARRIOTT", 1.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
 
    };
};
