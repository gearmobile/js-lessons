// --------------------------------------------------------------
window.addEventListener( 'load', function () {
    // ----------------------------------------------------------
    const bounds = document.querySelector( '.holder' );
    const boundsTop = bounds.getBoundingClientRect().top;
    const boundsLeft = bounds.getBoundingClientRect().left;

    const sourceElement = document.querySelector( '.item-uno' );
    const sourceElementTop = Math.floor( sourceElement.getBoundingClientRect().top - 1 ) - boundsTop;
    const sourceElementLeft = Math.floor( sourceElement.getBoundingClientRect().left - 1 ) - boundsLeft;

    const targetElement = document.querySelector( '.item-duo' );
    const targetElementTop = Math.floor( targetElement.getBoundingClientRect().top - 1 ) - boundsTop;
    const targetElementLeft = Math.floor( targetElement.getBoundingClientRect().left - 1 ) - boundsLeft;

    const offsetTop = targetElementTop - sourceElementTop;
    const offsetLeft = targetElementLeft - sourceElementLeft;

    const thresholdValue = '20%';
    // ----------------------------------------------------------
    const init = {
        simpleTest: function () {
            Draggable.create( sourceElement, {
                type: 'x, y',
                bounds: bounds,
                onDragEnd: function () {
                    if ( this.hitTest( targetElement ) ) {
                        TweenMax.to( targetElement, 1, {
                            backgroundColor: 'maroon'
                        });
                    }
                }
            });
        },
        thresholdTest: function () {
            Draggable.create( sourceElement, {
                type: 'x, y',
                bounds: bounds,
                onDragEnd: function () {
                    if ( this.hitTest( targetElement, thresholdValue ) ) {
                        TweenMax.to( this.target, 1, {
                            x: offsetLeft + 'px',
                            y: offsetTop + 'px',
                            backgroundColor: '#d87093',
                            ease: Elastic.easeOut
                        });
                    } else {
                        TweenMax.to( this.target, 1, {
                            x: 0,
                            y: 0,
                            ease: Bounce.easeOut
                        });
                    }
                }
            });
        }
    };  
    // ----------------------------------------------------------
    init.thresholdTest();
    // ----------------------------------------------------------
}, false );
