//1//////////////////////////////////////////////////////////////////////////
var n = 1000;

var multiplesOfThree        = Math.floor((n - 1) /  3);
var multiplesOfFive         = Math.floor((n - 1) /  5);
var multiplesOfThreeAndFive = Math.floor((n - 1) / 15);

var sum =  3 * multiplesOfThree        * (multiplesOfThree        + 1) / 2
        +  5 * multiplesOfFive         * (multiplesOfFive         + 1) / 2
        - 15 * multiplesOfThreeAndFive * (multiplesOfThreeAndFive + 1) / 2;
console.log(sum);
//1////////////////////////////////////////////////////////////////////////////
var num = 1000
var numbers = []

for(var i = 0;  i < num; i++){
  if( i % 3 === 0|| i % 5 === 0){
     numbers.push(i)
  }
};

var sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);
//2////////////////////////////////////////////////////////////////////////////
function f() {
  var fib = [];
  fib.push(1,1);
  var i = fib.length;
  var total = 0;
  while(fib[i-1] < 4000000) {
    var x = fib[i-2] + fib [i-1];
    fib.push(x);
    i = fib.length;
    if(x % 2 == 0) {
      total += x;
    }
  } return total;
}

console.log(f()); //4613732
//2///////////////////////////////////////////////////////////////////////////
function f() {
    var f1 = 1;
    var f2 = 1;
    var total = 0;
    while (f2 < 4000000) {
        var t = f1 + f2;
        if (t % 2 == 0)
            total += t;
        f1 = f2;
        f2 = t;
    }
    return total;
}
console.log(f()); //4613732
//3/////////////////////////////////////////////////////////////////////////
