var romanToInt = function(s) {
    const Map ={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    }

 let result = 0;
 for(i=0;i<s.length;i++){
    const curr = Map[s[i]]
    const next = Map[s[i+1]]
    
    if(curr < next){
        result += next - curr;
        i++
    }else{
        result+=curr;
    }
 }
 return result;
};