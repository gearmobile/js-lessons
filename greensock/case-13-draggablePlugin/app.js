window.addEventListener( 'load', function () {
    // ----------------------------------------------------------
    const boxDraggable = document.querySelector( '.box-draggable' );
    const boxItems = document.querySelectorAll( '.box-item' );
    // ----------------------------------------------------------
    Draggable.create( boxItems, {
        bounds: boxDraggable,
        edgeResistance: 0.65,
        dragResistance: 0.2,
        cursor: 'pointer',
        // type: 'x'
        // type: 'y'
    });
    // ----------------------------------------------------------
}, false );
