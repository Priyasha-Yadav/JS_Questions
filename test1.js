// 1. What will be the output of the following code?
// let a = [1, 2, 3];
// a.push(4);
// console.log(a);
//a) [1, 2, 3] b) [1, 2, 3, 4] c) [4, 1, 2, 3] d) Error

//[1,2,3,4]

// 2. What is the result of the following expression?
// let x = 10;
// let y = '10';
// console.log(x + y);
// a) 20 b) 10 c) NaN d) 1010

//1010

// //3. What will be the result of the following code?
// let obj = {name: 'Deep', age: 17};
// delete obj.name;
// console.log(obj);
// a) {name: 'Deep', age: 17}
// b) {name: 'Deep'}
// c) {age: 17}
// d) Error

//{age: 17}

// 4. Which data type is used to represent a true or false value in JavaScript?
// a) Boolean
// b) Number
// c) String
// d) Null

//Boolean

// 1. Guess the output of the following code:
// console.log(name);
// var name = “defined”;
// console.log(name);

//undefined
//defined

// 2. Find the error in the following javascript object code:
// let person = [
// name: 'Deep',
// age: 17
// ];
// console.log(person.name);
// console.log(person.age);

//Deep 
//17

// 3. Guess the output of the following code:
// let x = 10;
// let y = '10';
// console.log(x == y);
// console.log(x === y);

//true
//false


// 1. Write a program to swap two numbers
// let a=5;
// let b= 7;
// a=a+b
// b=a-b
// a=a-b
// console.log(a,b)

// //or

// let c= 1;
// let d=2;
// [c,d]=[d,c]
// console.log(c,d)

// //or

// let e = 4;
// let f =5;
// let temp =0
// temp= e
// e = f
// f= temp
// console.log(e,f)

// 2. Write a function to count the number of digits in a given number.
// let num =3267
// let count=0;
// let rem =0;
// while(num!=0){
//     // rem = num%10
//     // num = (num - rem)/10
//     num= Math.floor(num/10)
//     count = count + 1
// }
// console.log(count)

// 3. Write a program to print all prime numbers between two given numbers.
// let from = 2
// let to =10

// for(i=from+1;i<to;i++)
    
// {let factors = 0;
//     for(j=2;j<i;j++){
//         if(i%j == 0){
//             factors++
//         }

//     }
//     if(factors==0){
//         console.log(i)
//     }
// }

// OR

// Write a program to check whether a given number is an Armstrong number.
// let number = 153
// let sum =0
// let arr = number.toString().split('')
// for(i=0;i<arr.length;i++){
//     sum = sum + Math.pow(arr[i], arr.length)
// }
// if(sum==number){
//     console.log("Armstrong")
// }
// else{
//     console.log("Not an Armstrong")
// }

// 4. Write a program to print the Fibonacci sequence up to a given number of terms.
// let steps = 5
// let a =0;
// let b=1;
// let c =0;
// if(steps == 1){
//     console.log(a)
// }
// else if (steps==2)
// {
//     console.log(a)
//     console.log(b)
// }

// else{
//     console.log(a)
//     console.log(b)
//     for(i=1;i<=steps-2;i++){
//         c=a+b
//         a=b
//         b=c
//         console.log(c)
//     }
// }

// OR
// Write a program to calculate the factorial of a given number. 

// let number=5;
// let factorial = 1 ;
// for(i=1;i<=number;i++){
//     factorial*=i
// }
// console.log(factorial)