/**
 * 罗马数字代码的值
 * 
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * 输入 ‘III'
 * 输出 3
 * 
 * 输入 ‘IV'
 * 输出 4
 */
function romanToInt(s) {
  const romanStrMap = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  const _s = s.split('');
  /**
   * 观察，例如'IV'就是4，'VI'就是6
   * 有最终结果 sum
   * 那么，右边的数存在并且如果左边代表的值比右边的大，那么应该 sum 加上当前的值；如果左边代表的值比右边小，那么就应该 sum 减去当前的值
   */
  return _s.reduce((sum, item, index, arr) => !!arr[index + 1] && map[item] < map[arr[index + 1]] ? sum -= map[item] : sum += map[item], 0);
}