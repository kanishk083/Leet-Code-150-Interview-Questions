var containsNearbyDuplicate = function(nums, k) {
    const seen = new Map();
    for(let i=0; i<nums.length;i++){
        const num = nums[i];

        if(seen.has(num) && i- seen.get(num) <= k){
            return true;
        }
        seen.set(num,i)
    }
    return false;
};