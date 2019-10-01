const arr1 = [1, 6, 4, 0]

// hard-coded
const arr2 = arr1.reduce((acc, e, i) => {
    return e > acc ? e : acc
}, -1000)

// not hard-coded
const BiggestNumber = (acc, e) => e > acc ? e : acc
const arr3 = arr1.reduce((BiggestNumber), -1000)

console.log(arr2) // 6
console.log(arr3) // also 6