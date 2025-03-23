AFRAME.registerComponent('box-hit', {
    schema: { collisionsDetected: { type: 'int', default: 0 } },
    init: function () {
        var el = this.el;

        // Arrow function to preserve the context of 'this'
        el.addEventListener('collisions', (e) => {
            // Flag for checking if this is a new collision
            var newCollision = true;

            // Iterate over all the elements involved in the collision
            e.detail.els.forEach((collision) => {
                if (collision.classList.contains('floor') && newCollision) {
                    newCollision = false; // Mark that the collision has been handled
                    console.log("data schema", this.data);
                    this.data.collisionsDetected += 1; // Increment the collision count
                }
            });
        });
    }
});
