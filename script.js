// Reference to `canvas` tag and set proper 2D context
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


canvas.width = 800;
canvas.height = 600;

/***
 * Create one character, and place him in the position X,Y (100,200)
 */
let zombie = new Baddie({
    position: {
        x: 100,
        y: 200,
    }
});

/**
 * For a slower animation, we need to create an alternative loop
 */
zombie.animate();


/**
 * The Game Loop
 * This animate function will be triggered continuously,
 * with the most common refresh rate of 60hz, (60 cycles/frames per second).
 */
function animate(){
    //The window.requestAnimationFrame() method tells the browser you wish to perform an animation
    window.requestAnimationFrame(animate);

    // Per each refresh cycle, we will "clean" the entire canvas, painting it with white.
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    //Time to update and redraw everything again
    
    zombie.update()
}

animate();