// function putDiscount(price,discount,){
//     let discountprice = price*discount/100;
//     let finalprice = price - discountprice;
//     console.log(finalprice);
// }
// putDiscount(1000,10);

// function printfactorial(n){
//     let fact = 1
//     for(let i=n;i>=1;i--){
//         fact = fact*i;
//     }
//     console.log(fact)
// }

// printfactorial(8);

// function Greatest(a,b,c){
//     if(a>b && a>c){
//         console.log(a);
//     }
//     else if(b>a && b>c){
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }

// Greatest(10,50,30);

//Write a function that returns the square of a number

// function printSquare(n){
//     square = n*n;
//     console.log(square);
// }

// printSquare(25)

// Write a function that returns the sum of numbers from 1 to n.

// function printSum(n){
//     let sum = 0;
//     for(let i=1;i<=n;i++){
//         sum = sum + i;
//     }
//     console.log(sum);
// }

// printSum(100)

// for odd integers only

// function printSum(n){
//     let sum = 0;
//     for(let i=1;i<=n;i++){
//         if(i%2 != 0){
//             sum = sum + i
//         }
//     }
//     console.log(sum);
// }

// printSum(100)

//printing absolute value of a number

// function AbsoluteValue(n){
//     countdigits = Math.abs(n)
//     console.log(countdigits)
// }

// AbsoluteValue(-35939)

// to calculate the number of digits 
 
// to find the number of digits in a numebr

// function Digits(n){
//     Absoluteofn = Math.abs(n)
//     if(n == 0){
//         console.log(1)
//     } 
//     else {
//         digits = Math.floor(Math.log10(n)+1)
//         console.log(digits)
//     }
// }

// Digits(99999)

//to reverese the number

// function ReverseNumber(n){
//     let Absolute0fn = Math.abs(n)
//     let reversed = 0
//     if(Absolute0fn == 0){
//         console.log(0)
//     }

//     let lastdigit = Absolute0fn%10
//      reversed = (reversed*10) + lastdigit
//     console.log(reversed) 
// }

// ReverseNumber(1091)

// function reverseNumber(n) {
//     let reversed = 0;

//     for(let n=Math.floor(n/10);n>0;n++) {
//         let digit = n % 10;
//         reversed = reversed * 10 + digit;
//     }
// console.log(reversed)
// }

// reverseNumber(1091)