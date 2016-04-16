function sum(sum1, sum2) {
  var mySumAgain = document.getElementById('sumTotal');
  var mySum = sum1 + sum2;
  console.log('The sum of ' + sum1 + ' and ' + sum2 + ' is ' + mySum + '.');
  mySumAgain.textContent = 'The sum of ' + sum1 + ' and ' + sum2 + ' is ' + mySum + '.';
  return mySum;
}
function multiply(sum1, sum2) {
  var totalAgain = document.getElementById('multiplyTotal');
  var total = sum1 * sum2;
  console.log('The total of ' + sum1 + ' and ' + sum2 + ' is ' + total + '.');
  totalAgain.textContent = 'The total of ' + sum1 + ' and ' + sum2 + ' is ' + total + '.';
}
function sumAgain(var1, var2) {
  return var1 + var2;
}
function multiplyAgain(var1, var2) {
  return var1 * var2;
}
function sumAndMultiply(var1, var2, var3) {
  var array = [];
  var sumMultiplyAgain = document.getElementById('sumMultiply');
  array.push(sumAgain(sumAgain(var1,var2),var3));
  array.push(multiplyAgain(multiplyAgain(var1,var2),var3));
  sumMultiplyAgain.textContent = 'The sum total is ' + array.push(sumAgain(sumAgain(var1,var2),var3)) + ' and the product total is ' + array.push(multiplyAgain(multiplyAgain(var1,var2),var3));
  return array;
}
function sumArray(array) {
  var arraySumAgain = document.getElementById('arraySum');
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log("The numbers " + array + " have a sum of " + sum);
  arraySumAgain.textContent = "The numbers " + array + " have a sum of " + sum;
  return sum;
}

function productArray(arrayOne) {
  var product = 1;
  var productArrayAgain = document.getElementById('productArray');
  for (var i = 0; i < arrayOne.length; i++) {
    product *= arrayOne[i];
  }
  console.log('The numbers ' + arrayOne + ' have a product of ' + product);
  productArrayAgain.textContent = 'The numbers ' + arrayOne + ' have a product of ' + product;
  return product;
}
