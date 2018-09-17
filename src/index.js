module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let counter = 0;
  let length = array.length;
  if (!length) {
    return 0;
  }
  if (length === 1) {
    return 1;
  }
  let array2 = [];
  array.sort((a, b) => a - b);
  for (let i = 1; i < length; i++) {
    let j = i;
    while (array[j] === array[j-1]+1 || (array[j] === array[j-1])) {
      if (array[j] === array[j-1]+1) {
        counter++;
      }
      j++;
    }
    i += j-i;
    array2.push(counter+1);
    counter = 0;
  }
  array2.sort((a, b) => b - a);
  return array2[0];
}
