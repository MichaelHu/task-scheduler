(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function extend(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < sources.length; i++) {
        var source = sources[i];
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}

function extendOnly(target) {
    for (var _len2 = arguments.length, others = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        others[_key2 - 1] = arguments[_key2];
    }

    var len = others.length,
        sources = [].slice.call(others, 0, len - 1),
        keys = others[len - 1];
    for (var i = 0; i < sources.length; i++) {
        var source = sources[i];
        for (var key in source) {
            if (source.hasOwnProperty(key) && keys.indexOf(key) >= 0) {
                target[key] = source[key];
            }
        }
    }
    return target;
}

function defaults(target) {
    for (var _len3 = arguments.length, sources = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        sources[_key3 - 1] = arguments[_key3];
    }

    for (var i = 0; i < sources.length; i++) {
        var source = sources[i];
        for (var key in source) {
            if (source.hasOwnProperty(key) && target[key] == undefined) {
                target[key] = source[key];
            }
        }
    }
    return target;
}

exports.default = {
    extend: extend,
    extendOnly: extendOnly,
    defaults: defaults
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskManager = undefined;

var _TaskManager = __webpack_require__(2);

var _TaskManager2 = _interopRequireDefault(_TaskManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TaskManager = _TaskManager2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _Task = __webpack_require__(3);

var _Task2 = _interopRequireDefault(_Task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaskManager = function () {

    /**
     * Create a TaskManager
     * @param {Object} options
     * @param {string|number} [options.prefix='']           - task id prefix
     * @param {function|null} [options.onstatechange=null]  - task id prefix
     * @param {Object[]} [options.taskConfigs]              - array of task config
     * @param {string} options.taskConfigs[].id             - task id
     * @param {Object} options.taskConfigs[].options        - task options
     */
    function TaskManager(options) {
        _classCallCheck(this, TaskManager);

        var opt = _utils2.default.extend({}, options),
            me = this,
            taskConfigs = opt.taskConfigs,
            prefix = opt.prefix || '';

        me.prefix = prefix;
        me.tasks = [];
        me.createTasks(taskConfigs, opt.onstatechange);
    }

    _createClass(TaskManager, [{
        key: 'tasks',
        value: function tasks(ids) {}
    }, {
        key: 'addTask',
        value: function addTask(task) {
            task && this.tasks.push(task);
        }
    }, {
        key: 'createTasks',
        value: function createTasks(taskConfigs, onstatechange) {
            var me = this,
                configs = taskConfigs || [];

            configs.forEach(function (config) {
                var task = new _Task2.default(config.id, _utils2.default.extend(config.options, { prefix: me.prefix }));
                me.addTask(task);
                if (typeof onstatechange == 'function') {
                    task.addObserver('statechange', onstatechange);
                }
            });

            return me;
        }
    }, {
        key: 'addDeps',
        value: function addDeps() {
            var me = this;
            me.tasks.forEach(function (task) {
                task.addDeps();
            });
            return me;
        }
    }, {
        key: 'start',
        value: function start() {
            var me = this;
            me.tasks.forEach(function (task) {
                task.start();
            });
            return me;
        }
    }, {
        key: 'onstatechange',
        value: function onstatechange(params, target) {}

        /**
         * get dependencies network, which is refered to as a graph 
         * @param {Object} [options]
         * @returns {Object} 
         *      {
         *          nodes: []
         *          , edges: []
         *      }
         */

    }, {
        key: 'toGraph',
        value: function toGraph(options) {
            var me = this,
                tasks = me.tasks,
                nodes = [],
                edges = [],
                edgeCount = 0;
            tasks.forEach(function (task) {
                var node = _utils2.default.extendOnly({ x: null, y: null, size: 5 }, task, ['id', 'inputInfo', 'requestInfo']);
                nodes.push(node);

                task.dependencies.forEach(function (dep) {
                    var edge = {
                        id: me.prefix + 'e' + edgeCount++,
                        source: dep.id,
                        target: task.id
                    };
                    edges.push(edge);
                });
            });

            return { nodes: nodes, edges: edges };
        }
    }]);

    return TaskManager;
}();

exports.default = TaskManager;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _EventTarget2 = __webpack_require__(4);

var _EventTarget3 = _interopRequireDefault(_EventTarget2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _tasks = {};

var getById = function getById(id) {
    return _tasks[id];
};

var clear = function clear() {
    for (var key in _tasks) {
        delete _tasks[key];
    }
};
var isTypeofDep = function isTypeofDep(obj) {
    return obj && obj.__type == 'DEP';
};

var Task = function (_EventTarget) {
    _inherits(Task, _EventTarget);

    /**
     * Create a Task
     * @param {string} id                           - task id
     * @param {Object} [options]                    - task options
     * @param {Object} options.request              - task request config 
     * @param {string|number} [options.prefix='']   - task id prefix，一般由TaskManager统一设置
     * @param {Object} [options.input]              - task input config
     * @param {Object} [options.callback]           - task request callback
     */
    function Task(id, options) {
        _classCallCheck(this, Task);

        var _this = _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).call(this));

        var opt = _utils2.default.extend({}, options),
            me = _this,
            input = _utils2.default.extend({}, opt.input),
            request = _utils2.default.extend({}, opt.request),
            callback = _utils2.default.extend({
            success: function success(resp) {
                return resp;
            },
            error: function error(xhr, textStatus, _error) {
                throw _error;
            }
        }, opt.callback),
            prefix = opt.prefix || '';

        if (typeof id != 'string' && typeof id != 'number') {
            throw new Error('_Task(): id must be of "string" or "number".');
        }

        id = prefix + id;
        if (_tasks[id]) {
            throw new Error('_Task(): dumplicated id.');
        }
        _tasks[id] = me;

        me.isTesting = opt.isTesting || false;
        me.prefix = prefix;
        me.id = id;
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
        return _this;
    }

    _createClass(Task, [{
        key: 'initInputInfo',
        value: function initInputInfo() {
            var me = this,
                input = me.input,
                inputInfo = me.inputInfo;

            for (var key in input) {
                // non-onready fields or non-ondone fields
                if (typeof input[key] != 'function' && !isTypeofDep(input[key])) {
                    inputInfo[key] = input[key];
                }
            }
        }
    }, {
        key: 'addDeps',
        value: function addDeps() {
            var me = this,
                input = me.input,
                dependencies = me.dependencies;

            for (var key in input) {
                if (isTypeofDep(input[key])) {
                    (function () {
                        var dep = input[key];
                        var task = getById(me.prefix + dep.id);
                        if (dependencies.indexOf(task) < 0) {
                            dependencies.push(task);
                        }

                        (function (k) {
                            task.addObserver('done', function (params) {
                                me.inputInfo[k] = dep.ondone.bind(me)(params);
                                if (me.isDepInputReady()) {
                                    me.onready();
                                }
                            });
                        })(key);
                    })();
                }
            }
        }
    }, {
        key: 'start',
        value: function start() {
            var me = this;

            if (me.state != 'WAITING') {
                return;
            }

            if (me.isInputReady()) {
                me.onexec();
            } else if (me.isDepInputReady()) {
                me.onready();
            }
        }
    }, {
        key: 'onready',
        value: function onready() {
            var me = this;
            me.ready();
            me.state = 'READY';
            me.dispatch('statechange');

            if (me.isInputReady()) {
                me.exec();
                me.state = 'EXECUTING';
                me.dispatch('statechange');
            }
        }
    }, {
        key: 'ready',
        value: function ready() {
            var me = this,
                input = me.input,
                inputInfo = me.inputInfo;

            if (me.state == 'EXECUTING' || me.state == 'DONE') {
                return;
            }

            // compute onready fields
            for (var key in input) {
                if (typeof input[key] == 'function') {
                    inputInfo[key] = input[key].bind(me)(inputInfo);
                }
            }
        }
    }, {
        key: 'onexec',
        value: function onexec() {
            var me = this;

            me.exec();
            me.state = 'EXECUTING';
            me.dispatch('statechange');

            if (me.isTesting) {
                var resp = { p: 123, room: 708 };
                me.outputInfo = me.callback.success.bind(me)(resp);
                me.state = 'DONE';
                me.dispatch('statechange');
                me.dispatch('done', me.outputInfo);
            }
        }
    }, {
        key: 'exec',
        value: function exec() {
            var me = this,
                inputInfo = me.inputInfo,
                request = me.request,
                requestInfo = me.requestInfo,
                callback = me.callback;

            for (var key in request) {
                var item = request[key];
                if (typeof item == 'function') {
                    requestInfo[key] = item.bind(me)(inputInfo);
                } else {
                    requestInfo[key] = item;
                }
            }

            var settings = _utils2.default.extend({}, requestInfo, callback);
            var oldSuccess = settings.success;
            var oldError = settings.error;
            settings.success = function (resp, textStatus, request) {
                me.outputInfo = oldSuccess(resp, textStatus, request);
                me.state = 'DONE';
                me.dispatch('statechange');
                me.dispatch('done', me.outputInfo);
            };
            settings.error = function (xhr, textStatus, errorThrown) {
                oldError(xhr, textStatus, errorThrown);
                throw errorThrown;
            };
            $.ajax(settings.url, settings);
        }
    }, {
        key: 'isInputReady',
        value: function isInputReady() {
            var me = this,
                input = me.input,
                inputInfo = me.inputInfo;

            for (var key in input) {
                if (typeof inputInfo[key] == 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: 'isDepInputReady',
        value: function isDepInputReady() {
            var me = this,
                input = me.input,
                inputInfo = me.inputInfo;

            for (var key in input) {
                if (isTypeofDep(input[key]) && typeof inputInfo[key] == 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }]);

    return Task;
}(_EventTarget3.default);

_utils2.default.extend(Task, {
    getById: getById,
    clear: clear,
    isTypeofDep: isTypeofDep
});

exports.default = Task;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventTarget = function () {
    function EventTarget() {
        _classCallCheck(this, EventTarget);

        this.observers = {};
    }

    _createClass(EventTarget, [{
        key: 'addObserver',
        value: function addObserver(type, observer) {
            var me = this,
                observers = void 0;

            observers = me.observers[type] = me.observers[type] || [];
            if (typeof observer == 'function') {
                observers.push(observer);
            }
        }
    }, {
        key: 'dispatch',
        value: function dispatch(type, params) {
            var me = this,
                observers = void 0;

            observers = me.observers[type] = me.observers[type] || [];
            for (var i = 0; i < observers.length; i++) {
                observers[i](params, me);
            }
        }
    }]);

    return EventTarget;
}();

exports.default = EventTarget;

/***/ })
/******/ ]);
});