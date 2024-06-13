function makeArray(firstArray, secondArray, maxLength) {
    let newArray = [...firstArray, ...secondArray];
    if (newArray.length > maxLength) {
        newArray = newArray.slice(0, maxLength);
    }
    return newArray;
}