const a = [1, 2, 3, 4]

function sumArrayWithOddEvenNumbers(numbers) {
    return numbers.reduce((result, curr) => {
        if(curr % 2 !== 0) {
            curr = curr * 2
        } else {
            curr = curr / 2
        }
        return result + curr
    }, 0)
}

console.log(sumArrayWithOddEvenNumbers(a))