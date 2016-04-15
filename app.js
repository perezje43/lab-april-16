function sumAndMultiply(var1, var2, var3) {
  var total = document.getElementById('sumAndMultiplyTotal');
  totalSum = (var1 + var2 + var3);
  totalMultiply = (var1 * var2 * var3);
  console.log('The total of ' + var1 + ' and ' + var2 + ' and ' + var3 + ' is ' + totalSum + '.');
  sumAndMultiplyTotal.textContent = 'The total of ' + var1 + ' and ' + var2 + ' and ' + var3 + ' is ' + totalSum + '.';
  console.log('The numbers ' + var1 + ' and ' + var2 + ' and ' + var3 + ' product is ' + totalMultiply + '.');
  sumAndMultiplyTotal.textContent = 'The numbers ' + var1 + ' and ' + var2 + ' and ' + var3 + ' product is ' + totalMultiply + '.';
}
