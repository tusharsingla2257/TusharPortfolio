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
    // let sum = 0;
    // for(let i=1;i<=n;i++){
    //     if(i%2 != 0){
    //         sum = sum + i
    //     }
    // }
    // console.log(sum);
// }
 
// to find the number of digits in a numebr

// function Digits(n){
//     // Absoluteofn = Math.abs(n)
//     if(n == 0){
//         console.log(1)
//     } 
//     else {
//         digits = Math.floor(Math.log10(n)+1)
//         console.log(digits)
//     }
// }

// return function

// function add(a,b){
//     return (a+b);
// }

// // let val = add(3,5);
// // console.log(val);

// console.log(add(3,5))

//callback function

// const Sum = (n) =>{
//      let sum = 0;
//     for(let i=1;i<=n;i++){
//         if(i%2 != 0){
//             sum = sum + i
//         }
//     }
//     console.log(sum);
// }

// Sum(100);

// function to convert celcius to fareheit

// function convert(n){
//     let conversionformula = (n*9/5) + 32
//     console.log(conversionformula)
// }

// convert(32)


// function to give grades 

// function Grades(n){
//     if(n>=90){
//         console.log("A")
//     }
//     else if(n<90 && n>=75){
//         console.log("B")
//     }
//     else if(n<75 && n>=60){
//         console.log("C")
//     }
//     else{
//         console.log("Fail")
//     }
// }

// Grades(65)

// function Marks(n){
//      if(n>=90){
//          return("A")
//     }
//     else if(n<90 && n>=75){
//         return("B")
//     }
//     else if(n<75 && n>=60){
//         return("C")
//     }
//     else{
//         return("Fail")
//     }
// }

//to convert the celcius into fahrenheit

// let Grades = Marks(98)
// console.log(Grades)

// function convert(n){
//     return((n*9/5) + 32)
// }

// let Temperature = convert(32)
// console.log(Temperature)

