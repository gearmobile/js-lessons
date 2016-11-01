// METHOD TO() =>
// METHOD FROM() <=
// METHOD FROMTO() <==
// METHOD SET() <=<
// AUTOALPHA()
// DELAY()

window.addEventListener( 'load', function () {
    // --------------------------------------------------
    const elementUno = document.querySelector( '#box-item-one' );
    const elementDuo = document.querySelector( '#box-item-two' );
    const elementTre = document.querySelector( '#box-item-three' );
    // --------------------------------------------------
    //TweenLite.to( elementOne, 2, { x: 300 } ); // method to() ( => )
    //TweenLite.from( elementOne, 2, { x: 300 } ); // method from() ( <= )
    TweenLite.fromTo( elementUno, 2, { x: 300 }, { x: -150 } ); // method fromto() ( <== )
    TweenLite.set( elementDuo, { x: -150, delay: 2 } ); // method set() ( <=< )
    // autoAlpha = 0 ( opacity => 0 && visibility => hidden )
    // autoAlpha = 1 ( opacity => 1 && visibility => visible )
    TweenLite.to( elementTre, 2, { autoAlpha: 0, delay: 4 } ); // delay()
}, false );
