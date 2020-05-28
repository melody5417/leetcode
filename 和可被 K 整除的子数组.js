和可被 K 整除的子数组
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    var result = 0
    var prefix = 0
    var map = new Map()
    map.set(0, 1)   // 余数为0时默认加1 是因为余数为0 自己就是一个子串 首次出现即可+1 但是其他余数的子串必须要等到ij 才可以
    A.forEach((element, index) => {
        prefix = (element + prefix) % K
        if (prefix < 0) {
            prefix += K;
        }
        let count = map.get(prefix) || 0
        result += count // index和之前所有出现的index都可以组合
        count++
        map.set(prefix, count)
    });
    return result
};

let A = [4,5,0,-2,-3,1]
let K = 5
console.log(subarraysDivByK(A, K))