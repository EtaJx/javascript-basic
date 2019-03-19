/**
 * 函数的节流，在限定的时间内，执行函数
 * 
 * DOM元素的拖拽（mousemove）
 * 计算鼠标移动的距离（mousemove）
 * Canvas模拟画板(mousemove)
 * 搜索联想
 * 监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次
 * 
 * @param {function} fn threshhold 内要执行的fn
 * @param {number} threshhold 限定的时间 
 */
function throttle(fn, threshhold) {
  var timer;
  var start = new Date(); // 获取函数执行时候的时间
  var threshhold = threshhold || 160;
  return function () {
    let curr = new Date() - 0; // 获取return的这个function执行的时间
    clearTimeout(timer);
    if (curr - start >= threshhold) { // 如果当前的时间 curr 与函数的执行时间相差大于threshhold
      fn.apply(this, args); // 该执行fn了
      start = curr; // 重设时间
    } else { // 如果间隔时间 threshhold 大于 curr - start 的时间，那么在间隔threshold时，执行一次 fn
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, threshhold);
    }
  }
}