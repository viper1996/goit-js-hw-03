function filterArray(numbers, value) {
    let filteredArray = [];
    for (let number of numbers) {
        if (number > value) {
            filteredArray.push(number);
        }
    }
    return filteredArray;
}