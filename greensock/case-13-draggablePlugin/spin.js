window.addEventListener( 'load', function () {
    // --------------------------------------------------------
    const knob = document.querySelector( '.knob' );
    const knobRotation = document.querySelector( '.knob-rotation' );
    const rotationSnap = 90;
    // --------------------------------------------------------
    function snapKnob( endValue ) {
        return Math.round( endValue / rotationSnap ) * rotationSnap;
    }
    function getRotationValue() {
        knobRotation.innerHTML = Math.floor( this.endRotation );
    }
    // --------------------------------------------------------
    const snip = Draggable.create( knob, {
        type: 'rotation',
        throwProps: true,
        snap: snapKnob,
        onDrag: getRotationValue
    });
    // --------------------------------------------------------
}, false);
