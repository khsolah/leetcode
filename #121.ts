function maxProfit(prices: number[]): number {
  const len = prices.length
  let min = prices[0], result = 0

  for (let i = 1; i < len; i++) {
    if (min > prices[i]) {
      min = prices[i]
    } else if (prices[i] - min > result) {
      result = prices[i] - min
    }
  }

  return result
}

console.log(maxProfit([5,3,1]))