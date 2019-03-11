function binarySearch(list = [], item) {
  if (list.length == 0) {
    throw Error('list\'s length is 0 ')
  }
  let low = 0, high = list.length - 1, mid = 0 // low 最小元素的索引，high 最大元素的索引 
  while (low <= high) { // 开始遍历
    mid = parseInt((low + high) / 2) // 每次取得中间索引
    guess = list[mid] // 猜的是中间的元素
    if (guess == item) { // 如果猜的数字刚好等于中间这个数字
      return mid // 直接返回中间的索引
    }
    if (guess > item) { // 如果猜的这个数字大于要猜的数字，那么这个时候，最大索引为猜的这个数字的索引 - 1
      high = mid - 1
    } else { // 反之，最小索引为猜的这个数的索引 - 1
      low = mid + 1
    }
  }
}

const testArray = [1, 3, 5, 7, 11, 13]

console.log(binarySearch(testArray, 3))
