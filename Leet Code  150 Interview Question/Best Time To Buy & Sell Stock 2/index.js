var maxProfit = function(prices) {
    let total =0;

    for (let i=1;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            let diff = prices[i]-prices[i-1]

            total+=diff;
        }
    }
    return total;
};