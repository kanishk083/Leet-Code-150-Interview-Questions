var canCompleteCircuit = function(gas, cost) {
    let currTank=0 , totalTank=0 , pos=0
     for(let i=0; i<gas.length;i++){
        let tank = gas[i]-cost[i]
        currTank=currTank+tank;
        if(currTank<0){
            pos=i+1;
            currTank=0;
        }
        totalTank=totalTank+tank;
     }
     return totalTank<0?-1:pos;
};