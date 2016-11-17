window.addEventListener( 'DOMContentLoaded', function () {
    // -----------------------------------------------------------
    const holder = document.querySelector( '.wrapper' );
    const draggableDisable = document.querySelector( '#control-disable' );
    const draggableEnable = document.querySelector( '#control-enable' );
    // -----------------------------------------------------------
    const widthGrid = 200;
    const heightGrid = 100;
    // -----------------------------------------------------------
    function snapX( endValue ) {
        return Math.round( endValue / widthGrid ) * widthGrid;
    }
    function snapY( endValue ) {
        return Math.round( endValue / heightGrid ) * heightGrid;
    }
    // enable draggable instance
    function enableDraggable() {
        myDraggable[0].enable(); // draggable create() returning array
        myDraggable[1].enable(); // draggable create() returning array
    }
    // disable draggable instance
    function disableDraggable() {
        myDraggable[0].disable(); // draggable create() returning array
        myDraggable[1].disable(); // draggable create() returning array
    }
    // -----------------------------------------------------------
    const myDraggable = Draggable.create( '.box-draggable', {
        type: 'x, y',
        edgeResistance: 0.65,
        bounds: holder,
        throwProps: true,
        snap: {
            x: snapX,
            y: snapY
        }
    });
    // -----------------------------------------------------------
    draggableDisable.addEventListener( 'click', disableDraggable, false );
    draggableEnable.addEventListener( 'click', enableDraggable, false );
    // -----------------------------------------------------------
}, false);