const arr = [1, 3, 0, 2]

const SmallestNumber = (acc, e) => e < acc ? e : acc
const Smallest = arr.reduce((SmallestNumber), 1000)
