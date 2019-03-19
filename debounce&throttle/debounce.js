/**
 * 防抖：任务在delay之后才触发
 * 
 * 可用于resize和scroll
 * 用于input输入验证
 * 
 * @param {function} fn 在delay之后要执行的回调函数
 * @param {number} delay 延迟的时间
 */
function debounce(fn, delay) {
  const timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  }
}