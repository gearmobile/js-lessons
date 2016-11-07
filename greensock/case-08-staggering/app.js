// -----------------------------------------------------------
// STAGGERING -----------------------------------------
// -----------------------------------------------------------
window.addEventListener( 'load', function () {
    // ------------------------------------------------------------------
    const circles = document.querySelectorAll( '.box-item' );
    // ------------------------------------------------------------------
    const tl = new TimelineLite();
    // ------------------------------------------------------------------
    tl
        //.staggerTo( circles, 2, { x: 800, ease: Back.easeOut }, 0.2 )
        //.staggerFrom( circles, 1, { x: 800, ease: Bounce.easeOut }, 0.2 )
        //.staggerFromTo( circles, 1, {
        //    x: 800,
        //    autoAlpha: 0.2,
        //    ease: Expo.easeOut
        //}, {
        //    x: 100,
        //    autoAlpha: 0.8,
        //    ease: Bounce.easeOut
        //}, 0.2 )
        .staggerFrom( circles, 1.4, { cycle: { x: [ 600, 300 ], scale: [ 2, 0.5 ] }, ease: Back.easeOut }, 0.4 );
}, false );
