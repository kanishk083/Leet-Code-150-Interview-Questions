var canConstruct = function(ransomNote, magazine) {
    
    let hash ={}

    for(let ch of magazine){
        hash[ch]=hash[ch]?hash[ch]+1: 1;
    }
    for(let ch of ransomNote){
        if(!hash[ch] || hash[ch]==0){
            return false;
        }
        hash[ch]--;
    }
    return true;
};