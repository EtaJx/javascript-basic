const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbask = []
  try{
    fn(resolve, reject)
  } catch(e) {
    reject(e)
  }
}

/**
 * 在resolve中，如果当前状态为pedding
 * 则应变为resolved，
 * 这是吧resolvedCallback中的所有函数都执行完毕
 */
function resolve(value) {
  if(value instanceof MyPromise) {
    return value.then(resolve, reject)
  }
  setTimeout(() => {
    if(that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(cb => cb(that.value))
    }
  }, 0)
}

/**
 * reject函数同上
 */
function rejected(value) {
  setTimeout(() => {
    if(that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbask.map(cb => cb(that.value))
    }
  }, 0)
}

MyPromise.prototype.then = function(onFUlfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected ? r => { throw r }
  if(that.state === PENDING) {
    return(promise2 = new MyPromise((resolve, reject) => {
      that.resolvedCallbacks.push(() => {
        try{
          const x = onFulfilled(that.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch(r) {
          reject(r)
        }
      })

      that.rejectedCallbask.push(() => {
        try{
          const x = onRejected(that.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch(r) {
          reject(r)
        }
      })
    }))
  }
  if(that.state === RESOLVED) {
    return(promise2 = new MyPromise((resolve, reject) => {
      setTimeout(() => { // 传入函数需要异步执行
        try {
          const x = onFulfilled(that.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch(reason) {
          reject(reason)
        }
      }, 0)
    }))
  }
  if(that.state === REJECTED) {
    return (promise2 = new MyPromise(resolve, reject) => {
      setTimeout(() => {
        try {
          const x = onRejected(that.valye)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch(reason) {
          reject(reason)
        }
      }, 0)
    })
    onRejected(that.value)
  }
}

function resolutionProcedure(promise2, x, resolve, reject) {
  if(promise2 === x) {
    return reject(new TypeError('Error'))
  }
  if(x instanceof MyPromise) {
    x.then(function(value) {
      resolutionProcedure(promise2, value, resolve, reject)
    }, reject)
  }
  let called = false
  if(x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try{
      let then = x.then
      if(typeof then === 'function') {
        then.call(x, y => {
          if(called) {
            return false
          }
          called = true
          resolutionProcedure(promise2, y, resolve, reject)
        }, e => {
          if(called) {
            return false
          }
          called = true
          reject(e)
        })
      } else {
        resolve(x)
      }
    } catch(e) {
      if(called) {
        return false
      }
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}
