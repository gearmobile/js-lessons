
window.addEventListener( 'load', function () {

    // ORIGINAL OBJECT
    // -------------------------------------
    const snapObject = Snap( 1000, 400 );
    const circle = snapObject.circle( 150, 150, 100 );
    const circleOptions = {
        fill: 'rgba( 120, 200, 100, 0.8 )',
        stroke: '#2e8b57',
        strokeWidth: 4
    };
    circle.attr( circleOptions );

}, false );
