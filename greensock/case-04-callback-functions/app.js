// -----------------------------------------------------------
// CALLBACK FUNCTIONS: ONSTART(), ONUPDATE(), ONCOMPLETE()
// -----------------------------------------------------------
window.addEventListener( 'load', function () {
    // ----------------------------------------------------------
    let elementUno = document.querySelector( '#box-item-one' );
    let count = 0;
    // ----------------------------------------------------------
    function startAnima() {
        console.log( 'Animations started!' );
    }
    function progressAnima() {
        console.log( 'Animation is in progress' );
        //elementUno.innerHTML = count++;
    }
    function endAnima() {
        console.log( 'Animation finished!' );
        //elementUno.style.backgroundColor = 'mediumseagreen';
        //elementUno.style.color = 'lightgoldenrodyellow';
        //elementUno.style.borderColor = 'firebrick';
    }
    // ----------------------------------------------------------
    TweenLite.to( elementUno, 4, {
        x: 800,
        delay: 1,
        onStart: startAnima,
        onUpdate: progressAnima,
        onComplete: endAnima
    } );
    // ----------------------------------------------------------
}, false );
