// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(number1, number2)
{
  var num = Math.max(number1, number2);
  return num;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

console.log(longestStringReduce(words));
function longestStringReduce(arr) {
  return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}
// Progression #3: Net Price

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
console.log(numbers.reduce(netprice))
function netprice(total,i)
{
    return total + i;
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

console.log(numbersAvg.reduce(numberAvg))
function numberAvg(total,i)
{
    return (total + i)/numbersAvg.length;
}
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
console.log(mixedArr.reduce(sum))
function sum(total,i)
{
  if(typeof(i)=="string")
  total += (i.length);
  else
  total += i;
  return total;
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

console.log(Math.floor(avglen(wordsArr)))
function avglen(word)
{
  let total = 0;
  word.forEach(e => {
    total += e.length;
    total /= 2;
  });
  return total;
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

// Progression #6: Find elements

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
let str = wordsFind[0];
console.log(str);
wrdFnd(wordsFind,str);
function wrdFnd(wordsFind,str)
{
  var result = 0;
  for(var i = 0; i<wordsFind.length;i++)
  {
    var n = str.localeCompare(wordsFind[i]);
    if(n==0)
    return "true";
  }
    return "false";
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function repetition(wordsCount)
{
  var arrayCount = [];
  for(var i = 0; i < wordsCount.length; i++)
  {
    count = 0;
    for(var j = 0; j < wordsCount.length; j++)
    {
      if(wordsCount[i]==wordsCount[j])
      count++;
    }
    arrayCount[i] = count;
  }
  return arrayCount;
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix)
{
  var product = [];
  var count = 0;
  console.log(matrix);
  for(var i = 0; i < matrix.length-1; i++)
  {
    for(var j = 0; j < matrix.length-1; j++)
    {
      //matrix[i][i+1]*matrix[i+1][j]*matrix[i+1][j+1];
       product[++count] = (matrix[i][i+1]) * (matrix[i+1][j]) * (matrix[i+1][j+1]);
    }
  }
  return Math.max[product];
}