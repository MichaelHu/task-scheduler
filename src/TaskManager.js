import utils from './utils';
import Task from './Task';

class TaskManager {

    /**
     * Create a TaskManager
     * @param {Object} options
     * @param {string|number} [options.prefix='']           - task id prefix
     * @param {function|null} [options.onstatechange=null]  - task id prefix
     * @param {Object[]} [options.taskConfigs]              - array of task config
     * @param {string} options.taskConfigs[].id             - task id
     * @param {Object} options.taskConfigs[].options        - task options
     */
    constructor( options ) {
        let opt = utils.extend( {}, options )
            , me = this
            , taskConfigs = opt.taskConfigs
            , prefix = opt.prefix || ''
            ;

        me.prefix = prefix;
        me.tasks = [];
        me.createTasks( taskConfigs, opt.onstatechange );
    }

    tasks( ids ) {}

    addTask( task ) {
        task && this.tasks.push( task );
    }

    createTasks( taskConfigs, onstatechange ) {
        let me = this
            , configs = taskConfigs || []
            ;

        configs.forEach( config => {
            let task = new Task( config.id, utils.extend( config.options, { prefix: me.prefix } ) );
            me.addTask( task );
            if ( typeof onstatechange == 'function' ) { 
                task.addObserver( 'statechange', onstatechange );
            }
        } );

        return me;
    }

    addDeps() {
        let me = this;
        me.tasks.forEach( task => {
            task.addDeps();
        } );
        return me;
    }

    start() {
        let me = this;
        me.tasks.forEach( task => {
            task.start();
        } );
        return me;
    }

    onstatechange( params, target ) {
    }

    /**
     * get dependencies network, which is refered to as a graph 
     * @param {Object} [options]
     * @returns {Object} 
     *      {
     *          nodes: []
     *          , edges: []
     *      }
     */
    toGraph( options ) {
        let me = this
            , tasks = me.tasks
            , nodes = []
            , edges = []
            , edgeCount = 0
            ;
        tasks.forEach( ( task ) => {
            let node = utils.extendOnly( 
                    { x: null, y: null, size: 5 }
                    , task
                    , [ 'id', 'inputInfo', 'requestInfo' ]
                );
            nodes.push( node );

            task.dependencies.forEach( ( dep ) => {
                let edge = {
                        id: me.prefix + 'e' + edgeCount++
                        , source: dep.id
                        , target: task.id
                    };
                edges.push( edge );
            } );
        } );

        return { nodes, edges };
   }

}

export default TaskManager;
