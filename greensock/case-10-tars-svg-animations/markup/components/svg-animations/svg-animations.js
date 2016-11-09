// ------------------------------------------
const gsap = require( 'gsap' );
// ------------------------------------------
window.addEventListener( 'load', function () {
    // ---------------------------------------------------
    const Timeline = gsap.TimelineLite;
    const Back = gsap.Back;
    const Elastic = gsap.Elastic;
    const Power2 = gsap.Power2;
    const Bounce = gsap.Bounce;
    const tlMain = new Timeline({ paused: true });
    // ---------------------------------------------------
    const btnPlay = document.querySelector( '#button-play' );
    const btnReverse = document.querySelector( '#button-reverse' );
    // ---------------------------------------------------
    const boxHTML = document.querySelector( '.box__html' );
    const boxSVG = document.querySelector( '.box__svg' );
    const boxHTMLDOT = document.querySelector( '.box__html > span' );
    const boxSVGDOT = document.querySelector( '.box__svg > circle' );
    // ---------------------------------------------------
    const duration = 1;
    const duration1 = 2;
    // ---------------------------------------------------
    function animaPlay() {
        tlMain.play();
    }
    // ---------------------------------------------------
    function animaReverse() {
        tlMain.reverse();
    }
    // --------------------------------------------------
    tlMain
        .to( boxHTML, duration, { x: '100%', y: '100%', ease: Back.easeOut } )
        .to( boxSVG, duration, { x: '100%', y: '100%', ease: Back.easeOut } )
        .addPause()
        .to( boxHTML, duration1, { left: '50%', top: '50%', ease: Elastic.easeOut } )
        .to( boxSVG, duration1, { left: '50%', top: '50%', ease: Elastic.easeOut } )
        .addPause()
        .to( boxHTML, duration, { left: '50%', top: '50%', x: '-50%', y: '-50%', ease: Power2.easeOut } )
        .to( boxHTMLDOT, duration, { left: 0, top: 0, backgroundColor: '#dc143c', width: 60, height: 60, ease: Power2.easeOut } )
        .addPause()
        .to( boxSVG, duration, { left: '50%', top: '50%', x: '-50%', y: '-50%', ease: Elastic.easeOut } )
        .to( boxSVGDOT, duration, { attr: { fill: '#f4a460', r: 30 }, ease: Power2.easeOut } )
        .addPause()
        .to( boxHTML, duration, { rotation: 90, transformOrigin: '100% 100%', ease: Bounce.easeOut } )
        .addPause()
        .to( boxSVG, duration, { rotation: 90, transformOrigin: '100% 100%', ease: Bounce.easeOut } )
        .addPause()
        .to( boxHTML, duration, { xPercent: -100, rotation: 0, ease: Bounce.easeOut } )
        .addPause()
        .to( boxSVG, duration, { x: '0%', rotation: 0, ease: Bounce.easeOut } )
        .addPause()
        .to( boxHTMLDOT, duration, { left: '50%', top: '50%', width: 40, height: 40, backgroundColor: '#cd5c5c', ease: Power2.easeOut } )
        .to( boxSVGDOT, duration, { attr: { fill: '#cd5c5c', r: 20 }, ease: Power2.easeOut }, '-=1' )
        .addPause()
        .to( [ boxHTML, boxSVG ], duration, { rotation: 720, transformOrigin: '50% 50%', ease: Power2.easeNone } )
        .addPause()
        .to( boxHTML, duration, { rotationX: -180, transformOrigin: '0% 50%', ease: Power2.easeNone } )
        .to( boxSVG, duration, { rotationY: -180, transformOrigin: '100% 50%', ease: Power2.easeNone } )
        .addPause()
        .to( boxHTML, duration, { rotationX: -360, ease: Power2.easeNone } )
        .to( boxSVG, duration, { rotationY: -360, ease: Power2.easeNone } )
        .addPause()
        .to( boxHTML, duration, { x: '-50%', ease: Power2.easeNone } )
        .to( boxSVG, duration, { x: '-50%', ease: Power2.easeNone }, '-=1' )
        .addPause()
        .to( boxHTML, duration, { rotation: 720, transformOrigin: '50% 50%', ease: Power2.easeNone } )
        .to( boxSVG, duration, { rotation: 720, transformOrigin: '50% 50%', ease: Power2.easeNone }, '-=1' )
        .addPause();
    // ---------------------------------------------------
    btnPlay.addEventListener( 'click', animaPlay, false );
    btnReverse.addEventListener( 'click', animaReverse, false );
    // ---------------------------------------------------
}, false );























