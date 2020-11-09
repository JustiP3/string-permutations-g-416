function findAllPermutations(str) {
    const stringAsAnArray = str.split("")
    let allPermutations = [str]
    const permutations = factorial(stringAsAnArray.length)
    let shiftedArray = stringAsAnArray

    while (allPermutations.length < permutations) {
        let shiftCount = 0        
        let placeholder 

        while (shiftCount < stringAsAnArray.length - 1) {
            placeholder = shiftedArray[shiftCount]
            shiftedArray[shiftCount] = shiftedArray[shiftCount + 1]
            shiftedArray[shiftCount + 1] = placeholder

            const newStr = shiftedArray.join("")
            if (allPermutations.length != permutations) {
                allPermutations.push(newStr)     
            }
                   
            shiftCount += 1 
        }
    }
    return allPermutations
}

function factorial(num) {
    let factorial = 1 
    while (num > 1 ) {
        factorial *= num 
        num -= 1 
    }
    return factorial 
}

// move first letter one position to the right until it is the last char
// stated differently: maintain a shift count 
// swap array[shift count] with array [shift count + 1]
// abc -> bac -> bca 
//then restart with the new first char 
//bca -> cba -> cab 
//again
//cab -> acb -> abc 
// do this until our permutations array == (string.length) factorial a.k.a. (the total number of permutations)
// 3! = 3 * 2 * 1 = 6 