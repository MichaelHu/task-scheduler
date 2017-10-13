import Task from '../src/Task';

it( 'Task.getById is a function', () => {
    expect( typeof Task.getById ).toBe( 'function' );
} );

let prefix = 'p' + Date.now() + '-';


it( 'test Task', () => {

    let t1 = new Task( 'task-1', { isTesting: 1, prefix } );

    expect( Task.getById( prefix + 'task-1' ) )
        .toBe( t1 );

} );

// s.append_show( Task.getById( prefix + 'task-1' ) == t1, 'correct getById()' );
// s.append_show( t1.id == prefix + 'task-1', 'correct task.id ' + t1.id );
// s.append_show( t1.state == 'WAITING', 'correct task.state' );
// 
// // 创建任务2
// let t2 = new Task( 'task-2', { isTesting: 1, prefix } );
// s.append_show( '\n t2 testing ...' );
// s.append_show( Task.getById( prefix + 'task-2' ) == t2, 'correct getById()' );
// s.append_show( t2.id == prefix + 'task-2', 'correct task.id ' + t2.id );
// s.append_show( t2.state == 'WAITING', 'correct task.state' );
// 
// // 创建任务3
// let t3 = new Task( 'task-3', {
//         input: {
//             name: 'hudamin'
//             , desc: ( fields ) =>  {
//                 return 'hello ' + fields.name
//                     + ', your password: ' + fields.password
//                     + ', room: ' + fields.room
//                     ;
//             }
//             , password: { id: 'task-1', ondone: taskOutput => taskOutput.p + 123, __type: 'DEP' }
//             , room: { id: 'task-2', ondone: taskOutput => 'R-' + taskOutput.room, __type: 'DEP'  }
//         }
//         , request: {
//             type: 'POST'
//             , url: ( inputInfo ) => 'http://258i.com/phpapp/form-enctype.php?' + inputInfo.name
//             , data: ( inputInfo ) => { return { info: inputInfo.desc }; }
//         }
//         , callback: {}
//         , isTesting: 1
//         , prefix
//     } );
// 
// // 任务全部创建完毕，可以调用addDeps()方法构建依赖关系
// t1.addDeps();
// t2.addDeps();
// t3.addDeps();
// 
// s.append_show( '\n t3 testing ...' );
// s.append_show( t3.id == prefix + 'task-3', 'correct task.id ' + t3.id );
// s.append_show( t3.isInputReady() === false, 't3.isInputReady() === false' );
// s.append_show( t3.isDepInputReady() === false, 't3.isDepInputReady() === false' );
// s.append_show( t3.inputInfo.name == 'hudamin', 't3.inputInfo.name == "hudamin"' );
// s.append_show( t3.inputInfo.desc == undefined, 't3.inputInfo.desc is undefined' );
// s.append_show( t3.inputInfo.password == undefined, 't3.inputInfo.password is undefined' );
// s.append_show( t3.inputInfo.room == undefined, 'correct inputInfo.room' );
// s.append_show( t1.observers[ 'done' ].length == 1, 'correct t1.observers length' );
// s.append_show( t2.observers[ 'done' ].length == 1, 'correct t2.observers length' );
// s.append_show( typeof t1.observers[ 'done' ][ 0 ] == 'function', 'correct observers' );
// s.append_show( typeof t2.observers[ 'done' ][ 0 ] == 'function', 'correct observers' );
// 
// // 任务依赖关系全部构建完毕，可以调用start()方法启动任务
// t1.start();
// s.append_show( t1.state == 'DONE', 'correct t1.state after start' );
// s.append_show( t2.state == 'WAITING', 'correct t2.state after t1.start' );
// s.append_show( t3.state == 'WAITING', 'correct t3.state after t1.start' );
// 
// s.append_show(
//     t3.isDepInputReady() === false
//     , 't3.isDepInputReady() === false after t1 is done'
// );
// s.append_show( t3.inputInfo.password == 246, 't3.inputInfo.password == 246 when t1 is done' );
// s.append_show(
//     t3.inputInfo.room === undefined
//     , 't3.inputInfo.room is undefined when t1 is done'
// );
// s.append_show(
//     t3.inputInfo.desc === undefined
//     , 't3.inputInfo.desc is undefined  when t1 is done'
// );
// s.append_show(
//     t3.requestInfo.url == undefined
//     , 't3.requestInfo.url == undefined before exec()'
// );
// s.append_show(
//     t3.requestInfo.data == undefined
//     , 't3.requestInfo.data == undefined before exec()'
// );
// 
// t2.start();
// s.append_show( t1.state == 'DONE', 'correct t1.state after t2.start' );
// s.append_show( t2.state == 'DONE', 'correct t2.state after t2.start' );
// s.append_show( t3.state == 'EXECUTING', 'correct t3.state after t2.start' );
// 
// s.append_show(
//     t3.isDepInputReady() === true
//     , 't3.isDepInputReady() === true after t2 is done'
// );
// s.append_show(
//     t3.isInputReady() === true
//     , 't3.isInputReady() === true after t2 is done'
// );
// s.append_show( t3.inputInfo.room === 'R-708', 't3.inputInfo.room == "R-708"  when t2 is done' );
// s.append_show(
//     t3.inputInfo.desc == 'hello hudamin, your password: 246, room: R-708'
//     , 'correct t3.inputInfo.desc when ready'
// );
// s.append_show(
//     t3.requestInfo.url == 'http://258i.com/phpapp/form-enctype.php?hudamin'
//     , 't3.requestInfo.url == "http://258i.com/phpapp/form-enctype.php?hudamin"'
// );
// s.append_show(
//     t3.requestInfo.data.info == 'hello hudamin, your password: 246, room: R-708'
//     , 't3.requestInfo.data.info has correct value'
// );
// 
// // 可有可无，程序能确保其调用位置无关
// t3.start();
