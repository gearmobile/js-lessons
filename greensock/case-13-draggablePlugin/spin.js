window.addEventListener( 'load', function () {
    // --------------------------------------------------------
    const knob = document.querySelector( '.knob' );
    const rotationSnap = 90;
    // --------------------------------------------------------
    Draggable.create( knob, {
        type: 'rotation',
        throwProps: true,
        cursor: 'pointer',
        snap: function( endValue ) {
            return Math.round( endValue / rotationSnap ) * rotationSnap;
        }
    });
    // --------------------------------------------------------
}, false);
