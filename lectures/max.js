// function findMinMax1(numbers){
//
//     let maxValue = [];
//
//     for (let i = 1; i < numbers.length; i++ ){
//         if(numbers[i] > maxValue) {
//             maxValue = numbers[i];
//         }
//
//         return maxValue;
//     }
// }
// function findMinMax2(numbers){
//     let maxValue = -Infinity;
//
//     for (let i = 0; i < numbers.length; i++ ){
//         if(numbers[i] > maxValue) {
//             maxValue = numbers[i];
//         }
//         return maxValue;
//     }
// }
function max(numbers) {
    let maxValue = -Infinity;

    let item;
    for (item of numbers) {
        if (item > maxValue)
            maxValue = item;
    }
    return maxValue;
}

function max2([first, ...numbers]) {
    if (numbers.length === 0) {
        return first;
    }
    if (first <= numbers[0]) {
        return max2(numbers);
    }
    return max2([first, ...numbers.slice(1)]);
}
console.log(max([8]), 'one element test, must return 8');
console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(max([8, 17]), '2 elements test, must return 17');
console.log(max2([8]), 'one element test, must return 8');
console.log(max2([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(max2([8, 17]), '2 elements test, must return 17');

// function max2(numbers) {
//     let maxValue = numbers[0];
//     if(numbers[i] > maxValue){
//         return maxValue;
//     }
//     return max2(numbers[i] - 1)
// };

// function goThroughInteger(array) {
//     var solutionArray = [];
//     var max = 0;
//     for (var i = 0; i <= array.length; i++) {
//         for (var j = i + 1; j <= array.length; j++) {
//             var currentSlice= array.slice(i,j);
//             var uniqSet = [...new Set(currentSlice)];
//             if(uniqSet.length <3) {
//                 if(currentSlice.length>max) {
//                     max= currentSlice.length;
//                 }
//             }
//         }
//     }
//     console.log(max);
// }

goThroughInteger = (list) => {
    let scores = list.reduce((slices, num, pos) => {
        let valid = [num];
        let count = 0;
        for (let i = pos; i < list.length; i++) {
            if (valid.indexOf(list[i]) == -1) {
                if (valid.length < 2) {
                    valid.push(list[i]);
                    count++;
                } else {
                    break;
                }
            } else {
                count++;
            }
        }
        slices[pos] = { pos, count };
        return slices;
    }, []);

    scores.sort((a, b) => b.count - a.count);
    let max = scores[0];
    return list.slice(max.pos, max.pos + max.count);
};

// console.log(goThroughInteger([1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 6, 2, 1, 8]));
// console.log(goThroughInteger([58, 800, 0, 0, 0, 356, 8988, 1, 1]));

// goThroughInteger([1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 6, 2, 1, 8]);
// console.log(goThroughInteger([8]), 'one element test, must return 8');
// console.log(goThroughInteger([1, 8, 37, 5, 17]), '5 elements test, must return 37');
// console.log(goThroughInteger([8, 17]), '2 elements test, must return 17');