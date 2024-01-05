class Baddie {
    constructor({ position }){
        // we start on frame 0
        this.frame = 0;
        // control direction: Right or Left
        this.lastDirection = 'Right';
        // control animation state: idle, walk, attack, die
        this.state = 'idle'; 
        // the timer for the alternative loop
        let timer;
        // screen position to render
        this.position = position;
        // source image URL
        this.imageSrc = './assets/spritesheet_male.png';
        
        /**
         * Not all actions have the same number of frames or the same size, so we need to define it
         * 
         * spriteY: in which row of sprites do the action lives
         * frameRate: the number of frames for that action animation
         * sx: the position on the sprite, since some actions have different sprite dimensions
         */
        this.animations = {
            idleRight: {
                spriteY: 0,
                frameRate: 14,
                sx: 110.5,
            },
            idleLeft: {
                spriteY: 1,
                frameRate: 14,
                sx: 110.5,
            },
            walkRight: {
                spriteY: 2,
                frameRate: 9,
                sx: 110.5,
            },
            walkLeft: {
                spriteY: 3,
                frameRate: 9,
                sx: 110.5,
            },
            attackRight: {
                spriteY: 4,
                frameRate: 7,
                sx: 110.5,
            },
            attackLeft: {
                spriteY: 5,
                frameRate: 7,
                sx: 110.5,
            },
            dieRight: {
                spriteY: 6,
                frameRate: 11,
                sx: 160,
            },
            dieLeft: {
                spriteY: 7,
                frameRate: 11,
                sx: 160,
            },
        };
        
        // load the spritesheep
        this.image = new Image();
        this.image.src = this.imageSrc;
        
    }

    draw(){
        // Do not try to draw if the image is not fully loaded yet
        if(!this.image) return;

        /**
         * Which sprite to render?
         * Source coordinates
         */
        this.sx = this.animations[this.state+''+this.lastDirection].sx * this.frame;
        this.sy = 135 * this.animations[this.state+''+this.lastDirection].spriteY;
        this.sWidth = this.animations[this.state+''+this.lastDirection].sx;
        this.sHeight = 140
        // Destination coordinates
        this.dx = this.position.x;
        this.dy = this.position.y;
        this.dWidth = this.animations[this.state+''+this.lastDirection].sx
        this.dHeight = 140;
        
        // Draw image
        c.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight);
        
    }

    update(){
        this.draw();
    }

    animate(){
        /**
         * Alternative loop, to allow slower of faster animations -> in this case is slower
         * 
         * While there are frames for that particular action sequence, increment 1 unit, 
         * otherwise, reset to 0
         */
        this.timer = setTimeout(()=>{
            if(this.frame < this.animations[this.state+''+this.lastDirection].frameRate) this.frame++;
            else this.frame = 0;

            this.animate();
        }, 100);
    }


    /**
     * To allow the Radio Buttons to control the Direction and Action of the animation
     */
    setDirection(direction){
        this.lastDirection = direction;
    }

    setAction(action){
        this.state = action;
    }
}