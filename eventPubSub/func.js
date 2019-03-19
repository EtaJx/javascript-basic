/*
 * 在写react中，遇到一个情况，就是在两个没有层级的组件之间传递数据
 * 在vue里面貌似有一个store这个全局的值，来存储
 * 或许在react中也可以使用一个全局变量来存值
 * 但是通过查询看到一个Signals模式
 * 下面就是一个简单的实现
 *
 * 其中存在一个事件列表_events
 * subscribe表示订阅，相当于往事件列表里面传递一个事件，其中回调函数可以穿多个
 * 然后再dispatch中来检测事件列表是否存在该事件，如果存在则依次执行在subscribe中传入的多个回调函数
 *
 * 以此可以来传递两个组件之间的值
 */
var EventEmitter = {
    _events: {},
    dispatch: function(event, data) {
        if (!this._events[event]) {
            return false;
        }
        for (var i = 0; i < this._events[event].length; i++) {
            this._events[event][i](data);
        }
    },
    subscribe: function(event, callback) {
        if (!this._events[event]) {
            this._events[event] = [];
        }

        this._events[event].push(callback);
    }
}

var a = Object.create(EventEmitter);

a.subscribe('et', function(data) {
    console.log(data);
});

a.dispatch('et', 'hehe');
