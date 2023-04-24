// const removeFromArray = function () {
//     let i = 0;

//     for (i = 0; i <= 4; i++) {
//         let myArray = [1, 2, 3, 4];
//         myArray.splice(2, 1);
//         return myArray;
//     }
//     while (i <= 4) {
//         let myArray = [1, 2, 3, 4];
//         myArray.splice(1, 2);
//         return myArray;
//     }
    
// };

// function removeFromArray(arr) {
//         arr.splice(2, 1);
//         return arr;
// }

const removeFromArray = function (array, ...args) {
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
