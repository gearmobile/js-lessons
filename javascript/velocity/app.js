window.addEventListener( 'DOMContentLoaded', function () {
    let body = document.body;
    let block = document.querySelector('#anima');
    let button = document.querySelector('#get');
    button.style.cursor = 'pointer';
    let top = document.querySelector('#top');
    let sections = document.querySelectorAll('.section');
    let navigation = document.querySelector('.nav');
    let config = {
        width: 1000,
        opacity: .6,
        translateX: 200,
        translateY: 100
    };
    let physics = {
        easing: [ 500, 20 ],
        duration: 2000
    };
    let scroll = {
        duration: 1500,
        easing: 'swing'
    };
    let duration = {
        duration: 1000,
        easing: 'ease-in-out',
        delay: 100,
        loop: 2
    };
    button.addEventListener( 'click', function () {
        Velocity( block, config, physics );
        Velocity( block, 'reverse' );
    });
    // SCROLL TO TOP VELOCITY
    // --------------------------------------------------
    top.addEventListener( 'click', function () {
        Velocity( body, 'scroll', scroll );
    });
    // SMOOTH SCROLL VELOCITY
    // --------------------------------------------------
    navigation.addEventListener( 'click', function ( event ) {
        if ( event.target.tagName.toLowerCase() === 'a' ) {
            let attr = event.target.getAttribute( 'href' ).slice(1);
            attr -= 1;
            Velocity( sections[attr], 'scroll', scroll );
        }
    });
}, false);