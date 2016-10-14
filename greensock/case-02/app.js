window.addEventListener( 'load', function () {
    // code here ...
    const firstElement = document.querySelector('#box-item-one');
    TweenLite.to( firstElement, 3, { x: 200 } );
}, false );
