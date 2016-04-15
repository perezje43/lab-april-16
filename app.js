function sum(sum1, sum2) {
  var mySum = document.getElementById('sumTotal');
  mySum = (sum1 + sum2);
  console.log('The sum of ' + sum1 + ' and ' + sum2 + ' is ' + mySum + '.');
  sumTotal.textContent = 'The sum of ' + sum1 + ' and ' + sum2 + ' is ' + mySum + '.';
}
