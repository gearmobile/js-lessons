// -----------------------------------------------------------
// EASING, EASEPACK, CUSTOM EASINGS VIA GENERATOR ------------
// -----------------------------------------------------------
window.addEventListener( 'load', function () {
    // ----------------------------------------------------------
    const elementUno = document.querySelector( '#box-item-one' );
    // ----------------------------------------------------------
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: Power0.easeNone } );
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: Power1.easeNone } );
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: Power2.easeNone } );
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: Power3.easeNone } );
    // ------------------------------------------------------------
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: Power3.easeIn } );
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: Power3.easeOut } );
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: Power3.easeInOut } );
    // ------------------------------------------------------------
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: Back.easeOut } );
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: Bounce.easeOut } );
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: Circ.easeOut } );
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: Elastic.easeOut } );
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: Expo.easeOut } );
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: Sine.easeOut } );
    // ------------------------------------------------------------
    // https://greensock.com/docs/#/HTML5/Easing/RoughEase/
    //TweenLite.to( elementUno, 1, { x: 300, delay: 2, ease: RoughEase.ease } );
    // ------------------------------------------------------------
    // https://greensock.com/docs/#/HTML5/Easing/SlowMo/
    //TweenLite.to( elementUno, 1, { x: 800, delay: 2, ease: SlowMo.ease.config(0.7, 0.7, false) } );
    // ------------------------------------------------------------
    // https://greensock.com/docs/#/HTML5/Easing/SteppedEase/
    TweenLite.to( elementUno, 1, { x: 800, delay: 2, ease: SteppedEase.config(12) } );
}, false );
