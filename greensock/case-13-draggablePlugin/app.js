
// -----------------------------------------------
window.addEventListener( 'load', function () {
    // ----------------------------------------------------------
    const boxDraggable = document.querySelector( '.box-draggable' );
    const boxItems = document.querySelectorAll( '.box-item' );
    // ----------------------------------------------------------
    // ----------------------------------------------------------
    Draggable.create( boxItems, {
        bounds: boxDraggable,
        edgeResistance: 0.65,
        dragResistance: 0.2,
        cursor: 'pointer',
        type: 'x, y',
        lockAxis: false,
        onPress: onPress,
        onRelease: onRelease,
        onDragStart: onStart,
        onDragEnd: onStop
    });
    // ----------------------------------------------------------
    function onPress() {
        const tlPress = new TimelineMax();
        tlPress.to( this.target, 0.1, {
            borderColor: 'white',
            borderWidth: 6,
            ease: Power4.easeIn
        });
    }
    // ----------------------------------------------------------
    function onRelease() {
        const tlRelease = new TimelineMax();
        tlRelease.to( this.target, 0.1, {
            borderColor: 'green',
            borderWidth: 4,
            ease: Power4.easeOut
        });
    }
    // ----------------------------------------------------------
    function onStart() {
        const tlStart = new TimelineMax();
        tlStart.to( this.target, 0.2, {
            width: 80,
            height: 80,
            fontSize: 20,
            color: 'red',
            ease: Linear.easeIn
        });
    }
    // ----------------------------------------------------------
    function onStop() {
        const tlStop = new TimelineMax();
        tlStop.to( this.target, 0.4, {
            width: 100,
            height: 100,
            color: 'black',
            fontSize: 40,
            ease: Linear.easeOut
        });
    }
}, false );
