const arr = [1, 6, 4, 0]

const BiggestNumber = (acc, e) => e > acc ? e : acc
const Biggest = arr.reduce((BiggestNumber), -1000)
