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



