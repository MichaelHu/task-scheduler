import utils from './utils';
import EventTarget from './EventTarget';

let _tasks = {};

const getById = id => {
    return _tasks[ id ];
};

const clear = () => {
    for( let key in _tasks ) {
        delete _tasks[ key ];
    }
};
const isTypeofDep = ( obj ) => {
    return obj && obj.__type == 'DEP';
};


class Task extends EventTarget {

    /**
     * Create a Task
     * @param {string} id                           - task id
     * @param {Object} [options]                    - task options
     * @param {string|Object} options.desc          - task description
     * @param {string|number} [options.prefix='']   - task id prefix，一般由TaskManager统一设置
     * @param {Object} options.request              - task request config 
     * @param {Object} [options.input]              - task input config
     * @param {Object} [options.callback]           - task request callback
     */
    constructor( id, options ) {
        super();
        let opt = utils.extend( {}, options )
            , me = this
            , input = utils.extend( {}, opt.input )
            , request = utils.extend( {}, opt.request )
            , callback = utils.extend( 
                {
                    success: resp => resp
                    , error: ( xhr, textStatus, error ) => { throw error } 
                }
                , opt.callback 
            )
            , prefix = opt.prefix || ''
            ;

        if ( typeof id != 'string' && typeof id != 'number' ) {
            throw new Error( '_Task(): id must be of "string" or "number".' );
        }

        id = prefix + id;
        if ( _tasks[ id ] ) {
            throw new Error( '_Task(): dumplicated id.' );
        }
        _tasks[ id ] = me;

        me.isTesting = opt.isTesting || false;
        me.prefix = prefix;
        me.id = id;
        me.desc = opt.desc || '';
        me.input = input;
        me.request = request;
        me.inputInfo = {};
        me.requestInfo = {};
        me.callback = callback;
        me.outputInfo = {};
        me.dependencies = [];

        // init
        me.initInputInfo();
        me.state = 'WAITING';
    }

    initInputInfo() {
        let me = this
            , input = me.input
            , inputInfo = me.inputInfo
            ;

        for ( let key in input ) {
            // non-onready fields or non-ondone fields
            if ( typeof input[ key ] != 'function'
                && ! isTypeofDep( input[ key ] ) ) {
                inputInfo[ key ] = input[ key ];
            }
        }
    }

    addDeps() {
        let me = this
            , input = me.input
            , dependencies = me.dependencies
            ;

        for ( let key in input ) {
            if ( isTypeofDep( input[ key ] ) ) {
                let dep = input[ key ];
                let task = getById( me.prefix + dep.id );
                if ( dependencies.indexOf( task ) < 0 ) {
                    dependencies.push( task );
                }

                ( ( k ) => {
                    task.addObserver( 'done', ( params ) => {
                        me.inputInfo[ k ] = dep.ondone.bind( me )( params );
                        if ( me.isDepInputReady() ) {
                            me.onready();
                        }
                    } ); 
                } )( key );
            }
        }
    }

    start() {
        let me = this;

        if ( me.state != 'WAITING' ) {
            return;
        }

        if ( me.isInputReady() ) {
            me.onexec();
        }
        else if ( me.isDepInputReady() ) {
            me.onready();
        }
    }

    onready() {
        let me = this;
        me.ready();
        me.state = 'READY';
        me.dispatch( 'statechange' );

        if ( me.isInputReady() ) {
            me.exec();
            me.state = 'EXECUTING';
            me.dispatch( 'statechange' );
        }
    }

    ready() {
        let me = this
            , input = me.input
            , inputInfo = me.inputInfo
            ;

        if ( me.state == 'EXECUTING' || me.state == 'DONE' ) {
            return;
        }

        // compute onready fields
        for ( let key in input ) {
            if ( typeof input[ key ] == 'function' ) {
                inputInfo[ key ] = input[ key ].bind( me )( inputInfo );
            }
        }
    }

    onexec() {
        let me = this;

        me.exec();
        me.state = 'EXECUTING';
        me.dispatch( 'statechange' );

        if ( me.isTesting ) {
            let resp = { p: 123, room: 708 };
            me.outputInfo = me.callback.success.bind( me )( resp );
            me.state = 'DONE';
            me.dispatch( 'statechange' );
            me.dispatch( 'done', me.outputInfo );
        }
    }

    exec() {
        let me = this
            , inputInfo = me.inputInfo
            , request = me.request
            , requestInfo = me.requestInfo
            , callback = me.callback
            ;

        for ( let key in request ) {
            let item = request[ key ];
            if ( typeof item == 'function' ) {
                requestInfo[ key ] = item.bind( me )( inputInfo );
            } 
            else {
                requestInfo[ key ] = item;
            }
        }

        let settings = utils.extend( {}, requestInfo, callback ); 
        let oldSuccess = settings.success;
        let oldError = settings.error;
        settings.success = ( resp, textStatus, request ) => {
            me.outputInfo = oldSuccess.bind( me )( resp, textStatus, request );
            me.state = 'DONE';
            me.dispatch( 'statechange' );
            me.dispatch( 'done', me.outputInfo );
        };
        settings.error = ( xhr, textStatus, errorThrown ) => {
            oldError.bind( me )( xhr, textStatus, errorThrown );
            throw errorThrown;
        };
        $.ajax( settings.url, settings );

    }

    isInputReady() {
        let me = this
            , input = me.input
            , inputInfo = me.inputInfo
            ;

        for ( let key in input ) {
            if ( typeof inputInfo[ key ] == 'undefined' ) {
                return false;
            }
        } 
        return true;
    }

    isDepInputReady() {
        let me = this
            , input = me.input
            , inputInfo = me.inputInfo
            ;

        for ( let key in input ) {
            if ( isTypeofDep( input[ key ] ) 
                && typeof inputInfo[ key ] == 'undefined' ) {
                return false;
            }
        } 
        return true;
    }

}

utils.extend( Task, {
    getById
    , clear
    , isTypeofDep
} );

export default Task;
