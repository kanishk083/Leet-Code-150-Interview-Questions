var longestCommonPrefix = function(strs) {
    
    for(let i=0; i<strs.length;i++){
        for(let j=1;j<strs.length;j++){
            if(strs[0][i]!=strs[j][i]){
                return strs[0].slice(0,i)
            }
        }
    }
    return strs[0]
};