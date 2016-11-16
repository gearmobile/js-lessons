window.addEventListener( 'load', function () {
    // ----------------------------------------------------------
    const plane = document.querySelector( '#plane' );
    // ----------------------------------------------------------
    TweenMax.to( plane, 6, {
        bezier: {
            values: [
                { left: 300, top: 25 },
                { left: 550, top: 300 },
                { left: 300, top: 550 },
                { left: 25,  top: 300 },
                { left: 300, top: 25 }
            ],
            autoRotate: 45,
            type: 'thru',
            curviness: 1.4
        },
        ease: Linear.easeNone
    });
}, false );
