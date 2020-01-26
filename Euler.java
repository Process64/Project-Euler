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
public class Prime {
    public static void main(String[] args) {
        double out = 0;
        double m = 600851475143d;
        for (double n = 3; n < m; n += 2) {
            while (m % n == 0) {
                out = n;
                m = m / n;
            }
        }
        System.out.println("" + ((m == 1)?out:m));
    }
}
//3////////////////////////////////////////////////////////////////////
package findlaragestprimefactor;

public class FindLaragestPrimeFactor{

    boolean isPrime(long number) {
        for (long divider = 2; divider <= number / 2; divider++) {
            if (number % divider == 0) {
                return false;
            }

        }
        return true;
    }

    void calculateLargestPrimeFactor() {
        long largestPrimeFactor = 0;
        long x = 600851475143L;
        for(long factor = 3 ; factor <= x/2 ; factor = factor + 2){
            if(x%factor==0 & factor>largestPrimeFactor & isPrime(factor)){
                largestPrimeFactor = factor;
            }
        }
        System.out.println(largestPrimeFactor);
    }
  public static void main(String[] args) {

        MyProject m = new MyProject();
        m.calculateLargestPrimeFactor();
    }
}
//3////////////////////////////////////////////////////////////////////
import java.util.Scanner;

   class Primefactor
            {
                   public static void main(String args[])
                       {
                Scanner get=new Scanner(System.in);
                System.out.println("Enter a number");
                long number=get.nextLong();
                int count=0;
                long input=number;
                      for(long i=number;i>=1;number--)
                          {
             for(long j=number;j>=1;j--)
              {
                if(i%j==0)
                  {
                     count++;
                  }
               if(count==2)
                 {
                    if(input%j==0)
                       {
                          System.out.println(j);
                        }
                  }
              }
           }
     }
   }
//4////////////////////////////////////////////////////////////////////
/**
 * A simple implementation to solve Euler Problem #4 - Largest Palindrome Product.
 */
public class EulerProblemSolution {
    public static void main(String[] args) {
        int maxNumber = 999;
        long maxAnswer = 0;
        for(int i = maxNumber; i >=0; i--) {
            for(int j = maxNumber; j >= 0; j--) {
                long possibleAnswer = i * j;
                if(possibleAnswer == reverse(possibleAnswer) && possibleAnswer > maxAnswer) {
 maxAnswer =  possibleAnswer;
                }
            }
        }
        System.out.println(maxAnswer);
    }
    public static long reverse(long n)  {
        long reverse =  0;
        while ( n !=  0)  {
            long lastDigit =  n %  10 ;
 reverse =  reverse *  10  +  lastDigit;
 n / = 10;
        }
        return reverse;
    }
}
//4////////////////////////////////////////////////////////////////////
public class Palindrome {
public static void main (String [] args) {

   int largestnum = 0;
   Palindrome pp = new Palindrome();

   for (int i = 100; i <= 999; i++) {
       for (int k = 100; k <= 999; k++) {
            if (pp.checkPal(i * k) == true) {
                largestnum = i * k;
            }
        }
    }

   System.out.println(largestnum);
}


public boolean checkPal(int y) {
    String snum = Integer.toString(y);
    int snum_length = snum.length() - 1;
    String palindrome = new String("");

    for (int i = snum_length; i >= 0; i--) {
        palindrome = palindrome.concat(Character.toString(snum.charAt(i)));
    }

    if (snum.equals(palindrome)) {
        return true;
    }
    else {
        return false;
        }
    }
}
//4////////////////////////////////////////////////////////////////////
public static boolean isPalindrome(int number){
    //checks to see if a number is a palendrome. (can't start with 0)
    String numstring = Integer.toString(number);
    char[] strarr = new char[String.valueOf(number).length()+1];
    int x = 0;
    int y = String.valueOf(number).length()-1;
    for (int i=0;i<y+1;i++){
        strarr[i] = numstring.charAt(i);
    }
    for (int a=0;a<String.valueOf(number).length()-1;a++){
        if (strarr[x]!=strarr[y]){
            return(false);
        }
        x++;
        y--;
    }
    return(true);
}
public static int Problem4(){
    int pp = 0;
    int a = 0;
    for (int i=100;i<1000;i++){
        for (int j=100;j<1000;j++){
            pp = i*j;
            if (isPalindrome(pp)){
                if (pp>a){
                    a = pp;
                }
            }
        }
    }
    return(a);
}
//4////////////////////////////////////////////////////////////////////
