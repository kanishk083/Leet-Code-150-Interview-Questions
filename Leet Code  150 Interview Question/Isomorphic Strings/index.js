var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    
    const map={}
  
    for(let i=0;i<s.length;i++){
      const letterA=s[i];
      const letterB=t[i];
  
      if(map[letterA]===undefined){
          map[letterA]=letterB;
      }else if (map[letterA]!==letterB){
          return false;
      }
    }
    return true;
  };