// function sum(sum1, sum2) {
//   var mySum = document.getElementById('sumTotal');
//   mySum = (sum1 + sum2);
//   console.log('The sum of ' + sum1 + ' and ' + sum2 + ' is ' + mySum + '.');
//   sumTotal.textContent = 'The sum of ' + sum1 + ' and ' + sum2 + ' is ' + mySum + '.';
// }
// function multiply(sum1, sum2) {
//   var total = document.getElementById('multiplyTotal');
//   total = (sum1 * sum2);
//   console.log('The total of ' + sum1 + ' and ' + sum2 + ' is ' + total + '.');
//   multiplyTotal.textContent = 'The total of ' + sum1 + ' and ' + sum2 + ' is ' + total + '.';
// }
// function sum(var1, var2) {
//   return var1 + var2;
// }
// function multiply(var1, var2) {
//   return var1 * var2;
// }
// function sumAndMultiply(var1, var2, var3) {
//   var array = [];
//   array.push(sum(sum(var1,var2),var3));
//   array.push(multiply(multiply(var1,var2),var3));
//   return array;
// }
// function sumArray(array) {
//   // var array = [];
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   console.log("The numbers " + array + " have a sum of " + sum);
//   return sum;
// }

function productArray(array) {
  var product = 1;
  for (var i = 0; i < array.length; i++) {
    product *= array[i];
  }
  console.log('The numbers ' + array + ' have a product of ' + product);
  return product;
}
