
window.addEventListener( 'load', function () {
    const snapObject = Snap( 600, 400 );

    // circle object
    // -----------------------------
    const circle = snapObject.circle( 100, 100, 50 );

    // rectangle object
    // -----------------------------
    const rect = snapObject.rect( 200, 50, 100, 100 );
}, false );
