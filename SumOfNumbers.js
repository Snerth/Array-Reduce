const arr1 = [1, 2, 3]

// hard-coded
const arr2 = arr1.reduce((acc, e) => {
    return acc + e
}, 0)

// not hard-coded
const Sum = (acc, e) => acc + e
const arr3 = arr1.reduce((Sum), 0)

console.log(arr2) // 6
console.log(arr3) // also 6