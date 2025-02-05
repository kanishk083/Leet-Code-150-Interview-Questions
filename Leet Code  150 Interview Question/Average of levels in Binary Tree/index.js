var averageOfLevels = function(root) {
    if(root === null) return 0;
    let result=[];
    let temp=[root];
  
    while(temp.length){
      let newTemp=[]
      let sum=0;
      for(let node of temp){
          if(node.left)newTemp.push(node.left);
          if(node.right)newTemp.push(node.right);
          sum+=node.val
      }
      result.push(sum/temp.length)
      temp=newTemp
    }  
    return result;
  };