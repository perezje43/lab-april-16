function multiply(sum1, sum2) {
  var total = document.getElementById('multiplyTotal');
  total = (sum1 * sum2);
  console.log('The total of ' + sum1 + ' and ' + sum2 + ' is ' + total + '.');
  multiplyTotal.textContent = 'The total of ' + sum1 + ' and ' + sum2 + ' is ' + total + '.';
}
