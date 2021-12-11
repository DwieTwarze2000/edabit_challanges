// Create a function that calculates the profit margin given costPrice and salesPrice.
//  Return the result as a percentage formatted string, and rounded to one decimal.
//  To calculate profit margin you subtract the cost from the sales price, then divide by sales price.
// profitMargin(50, 50) ➞ "0.0%"
// profitMargin(28, 39) ➞ "28.2%"
// profitMargin(33, 84) ➞ "60.7%"

const profitMargin = (cost, sales) => {
    return (((cost - sales) / sales) * -100).toFixed(1) + '%';
};
