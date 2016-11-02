// -----------------------------------------------------------
//  MULTIPLE OBJECTS ------------
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
    // USING TWEENLITE
    // ------------------------------------------------------------------
    //TweenLite.to( elementUno, duration, { x: xDistance, autoAlpha: alpha, delay: delayValue } );
    //TweenLite.to( elementDuo, duration, { x: xDistance, autoAlpha: alpha, delay: ( delayValue += 1 ) } );
    //TweenLite.to( elementTre, duration, { x: xDistance, autoAlpha: alpha, delay: ( delayValue += 1 ) } );
    //TweenLite.to( elementQuattro, duration, { x: xDistance, autoAlpha: alpha, delay: ( delayValue += 1 ) } );
    // ------------------------------------------------------------------
    // USING TWEENLINELITE
    // ------------------------------------------------------------------
    tl
        .to( elementUno, duration, { x: xDistance, autoAlpha: alpha, ease: easing } )
        .to( elementDuo, duration, { x: xDistance, autoAlpha: alpha, ease: easing }, '-=1.4' )
        .to( elementTre, duration, { x: xDistance, autoAlpha: alpha, ease: easing } )
        .to( elementQuattro, duration, { x: xDistance, autoAlpha: alpha, ease: easing } );
}, false );
