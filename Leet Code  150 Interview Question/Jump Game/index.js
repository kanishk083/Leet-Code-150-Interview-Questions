var canJump = function(nums) {
    let target =nums.length - 1;

    for(let i=nums.length;i>=0;i--){

        if(i + nums[i] >= target){
            target=i;
        }
    }
    return target===0;
};