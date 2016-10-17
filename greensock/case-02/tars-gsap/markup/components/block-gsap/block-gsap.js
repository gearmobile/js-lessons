// ----------------------------------
//
const TweenMax = require( 'gsap' );
// ----------------------------------
//
const block = document.querySelector( '.block' );
const duration = 2;
const options = {
    x: 200,
    y: 200
};
// ----------------------------------
//
const tweenOne = TweenMax.to( block, duration, options );



