// -----------------------------------------------------------
//  relative position ( offset ) ------------
//  absolute position ( offset ) ------------
//  label ( add() ) ------------
// -----------------------------------------------------------
window.addEventListener( 'load', function () {
    // ------------------------------------------------------------------
    const elementUno = document.querySelector( '#box-item-one' );
    const elementDuo = document.querySelector( '#box-item-two' );
    const elementTre = document.querySelector( '#box-item-three' );
    const elementQuattro = document.querySelector( '#box-item-four' );
    // ------------------------------------------------------------------
    const duration = 2;
    const xDistance = 800;
    const alpha = 0.3;
    let delayValue = 1;
    const easing = Power4.easeOut;
    // ------------------------------------------------------------------
    const tl = new TimelineLite();
    // ------------------------------------------------------------------
    // USING TWEENLINELITE
    // ------------------------------------------------------------------
    tl
        .to( elementUno, duration, { x: xDistance, autoAlpha: alpha, ease: easing } )
        .add( 'label' )
        .to( elementDuo, duration, { x: xDistance, autoAlpha: alpha, ease: easing }, '+=2' )
        .to( elementTre, duration, { x: xDistance, autoAlpha: alpha, ease: easing }, 3 )
        .to( elementQuattro, duration, { x: xDistance, autoAlpha: alpha, ease: easing }, 'label' );
}, false );
