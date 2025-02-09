var jump = function(nums) {
    let n= nums.length-1;
    let jumps=0;
    let currentEndJump=0;
    let farthest=0;

    for(let i=0;i<n-1;i++){
        farthest=Math.max(farthest,i+nums[i])
        if(i===currentEndJump){
            jumps++
            currentEndJump=farthest;
        }
    }
    return jumps;
};