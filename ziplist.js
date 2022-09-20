const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];
function zipList(str, num) {
  const total = [];
  for (let i = 0; i < str.length; i++) {
    total.push(str[i]);
    total.push(num[i]);
  }
  return total;
}

function zipListTheSimpleWay(str, num) {
  return _.flatten(_.zip(str, num));
}
console.log(zipList(letters, numbers));
console.log(zipListTheSimpleWay(letters, numbers));
