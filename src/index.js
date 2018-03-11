module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let counter = 0;
  let length = array.length;
  if (!(length)) {
    return 0;
  }
  if (length === 1) {
    return 1;
  }
  let array2 = [];
  array.sort();
  for (let i = 1; i < length; i++) {
    while (array[i] <= array[i-1] + 1) {
      counter++;
      i++;
    }
    if (counter > 1) {
      array2.push(counter);
    }
    i += counter;
    counter = 0;
  }
  array2.sort();
  return array2[array2.length - 1];
}
