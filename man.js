class Man {
    constructor(game, x, y, luigi) {
        Object.assign(this, { game, x, y });

        this.game.man = this;

        // spritesheet
        this.spritesheetBG = ASSET_MANAGER.getAsset("./sprites/cartoon-game-background.jpg");
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/man.png");

        this.animation = new Animator(this.spritesheet, 0, 0, 283, 599, 8, 0.1, 20, false, true);

        this.x = 0;
        this.velocity = 200;
    };

    update() {

        const TICK = this.game.clockTick;
        var delta = this.velocity * TICK;
        console.log(delta);
        this.x += delta;

        if (this.x >= PARAMS.CANVAS_WIDTH) {
            this.x = -140;
        }
    };

    draw(ctx) {

        ctx.drawImage(this.spritesheetBG, 0, 0, 1300, 780, 0, 0, 1300, 780);
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, 295, 0.5);
    };
};