window.addEventListener( 'load', function () {
    function functionName() {
        // some code
    }

    //
    function functionName( parameter1, parameter2 ) {
        // some code
    }
    functionName( argument1, argument2 );

    //
    function functionOne(x) { console.log(x); }
    function functionTwo( parameter1 ) {
        // some code
    }
    functionTwo( functionOne );

    //
    function functionOne(x) { console.log(x); }
    function functionTwo( parameter1, callback ) {
        callback( parameter1 );
    }
    functionTwo( 2, functionOne );

    //
    function functionTwo( parameter1, callback ) {
        callback( parameter1 );
    }
    functionTwo(1, function (x) { console.log(x); });

    //
    function functionTwo( parameter1, callback ) {
        callback( parameter1 );
        callback( parameter1 );
    }
    functionTwo( 1, function (x) { console.log(x); } );

    //
    function functionTwo( parameter1, parameter2, callback1, callback2 ) {
        callback1( parameter1 );
        callback2( parameter2 );
    }
    functionTwo( 1, 2, function (x) { console.log(x); }, function (x) { console.log(x); } );

    //
    function functionTwo( parameter1, callback1, callback2 ) {
        callback1( parameter1 );
        callback2( parameter1 );
    }
    functionTwo( 2, functionOne, functionOne );
    functionTwo( 2, functionOne, function(x) { console.log( x + 2 ); });
}, false);
