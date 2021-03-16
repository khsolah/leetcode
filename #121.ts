function maxProfit(prices: number[]): number {
  const len = prices.length
  let min, max, result = 0

  min = max = prices[0]
  for (let i = 1; i < len; i++) {
    if (min > prices[i]) {
      result = Math.max(max - min, result)
      min = max = prices[i]
    } else if (prices[i] > max) {
      max = prices[i]
    }
  }

  return Math.max(result, max - min)
}

console.log(maxProfit([5,3,1]))