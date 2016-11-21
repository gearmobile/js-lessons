window.addEventListener( 'load', function () {
    // ----------------------------------------------------------
    const rulesUno = CSSRulePlugin.getRule( '.stoplight__item--uno' );
    const rulesDuo = CSSRulePlugin.getRule( '.stoplight__item--duo' );
    const rulesTre = CSSRulePlugin.getRule( '.stoplight__item--tre' );
    // ----------------------------------------------------------
    TweenMax.to( rulesUno, 1, {
        cssRule: {
            opacity: 1
        },
        ease: Linear.easeNone,
        repeat: -1,
        yoyo: true
    });
    // ----------------------------------------------------------
    TweenMax.to( rulesDuo, 1, {
        cssRule: {
            opacity: 1
        },
        ease: Linear.easeNone,
        repeat: -1,
        yoyo: true,
        delay: 0.25
    });
    // ----------------------------------------------------------
    TweenMax.to( rulesTre, 1, {
        cssRule: {
            opacity: 1
        },
        ease: Linear.easeNone,
        repeat: -1,
        yoyo: true,
        delay: 0.5
    });
    // ----------------------------------------------------------
}, false );
