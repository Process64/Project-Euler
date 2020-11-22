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
function problem11() {
    var answer = 0;
    var product = 0;
    var rows = 19; 
    var columns = 19; 
    
    var grid = new Array(
        [08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
        [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
        [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
        [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
        [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
        [24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
        [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
        [67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
        [24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
        [21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
        [78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
        [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
        [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
        [19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
        [04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
        [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
        [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
        [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
        [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
        [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48]
    );
    
    
    for ( i = 0; i <= rows; i++ ) {
        for ( j = 0; j < columns; j++ ) {

            if ( j < columns - 3) {
                product = grid[i][j] * grid[i][j+1] * grid[i][j+2] * grid[i][j+3];
                if ( product > answer ) {
                    answer = product;
                }
            }
            if ( i < rows - 3 ) {
                product = grid[i][j] * grid[i+1][j] * grid[i+2][j] * grid[i+3][j];
                if ( product > answer ) {
                    answer = product;
                }
                if ( j < columns - 3) {
                    product = grid[i][j] * grid[i+1][j+1] * grid[i+2][j+2] * grid[i+3][j+3];
                    if ( product > answer ) {
                        answer = product;
                    }
                }
                if ( j > 3) {
                    product = grid[i][j] * grid[i+1][j-1] * grid[i+2][j-2] * grid[i+3][j-3];
                    if ( product > answer ) {
                        answer = product;
                    }
                }
            }
        }
    }
    return answer;
}

console.log(problem11());
//12///////////////////////////////////////////////////////////////////
var x = 0, y = 1;

while (factors(x).length <= 500) {
	x += y;
  	y++;
}

console.log(x);

function factors(n) {
  let arr = [], i = 1, max = n;

  while (i < max) {
    if (n % i === 0) {
      arr.push(i);

      let k = n / i; 
      if (i !== k) {
        arr.push(k);
      }
      max = k;
    }

    i++;
  }  

  return arr.sort((a, b) => a - b);
}
console.log(factors(501));
//13///////////////////////////////////////////////////////
const num = 
"37107287533902102798797998220837590246510135740250\n" + 
"46376937677490009712648124896970078050417018260538\n" + 
"74324986199524741059474233309513058123726617309629\n" + 
"91942213363574161572522430563301811072406154908250\n" + 
"23067588207539346171171980310421047513778063246676\n" + 
"89261670696623633820136378418383684178734361726757\n" + 
"28112879812849979408065481931592621691275889832738\n" + 
"44274228917432520321923589422876796487670272189318\n" + 
"47451445736001306439091167216856844588711603153276\n" + 
"70386486105843025439939619828917593665686757934951\n" + 
"62176457141856560629502157223196586755079324193331\n" + 
"64906352462741904929101432445813822663347944758178\n" + 
"92575867718337217661963751590579239728245598838407\n" + 
"58203565325359399008402633568948830189458628227828\n" + 
"80181199384826282014278194139940567587151170094390\n" + 
"35398664372827112653829987240784473053190104293586\n" + 
"86515506006295864861532075273371959191420517255829\n" + 
"71693888707715466499115593487603532921714970056938\n" + 
"54370070576826684624621495650076471787294438377604\n" + 
"53282654108756828443191190634694037855217779295145\n" + 
"36123272525000296071075082563815656710885258350721\n" + 
"45876576172410976447339110607218265236877223636045\n" + 
"17423706905851860660448207621209813287860733969412\n" + 
"81142660418086830619328460811191061556940512689692\n" + 
"51934325451728388641918047049293215058642563049483\n" + 
"62467221648435076201727918039944693004732956340691\n" + 
"15732444386908125794514089057706229429197107928209\n" + 
"55037687525678773091862540744969844508330393682126\n" + 
"18336384825330154686196124348767681297534375946515\n" + 
"80386287592878490201521685554828717201219257766954\n" + 
"78182833757993103614740356856449095527097864797581\n" + 
"16726320100436897842553539920931837441497806860984\n" + 
"48403098129077791799088218795327364475675590848030\n" + 
"87086987551392711854517078544161852424320693150332\n" + 
"59959406895756536782107074926966537676326235447210\n" + 
"69793950679652694742597709739166693763042633987085\n" + 
"41052684708299085211399427365734116182760315001271\n" + 
"65378607361501080857009149939512557028198746004375\n" + 
"35829035317434717326932123578154982629742552737307\n" + 
"94953759765105305946966067683156574377167401875275\n" + 
"88902802571733229619176668713819931811048770190271\n" + 
"25267680276078003013678680992525463401061632866526\n" + 
"36270218540497705585629946580636237993140746255962\n" + 
"24074486908231174977792365466257246923322810917141\n" + 
"91430288197103288597806669760892938638285025333403\n" + 
"34413065578016127815921815005561868836468420090470\n" + 
"23053081172816430487623791969842487255036638784583\n" + 
"11487696932154902810424020138335124462181441773470\n" + 
"63783299490636259666498587618221225225512486764533\n" + 
"67720186971698544312419572409913959008952310058822\n" + 
"95548255300263520781532296796249481641953868218774\n" + 
"76085327132285723110424803456124867697064507995236\n" + 
"37774242535411291684276865538926205024910326572967\n" + 
"23701913275725675285653248258265463092207058596522\n" + 
"29798860272258331913126375147341994889534765745501\n" + 
"18495701454879288984856827726077713721403798879715\n" + 
"38298203783031473527721580348144513491373226651381\n" + 
"34829543829199918180278916522431027392251122869539\n" + 
"40957953066405232632538044100059654939159879593635\n" + 
"29746152185502371307642255121183693803580388584903\n" + 
"41698116222072977186158236678424689157993532961922\n" + 
"62467957194401269043877107275048102390895523597457\n" + 
"23189706772547915061505504953922979530901129967519\n" + 
"86188088225875314529584099251203829009407770775672\n" + 
"11306739708304724483816533873502340845647058077308\n" + 
"82959174767140363198008187129011875491310547126581\n" + 
"97623331044818386269515456334926366572897563400500\n" + 
"42846280183517070527831839425882145521227251250327\n" + 
"55121603546981200581762165212827652751691296897789\n" + 
"32238195734329339946437501907836945765883352399886\n" + 
"75506164965184775180738168837861091527357929701337\n" + 
"62177842752192623401942399639168044983993173312731\n" + 
"32924185707147349566916674687634660915035914677504\n" + 
"99518671430235219628894890102423325116913619626622\n" + 
"73267460800591547471830798392868535206946944540724\n" + 
"76841822524674417161514036427982273348055556214818\n" + 
"97142617910342598647204516893989422179826088076852\n" + 
"87783646182799346313767754307809363333018982642090\n" + 
"10848802521674670883215120185883543223812876952786\n" + 
"71329612474782464538636993009049310363619763878039\n" + 
"62184073572399794223406235393808339651327408011116\n" + 
"66627891981488087797941876876144230030984490851411\n" + 
"60661826293682836764744779239180335110989069790714\n" + 
"85786944089552990653640447425576083659976645795096\n" + 
"66024396409905389607120198219976047599490197230297\n" + 
"64913982680032973156037120041377903785566085089252\n" + 
"16730939319872750275468906903707539413042652315011\n" + 
"94809377245048795150954100921645863754710598436791\n" + 
"78639167021187492431995700641917969777599028300699\n" + 
"15368713711936614952811305876380278410754449733078\n" + 
"40789923115535562561142322423255033685442488917353\n" + 
"44889911501440648020369068063960672322193204149535\n" + 
"41503128880339536053299340368006977710650566631954\n" + 
"81234880673210146739058568557934581403627822703280\n" + 
"82616570773948327592232845941706525094512325230608\n" + 
"22918802058777319719839450180888072429661980811197\n" + 
"77158542502016545090413245809786882778948721859617\n" + 
"72107838435069186155435662884062257473692284509516\n" + 
"20849603980134001723930671666823555245252804609722\n" + 
"53503534226472524250874054075591789781264330331690";

let steps = num.split("\n");
let sum = 0;
for (let i in steps) {
  sum += Number(steps[i]);
}
let result = Number(String(sum).replace(/\./g, "").slice(0, 10)); 

console.log(result);
//14//////////////////////////////////////////////////////////////////////
function collatz_num(num) {
  if(num % 2 == 0) {
    return num / 2;
  }
  else {
    return (num * 3) + 1;
  }
}

function collatz_sequence(num) {
  var counter = 1;
  while(num != 1) {
    num = collatz_num(num);
    counter++;
  }
  return counter;
}

function longest_chain(num) {
  var max = 0;
  var max_index;
    
  for(var i=1; i<num; i++) {
    var sequence = collatz_sequence(i);
    if(sequence > max) {
      max = sequence;
      max_index = i;
    }
  }
  return max_index;
}

console.log(longest_chain(1000000));
//15/////////////////////////////////////////////////////////
