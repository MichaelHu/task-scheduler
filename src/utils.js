function extend( target, ...sources ) {
    for ( let i = 0; i < sources.length; i++ ) {
        let source = sources[ i ];
        for ( let key in source ) {
            if ( source.hasOwnProperty( key ) ) {
                target[ key ] = source[ key ];
            }
        }
    }
    return target;
}

function extendOnly( target, ...others ) {
    let len = others.length 
        , sources = [].slice.call( others, 0, len - 1 )
        , keys = others[ len - 1 ] 
        ;
    for ( let i = 0; i < sources.length; i++ ) {
        let source = sources[ i ];
        for ( let key in source ) {
            if ( source.hasOwnProperty( key ) && keys.indexOf( key ) >= 0 ) {
                target[ key ] = source[ key ];
            }
        }
    }
    return target;
}

function defaults( target, ...sources ) {
    for ( let i = 0; i < sources.length; i++ ) {
        let source = sources[ i ];
        for ( let key in source ) {
            if ( source.hasOwnProperty( key ) && target[ key ] == undefined ) {
                target[ key ] = source[ key ];
            }
        }
    }
    return target;
}

export default {
    extend
    , extendOnly
    , defaults
};
