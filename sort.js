function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a list of numbers separated by spaces: ', (input) => {
    const numbers = input.trim().split(' ').map(Number);
    const sortedNumbers = bubbleSort(numbers);
    console.log('Sorted numbers:', sortedNumbers);
    rl.close();
});
