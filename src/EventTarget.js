export default class EventTarget {

    constructor() {
        this.observers = {};
    }

    addObserver( type, observer ) {
        let me = this, observers;

        observers = me.observers[ type ] 
            = me.observers[ type ] || []; 
        if ( typeof observer == 'function' ) {
            observers.push( observer );
        }
    }

    dispatch( type, params ) {
        let me = this, observers;

        observers = me.observers[ type ] 
            = me.observers[ type ] || []; 
        for ( let i = 0; i < observers.length; i++ ) {
            observers[ i ]( params, me );
        }
    }

}
