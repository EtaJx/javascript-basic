if (!Function.prototype.softBind) {
  Function.prototype.softBind = function (obj) {
    var fn = this
    var curried = [].slice.call(arguments, 1) // 获取除obj外的所有参数
    var bound = function () {
      return fn.apply((!this || this === (window || global)) ? obj : this, curried.concat.apply(curried, arguments))
    }
    bound.prototype = Object.create(fn.prototype)
    return bound
  }
}