var zigzagLevelOrder = function(root) {
    if(!root) return [];
    const queue=[root];
    const res=[];
    let depth=0;

    while(queue.length){
        const level=[];
        let levelSize=queue.length;

        while(levelSize){
            const current=queue.shift();
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);

            if(depth%2===0){
                level.push(current.val)
            }else{
                level.unshift(current.val)
            }
            levelSize--;
        }
        res.push(level);
        depth++;
    }
    return res;
};