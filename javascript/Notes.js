// Javascript --> programming language used to write logic and funcvtionality in website. discoverd by Brandon Eich.  firstly it was named as MOCHA. later it was named as live script and then finally it is changed as Echma script(java script). current version of JS is ES6.


// Before Node js , Js was used as client side only(only for frontend design). because JS runs in browser and browsers have Js Engine that run your JS code

// for example -->Chrome uses V8 Js engine , Mozilla firefox uses Spider monkey js engine 

// Node Js uses this V8 engine to run javascript code outside the Browser


// Ways to Write Js --> internal , external

// Topics --> 
// Variable  --> done
// Data types --> done
// String and its method --> done
// loops --> done
// Array and its method --> done
// Objects
// functions
// Callback function
// Promises
// Async Await
// DOM
// Project

//1) Variable --> variables are used to store the Data
// How to declare a variable in jS --> let , var , const

// example of let -->
// A)
//  let x = 20;
// let x = 45;
// console.log(x)  //can not redeclare in case of let

// b)
    // let b = 5;
    //     b= 6
    //     console.log(b) // reassign is possible in let

// Example of var -->
 // A)
//  var x = 20;
// var x = 45;
// console.log(x)  // redeclare in possible in var

// b)
    // var b = 5;
    //     b= 6
    //     console.log(b) // reassign is possible in var

// Example of const -->
 // A)
//  const x = 20;
// const x = 45;
// console.log(x)  // redeclare in not possible in case of const

// b)
    // const b = 5;
    //     b= 6
    //     console.log(b) // reassign is not possible in const



// DataType --> Primitive , NonPrimitive

// a)Primitive --> can store single value only
// Example --> number , string , boolean, undefined , null
// Number -->
    // let x = 10
    // console.log(x)  //10

// String -->
    // let name = "shubham" //  'shubham' ,  `shubham`;
    // console.log(name)
    // console.log(typeof name)
    // console.log(typeof x)

    // let digit = "101";
    // console.log(digit)
    // console.log(typeof digit)

// Boolean --> true ,false
// let a = true 
// console.log(a)
// console.log(typeof a)

// Undefined --> it is a default value used by JS, when a variable is declared but its value is not defined it gives undefined
    // let x;
    // console.log(x)  //undefined

// Null --> user defined that is equal to nothing

// let x = null
// console.log(x)
// console.log(typeof x);  object
 
// How to check dataType -->using typeOf operator


// NonPrimitive --> can store collection of data -->
// example --> Array , Object

// Array --> can store collection of data in indexing form 
// let arr = [ 1, 20, "hello", true , [4,5,6]]
// console.log(arr[0]) //1
// console.log(arr[1]) //20
// console.log(arr[2]) // hello
// console.log(arr[3]) // true
// console.log(arr[4])  // [4,5,6]
// console.log(arr[4][2])  //6


// Object--> used to store collection of data in key and value form
// example -->

// let data = {
//     name:"one",
//     age:34,
//     languages:['hindi', 'english', 'spanish'],
//     details:{
//         houseNo:2,
//         city:"lucknow"
//     }
// }

// console.log(data.name) // one
// console.log(data['name']) // one
// console.log(data.languages) //['hindi', 'english', 'spanish']
// console.log(data.languages[2]) //spanish
// console.log(data.details) // {houseNo:2, city:'lucknow'}
// console.log(data.details.city) // lucknow


// String methods --> 
// a) length method --> 
//  let text = "hello how are you"  
//  console.log(text.length)  // 17

//b) slice method --> can cut or copy a portion from the string
// syntax --> slice(startIndex , endIndex) , end will cut 1 less
//  let text = "hello how are you" ;
//  let ans = text.slice(0, 9)
//  console.log(ans)  //hello how

//c) split method --> can convert a string into an array -->
//  let text = "hello how are you"
// //  ["hello how are you"]
// // ["hello", "how", "are", "you"]
// // ['h','e','l','l','o',' ','h'......]
// let ans1 = text.split() //["hello how are you"]
// console.log(ans1)

// let ans2 = text.split(' ');
// console.log(ans2) //['hello', 'how', 'are', 'you']

// let ans3 = text.split('')
// console.log(ans3) //['h', 'e', 'l', 'l', 'o', ' ', 'h', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u']


//d) trim method --> can remove extra spaces from string from start and end 
//e) replace and replace all method

//f) includes --> can find given value is present inside string or not

// let text = "hello how are you";
// console.log(text.includes('areee'))// true or false

//g) charAt method --> get any index value inside string
// let text = "hello how are you";
// console.log(text.charAt(4))  //o
// console.log(text[4])  // o

//h) toLowerCase or toUpperCase --> 
// let text = "hello how are you";
// console.log(text.toUpperCase()) //HELLO HOW ARE YOU


// ************Array MEthods **********************
// a) length --> 
    // let arr = ["hindi", "english", "maths", "art"];
    // console.log(arr.length)  //4

// b) slice -->slice(startIndex , endIndex)
// let arr = ["hindi", "english", "maths", "art"];
// let ans = arr.slice(0, 3)
// console.log(ans)  //['hindi', 'english', 'maths']

