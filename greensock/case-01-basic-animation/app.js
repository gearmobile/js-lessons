window.addEventListener( 'load', function () {
    // ----------------------------------------------------------
    const firstElement = document.querySelector( '#box-item-one' );
    // ----------------------------------------------------------
    TweenLite.to( firstElement, 2, {
        x: 300,
        y: -200,
        opacity: 0.01,
        rotation: 360
    });
    // ----------------------------------------------------------
}, false );
