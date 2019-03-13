// 两数之和
// 一个数组nums,元素都为整数，其中两个元素和为target，找出这两个元素的索引
function twoSum(nums, target) {
  var map = new Maps()
  for(var i = 0, len = nums.length; i < len; i++) {
    const another = target - nums[i] // 获取另外一个数字
    if(map.has(another)) { // 如果map中已经存在这个数，直接返回当前的索引，以及这个数的键值
      return [map.get(another), i]
    }
    map.set(nums[i], i)
  }
}