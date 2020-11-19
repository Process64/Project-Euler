//1//////////////////////////////////////////////////////////////////////////
let num = 1000
let numbers = []

for(var i = 0;  i < num; i++){
  if( i % 3 === 0|| i % 5 === 0){
     numbers.push(i)
  }
};

let sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);
//2///////////////////////////////////////////////////////////////////////////
function f() {
    let f1 = 1;
    let f2 = 1;
    let total = 0;
    while (f2 < 4000000) {
        let t = f1 + f2;
        if (t % 2 == 0)
            total += t;
        f1 = f2;
        f2 = t;
    }
    return total;
}
console.log(f()); //4613732
//3/////////////////////////////////////////////////////////////////////////
const originalTarget = target = 600851475143;
let i = 2;
while(i < target) {
	while(target % i === 0) {
		(function(newtarget) {
			console.log(target  + i + newtarget);
			target = newtarget;
		})(target / i)
	}
	i++;
}
console.log(target + originalTarget); 
//4//////////////////////////////////////////////////////////////////////////
function a() {
    let x,y,z, i = 999, testPalindrome = 0, palindromeDiv = 0;
    for (x = 9; x > 0; x--) {
        for (y = 9; y >= 0; y--) {
            for (z = 9; z >= 0; z--) {
              latestPalindrome = 100001 * x + 10010 * y + 1100 * z;
              for (i = 999; i >= 100; i--) {
                if (latestPalindrome % i === 0) {
                  palindromeDivider = latestPalindrome / i
                  if(palindromeDivider > 999) break;
                  if (palindromeDivider >= 100) {
                    return [
                      "palindrome is ", palindromeDivider, " x ", i,
                      " = ", latestPalindrome ].join("");
                  }
                }
              }
            }
        }
    }
};
console.log(a());
//5//////////////////////////////////////////////
let i = 1;
function myFunction (num) {
  var result = i / num
  return parseInt(result) === result
}
while (true) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  if (arr.every(myFunction)) {
    console.log(i)
    break;
  } else {
    i++
    continue;
  }
}
//6/////////////////////////////////////////////////////////////////////////////
let square = 0;
let square_sum = 0;
let sum = 0;
for(let i = 1; i <= 100; i++){
	let square = Math.pow(i, 2);
	square += square;
	sum += i;
}
square_sum = Math.pow(sum, 2);
let diff = square_sum - square;
console.log(diff);
//7/////////////////////////////////////////////////////////////////////////////
function prime(index) {
  let i;
  let primes = [2, 3];
  let n = 5;

  function isPrime(n) {
      let i = 1;
      let p = primes[i];
      limit = Math.ceil(Math.sqrt(n));
      while (p <= limit) {
          if (n % p === 0) {
              return false;
          }
          i += 1;
          p = primes[i];
      }
      return true;
  }

  for (i = 2; i <= index; i += 1) {
      while (!isPrime(n)) {
          n += 2;
      }
      primes.push(n);
      n += 2;
  }
  return primes[index - 1];
}

console.log(prime(10001));
//8//////////////////////////////////////////////////////////////////////
let grid = `73167176531330624919225119674426574742355349194934
    96983520312774506326239578318016984801869478851843
    85861560789112949495459501737958331952853208805511
    12540698747158523863050715693290963295227443043557
    66896648950445244523161731856403098711121722383113
    62229893423380308135336276614282806444486645238749
    30358907296290491560440772390713810515859307960866
    70172427121883998797908792274921901699720888093776
    65727333001053367881220235421809751254540594752243
    52584907711670556013604839586446706324415722155397
    53697817977846174064955149290862569321978468622482
    83972241375657056057490261407972968652414535100474
    82166370484403199890008895243450658541227588666881
    16427171479924442928230863465674813919123162824586
    17866458359124566529476545682848912883142607690042
    24219022671055626321111109370544217506941658960408
    07198403850962455444362981230987879927244284909188
    84580156166097919133875499200524063689912560717606
    05886116467109405077541002256983155200055935729725
    71636269561882670428252483600823257530420752963450`;


function lAN(grid, conseLength = 4, separator = "\n") {
  let gridData = grid.split("\n"),
    larPro = 0;

  for (let row in gridData) {
    curRow = gridData[row].split('').map(x => parseInt(x));

    for (let i = 0; i < curRow.length - conseLength; i++) {
      combination = curRow.slice(i, i + conseLength);
      if (!combination.includes(0)) {
        product = combination.reduce(function(a, b) {
          return a * b
        });
        if (larPro < product) larPro = product;
      }
    }
  }

  return larPro;
}

console.log(lAN(grid, 13));
//9/////////////////////////////////////////////////////////////////////////
let arrPy = [];
for (var i = 1; i <= 1000; i++) {
  arrPy.push(i);
}
let allTrip = [];
for (var i = 0; i < arrPy.length; i++) {
  for (var k = 0; k < arrPy.length; k++) {
    for (var p = 0; p < arrPy.length; p++) {
      let aSq = Math.pow(arrPy[i],2);
      let bSq = Math.pow(arrPy[k],2);
      let cSq = Math.pow(arrPy[p],2);
      if(aSq + bSq == cSq && arrPy[i] + arrPy[k] + arrPy[p] == 1000) {
        allTrip.push([arrPy[i],arrPy[k],arrPy[p]]);
      }
    }
  }
}
let product1 = allTrip[0][0] * allTrip[0][1] * allTrip[0][2];
console.log(product1);
//10/////////////////////////////////////////////////////////////////////

function primeNumberGen(param){
  if(param === 1){
    return false;
  }
  if(param === 2){
    return true;
  }
  if(param % 2 === 0){
    return false;
  }
  let ceil = Math.ceil(Math.sqrt(param));
  for(var i = 3; i <= ceil; i += 2){
    if(param % i === 0){
      return false;
    }
  }
  return true;
}

function sumPrimes(param){
  let array = [];
  for(var j = 2; j <= param; j++){
    if(primeNumberGen(j)){
      array.push(j);
    }
  }
  let sumArray = array.reduce(function add(a,b){
    return a + b;
  }, 0);
  let answer = function(){
    return sumArray;
  }
  return answer();
}
let answer = function(param){
  return sumPrimes(param);
} 
console.log(answer(2000000)); // 142913828922
//11////////////////////////////////////////////////////////////
