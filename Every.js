const arr1 = [1, 2, -1, 0]
const arr2 = [3, 5, 2, 7]

const isBelowZero = (acc, e) => e < 0 ? true : acc
const ans1 = arr1.reduce((isBelowZero), false)
const ans2 = arr2.reduce((isBelowZero), false)
