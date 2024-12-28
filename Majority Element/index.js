var majorityElement = function(nums) {
    nums.sort()
    let result = nums[Math.floor(nums.length/2)]
    return result;
}