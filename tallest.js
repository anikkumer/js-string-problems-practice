// function maxInArray(numbers){
//     console.log('array inside the array', numbers);
// }

// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log('tallest person is: ', tallest);

// -------------------------------------------------------------------------------------------------

// function maxInArray(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         console.log(element);
//     }
// }

// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log('tallest person is: ', tallest);

// ---------------------------------------------------------------------------------------------


function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 190, 120,165, 137,265];
const tallest = maxInArray(heights);
console.log('tallest person is:', tallest);