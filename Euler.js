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
