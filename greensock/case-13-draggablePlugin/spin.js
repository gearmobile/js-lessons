window.addEventListener( 'load', function () {
    // --------------------------------------------------------
    const knob = document.querySelector( '.knob' );
    const rotationSnap = 90;
    // --------------------------------------------------------
    function snapKnob( endValue ) {
        return Math.round( endValue / rotationSnap ) * rotationSnap;
    }
    // --------------------------------------------------------
    const snip = Draggable.create( knob, {
        type: 'rotation',
        throwProps: true,
        snap: snapKnob
    });
    // --------------------------------------------------------
}, false);
