AFRAME.registerComponent('apple-hit',{
    init: function () {
        var el = this.el;
        var collisionDetected = false;

        el.addEventListener('collisions', function (e) {
            if (e.detail.els.forEach(function(collision) {
                if (collision.classList.contains('apple')) {
                    collisionDetected = true;   
                    el.setAttribute('material', 'color: green')

                }
            }));
        })
    }
    });