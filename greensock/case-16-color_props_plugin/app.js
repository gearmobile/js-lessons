window.addEventListener( 'load', function () {
    // ----------------------------------------------------------
    const title = document.querySelector( '.title' );
    const box = document.querySelector( '.box' );
    const button = document.querySelector( '.start' );
    // ----------------------------------------------------------
    const setColor = {
        colorStart: '#f00'
    };
    // ----------------------------------------------------------
    const gradientColors = {
        colorStart: '#daa520',
        colorStop: '#8b0000'
    };
    // ----------------------------------------------------------
    title.innerHTML = setColor.colorStart;
    box.style.backgroundImage = 'radial-gradient(' + gradientColors.colorStart + ',' + gradientColors.colorStop + ')';
    // ----------------------------------------------------------
    function startAnima() {
        TweenMax.to( setColor, 2, {
            colorProps: {
                colorStart: 'yellow'
            },
            ease: Linear.easeNone,
            onUpdate: updateValue
        });
    }
    // ----------------------------------------------------------
    function updateChangeColors() {
        box.style.backgroundImage = 'radial-gradient(' + gradientColors.colorStart + ',' + gradientColors.colorStop + ')';
        title.innerHTML = gradientColors.colorStart + ' : ' + gradientColors.colorStop;
    }
    // ----------------------------------------------------------
    function changeColors() {
        TweenMax.to( gradientColors, 2, {
            colorProps: {
                colorStart: '#f5f5f5',
                colorStop: '#008000'
            },
            ease: Linear.easeNone,
            onUpdate: updateChangeColors
        });
    }
    // ----------------------------------------------------------
    function updateValue() {
        title.innerHTML = setColor.colorStart;
    }
    // ----------------------------------------------------------
    // button.addEventListener( 'click', startAnima, false );
    button.addEventListener( 'click', changeColors, false );
    // ----------------------------------------------------------
}, false );
