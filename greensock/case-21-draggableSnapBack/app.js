// --------------------------------------------------------------
window.addEventListener( 'load', function () {
    // ----------------------------------------------------------

    const MAX_DISTANCE = 300;
    const draggable = document.querySelector( '#draggable' );

    function fnDragProgress ( e ) {
        let x = this.target._gsTransform.x;
        let y = this.target._gsTransform.y;
        let distance = Math.sqrt( x*x + y*y );

        if ( distance > MAX_DISTANCE ) {
            this.endDrag( e );
        }
    }

    function fnDragEnd ( e ) {
        TweenMax.to( draggable, 1, {
            x: 0,
            y: 0,
            ease: Elastic.easeOut
        });
    }

    Draggable.create( draggable, {
        onDrag: fnDragProgress,
        onDragEnd: fnDragEnd
    });

}, false );
