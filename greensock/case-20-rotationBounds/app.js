// --------------------------------------------------------------
window.addEventListener( 'load', function () {
    // ----------------------------------------------------------
    const gear = document.querySelector( '.gear' );
    const gearThumb = document.querySelector( '.gear__thumb' );

    const minAngle = 0;
    const maxAngle = 360;

    function onStart () {
        TweenMax.to( gearThumb, 0.6, {
            width: 36,
            height: 36,
            ease: Linear.easeOut
        });
    }

    function onEnd () {
        TweenMax.to( gearThumb, 0.6, {
            width: 30,
            height: 30,
            ease: Power1.easeOut
        });
    }

    Draggable.create( gear, {
        type: 'rotation',
        bounds: {
            minRotation: minAngle,
            maxRotation: maxAngle
        },
        onDragStart: onStart,
        onDragEnd: onEnd
    });

}, false );