// c) push method --> can add an element at the last
// let arr = ["hindi", "english", "maths", "art"];
// arr.push(10);
// arr.push(true);
// console.log(arr) //["hindi", "english", "maths", "art", 10, true];

// d) pop() --> can remove an element at the last
// let arr = ["hindi", "english", "maths", "art"];
// arr.pop();
// console.log(arr)// ["hindi", "english", "maths"];

// e)unshift --> can add an element at the start
// f)shift --> can remove an element at the start

// g)splice method --> can add or remove element at any place in array
// syntax --> splice(startIndex , no of element count u want to remove , element name u want to add);

// // 1) add at any place
// let arr = ["hindi", "english", "maths", "art"];
// arr.splice(3 , 0, "bye bye")
// console.log(arr)

// 2) remove at any place
// let arr = ["hindi", "english", "maths", "art"];
// arr.splice(1,2)
// console.log(arr)

// 3)mix case add and remove value or update a value --> 

//  let arr = ["hindi", "english", "maths", "art"];
//  arr.splice(2,1,"physics")
// console.log(arr)

// arr[2] = "physics";
// console.log(arr)


// loops --> for loop , while loop, do while loop

//  let arr = ["hindi", "english", "maths", "art"];
//  for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
//  }

// important array methods --> filter method , forEach , map method-->


// *************************21-07-2026********************************
// object methods -->
//a) add or update or delete value in object -->

    // let data = {
    //     name:"one",
    //     age:45
    // }
    // delete data.age;

    // console.log(data)

    // data.course  = "fullstack";
    // data.age = 33;

    // console.log(data)  //{name:"one", age:33 ,course:"fullstack"}

//b) convert Object into string --> JSON.stringify() , JSON.parse()

// let data = {
//     name:"one",
//     age:10,
//     course:"fullstack"
// }

// let ans = JSON.stringify(data) // covert obj into string
// console.log(ans)
// console.log(typeof ans)
// console.log(ans[0])


// let ans2 = JSON.parse(ans);
// console.log(ans2)


// **************************

// Function --> are reusable piece of code used to perform a specific task. a function only run when something invokes it (call it)

// example of function -->
// data recieved in function decleration is known as parameters 
    // function sum(a , b , c ){  // function decleration
    //     console.log("all is well")
    //     console.log(a)
    //     console.log(b)
    //     console.log(c)
    // }
    // sum(10 , [4,5,6] , {name:"one"}) // function calling
// data passed in function calling is known as arguments
// let a = 10;
// let b = 5;
// console.log(a+b)
// console.log(a*b)

// let x = 1;
// let y = 5;
// console.log(x)
// console.log(y)

// let z = 88;
// let r = 5;
// console.log(z+r)
// console.log(z*r)


// Arrow function  --> 

    // let a = 10;
    // let b = "" // [] , {}

    //function expression( when a function is used as a variable)
    // let c = function(){ 
    //     console.log("running")
    // }
    // c()

    // in case of arrow function we do not use function key word we use arrows. introduced in ES6
    // let print = ()=>{ // this is arrow function
    //     console.log("i am arrow function")   
    // }
    // print()




// Important*******
// CallBack functions -->  functions that are passed into another function are known as CB function

// function that take another function as an argument are known as HOF(higher order function)

// function one(){
//     console.log("i am one")
// }

// function two(a,b,c){
//     console.log(a)
//     console.log(b)
//     c()
// }

// two(10, "hello" , one )
// console.log(one)


// Timer fuctions  --> setTimeout , setInterval
// Syntax --> setInterval(cb , time(ms))

// let count = 0
// setInterval(function(){
//     count++;
//     // console.log("hello " + count)
//     console.log(`hello ${count}`)
// } , 3000)

// let count = 0
// setInterval(()=>{
//     count++;
//     // console.log("hello " + count)
//     console.log(`hello ${count}`)
// } , 3000)


// filter method , map method , forEach method --> 
// forEach --> used to traverse through an array
// let arr = [10, 20, 30, 50 ,90];
// arr.forEach((val, i)=>{
//     console.log(val, i)
// })

// map method --> used to travers  through an array and can also return a new array;
// let arr = [10, 20, 30, 50 ,90];
// arr.map((val, i)=>{
//     console.log(val, i)
// })
// let arr = [10, 20, 30, 50 ,90];

// let ans = arr.map((val, i)=>{  //[11, 21, 31, 51, 91]
//         return val+1
// })
// console.log(ans)


// filter method --> can filter out any value 
// let arr = [10, 20, 30, 50 ,90];
// let ans = arr.filter((val)=> val!= 40);
// console.log(ans)

// find the name of products whose name is between 10 to 40 thousand including 10 and 20;

// let arr = [
//     {name:"iphone" , price:80000, rating:2}, //0
//     {name:"samsung" , price:50000, rating:4}, //1
//     {name:"x-box" , price:10000, rating:5}, //2
//     {name:"realme" , price:35000, rating:3}, //3
//     {name:"oppo" , price:25000, rating:2.5}, //4
//     {name:"nokia" , price:45000, rating:4.5}, //5
// ]







