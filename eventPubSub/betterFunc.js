'use strict';

/*
 * 一个事件发布-订阅的更好的代码
 */

class eventProxy {

    constructor(){
        this.onObj = {};
        this.oneObj = {};
    }
    /*
     * @key 事件名称
     * @fn 事件（函数）
     */
    on(key, fn) {
        if(this.onObj[key] === undefined) {
            this.onObj[key] = [];
        }

        this.onObj[key].push(fn);//可以为用一个事件传递多个执行函数
    }
    one(key, fn) {//只执行一次的函数队列
        if(this.oneObj[key] === undefined) {
            this.oneObj[key] = [];
        }

        this.oneObj[key].push(fn);
    }
    off(key) {//清空事件队列
        this.onObj[key] = [];
        this.oneObj[key] = [];
    }
    trigger() {
        let key, args;

        if(arguments.length == 0) {//如果未传参，说明什么都不做
            return false;
        }

        key = arguments[0];//事件名称为参数第一个

        args = [].concat([].prototype.slice.call(arguments,1));//获取除去第一个参数以外的参数

        if(this.onObj[key] !== undefined && this.onObj[key].length > 0) {
            for(let value of this.onObj[key]) {
                value.apply(null, args);//遍历执行fn
            }
        }

        if(this.oneObj[key] !== undefined && this.oneObj[key].length > 0) {
            for(let value of this.oneObj[key]) {
                value.apply(null, args);//每执行完一个fn就off掉
                value = undefined;
            }
            this.oneObj[key] = [];
        }
    }
};

export default eventProxy;
