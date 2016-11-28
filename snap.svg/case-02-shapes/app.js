
window.addEventListener( 'load', function () {
    const width = 400;
    const height = 400;
    const snapObject = Snap( width, height );
    const circle = snapObject.circle( width / 4, height / 4, width / 8 );
    const rect = snapObject.rect( width / 2, 0, width / 2, height / 2 );
}, false );

