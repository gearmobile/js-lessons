// ----------------------------------------
const $ = require( 'sizzle' );
const gsap = require( 'gsap' );
const Timeline = gsap.TimelineMax;
let Back = gsap.Back;
// const TimelineLite = gsap.TimelineLite;
// const tweenLite = gsap.TweenLite;
// const tweenMax = gsap.TweenMax;
// const draggable = gsap.Draggable;
// const cssPlugin = gsap.CSSPlugin;
// ----------------------------------------
const circlesHolder = $( '.box' );
const circles = $( '.box-item' );
const boxWelcome = $( '.box-welcome' );
// ----------------------------------------
const tlWelcome = new Timeline();
function showLabel() {
    tlWelcome.fromTo( boxWelcome, 2, { autoAlpha: 0, scale: 1 }, { autoAlpha: 1, scale: 1.6, x: -40, y: 40 } );
}
// ---------------------------------------
const tlCircles = new Timeline({ repeat: 2, onComplete: showLabel });
// ----------------------------------------
tlCircles
    .staggerFromTo( circles, 2, { x: 600, autoAlpha: 1 }, { x: 100, autoAlpha: 0.3, ease: Back.easeOut }, 0.2 )
    .fromTo( circlesHolder, 1, { scale: 1.4, autoAlpha: 1 }, { scale: 1, autoAlpha: 0 }, 2.6 );


