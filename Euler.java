public class Multiples {

    public static int multiplesSum(int n1, int n2, int limit) {
        int sum = 0;
        int n = Math.min(n1, n2);
        for(int i=n; i<limit; i++) {
            if(i%n1==0 || i%n2==0) {
                sum+=i;
            }
        }
        return sum;
    }

    public static void main(String[] args) {
        int total = multiplesSum(3,5,1000);
        System.out.println("Total sum is: " + total);
    }

}
//1//////////////////////////////////////////////////////////////
public static int multiplesSumOf(int n, int limit) {
    int target = (limit-1)/n;
    return n * target*(target+1)/2;
}

public static void main(String[] args) {
    int total = multiplesSumOf(3,1000) + multiplesSumOf(5,1000) - multiplesSumOf(15,1000);
    System.out.println("Total: " + total);
//1/////////////////////////////////////////////////////////////
fun solve(baseNumber: Int): Int {
    return (0..baseNumber - 1)
            .filter { it % 3 == 0 || it % 5 == 0 }
            .sum()
}
//1/////////////////////////////////////////////////////////////
var num = 1000
var numbers = []

for(var i = 0;  i < num; i++){
  if( i % 3 === 0|| i % 5 === 0){
     numbers.push(i)
  }
};

var sum = numbers.reduce((a, b) => a + b, 0);
//2//////////////////////////////////////////////////////////////
long val1 = 1, val2 = 1, valEven = 2, total = 0;
while (val2 < 4000000 && val1 < 4000000) {
    total += valEven; // only add even numbers to total
    val1 = val2 + valEven;
    val2 = val1 + valEven;
    valEven = val1 + val2;
}

System.out.println(total);
//2//////////////////////////////////////////////////////////////////
public class FibonacciTest {

    public static void main(String[] args) {
        long val1 = 1, val2 = 1, valEven = 2, total = 0;
        while (val2 < 4000000 && val1 < 4000000) {
            total += valEven; // only add even numbers to total
            val1 += val2 + valEven;
            val2 += val1 + valEven;
            valEven += val1 + val2;
            if (val1 < 1000L)
                System.out.println(val1 + " " + val2 + " " + valEven);
        }

        System.out.println(total);
    }

}
//2////////////////////////////////////////////////////////////////
public class FibonacciTest {

    public static void main(String[] args) {
        long val1 = 1, val2 = 2, val3 = 2, total = 0;
        while (val1 < 4_000_000L) {
            if (val1 < 1000L) {
                System.out.println(val1 + " " + val2 + " " + val3);
            }

            val3 = val1 + val2;
            val1 = val2;
            val2 = val3;
        }

        System.out.println(total);
    }

}
//2///////////////////////////////////////////////////////////////////
public class FibonacciTest {

    public static void main(String[] args) {
        long val1 = 1L, val2 = 2L, val3 = 2L, total = 0L;
        while (val1 < 4_000_000L) {
            val3 = val1 + val2;
            val1 = val2;
            val2 = val3;

            if (val1 % 2L == 0L) {
                System.out.println(val1);
                total += val1;
            }
        }

        System.out.println(total);
    }

}
//3////////////////////////////////////////////////////////////////////
