function maxProfit(prices) {
    let Buy=prices[0];
    prices[0]=0;
    let profit=0;

    for(let i= 1;i<prices.length;i++){
        if(Buy > prices[i]){
            Buy = prices[i];
            prices[i]=0;
        }else{
            profit = Math.max(prices[i]-Buy,profit)
        }
    }
    return profit;