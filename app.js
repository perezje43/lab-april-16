function sum(var1, var2) {
  return var1 + var2;
}
function multiply(var1, var2) {
  return var1 * var2;
}
function sumAndMultiply(var1, var2, var3) {
  var array = [];
  array.push(sum(sum(var1,var2),var3));
  array.push(multiply(multiply(var1,var2),var3));
  return array;
}
