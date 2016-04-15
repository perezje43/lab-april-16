
function sumArray(array) {
  // var array = [];
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log("The numbers " + array + " have a product of " + sum);
  return sum;
}
