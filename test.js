// const first = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, '第一个')
// })
// const second = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, '第二个')
// })

// first.then(res=>console.log(res))
// second.then(res=>console.log(res))
// console.log("异步代码运行时并不影响后面代码的执行！")

// Promise.race([first, second]).then(result => {
//     console.log(result) // 第二个
// })

// const promiseToDoSomething = () => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve('做些事情'), 10000)
//     })
//   }
  
//   const watchOverSomeoneDoingSomething = async () => {
//     const something = await promiseToDoSomething()
//     return something + ' 查看'
//   }
  
//   const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
//     const something = await watchOverSomeoneDoingSomething()
//     return something + ' 再次查看'
//   }
  
//   watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
//     console.log(res)
//   })

// function foo() {
//     return new Promise((resolve, reject) => {
//       resolve('hello world!')
//     });
//   }
  
//   // 通过async/await去操作得到的Promise对象
//   (async function () {
//     result = await foo()
//     console.log(Object.prototype.toString.call(result))  // "hello world!"
//   })()

// const doSomethingAsync = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('做些事情'), 3000)
//   })
// }

// const doSomething = async () => {
//   console.log(await doSomethingAsync())
//   console.log("判断在await的时候会不会执行完我再去执行await")  //结果是不会
// }

// console.log('之前')
// doSomething()
// console.log('之后')



// const demo = ()=>{
//     var a = 2
//     setTimeout(()=>{
//         return a =+1
//     },2000)
//     return a
// }
// const b = demo()
// console.log(b)





// function* gen(){
//     console.log(yield demo())
//     console.log("判断于何时执行此段代码")
//   }
  
//   var g = gen();
//   g.next() // { value: 3, done: false }
//   g.next()



// var arr = [1,2,3,5,4], mark;
// const judge = ()=>{
//     for(var i = 0; i < arr.length; i++){
//         console.log(i)
//         if(arr[i] == 2){
//             console.log("纳尼")
//             return mark = true;
//         }
//         console.log("继续执行")
//     }
// }
// judge()
// console.log("mark",mark)

// function makeAdder(x) {
//     console.log("x",x)
//     return function(y) {
//         console.log("y",y)
//       return x + y;
//     };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2));  // 7  相当于传两个参数，一个是 5 ，一个是 2 
// console.log(add10(2)); // 12


// var add = (function () {
//     var counter = 0;
//     return function () {return counter += 1;}
// })();
 
// console.log(add())
// console.log(add())
// console.log(add())

// var jsonString= '{"name":"西兰花的春天","age":"26"}' //json字符串
// var jsonObj = {name: "秋天", age: "23"}  // js对象在命名属性名的时候可加可不加引号，加了引号和不加引号都是一样的。
// console.log(jsonString.name)
// console.log(jsonObj.name)
// console.log(Object.prototype.toString.call(jsonObj))
// // var ToObject=JSON.parse(jsonString);
// // console.log(ToObject);//西兰花的春天

// let val = 1
// const val1 = 2
// val = val1
// console.log(val)

// var bb= '中文';
// if(!bb){ //此时bb为真，继续执行，存在即为真
//      console.log(123456);
// }else{
//     console.log("嘿嘿")
// }

// const test = ()=>{
//     let obj = {
//         number: 2
//     }
//     if(obj < 2){
//         return obj
//     }
//     if(obj > 2){
//         let num = 1
//         if(num == 1){
//             obj.number += num
//         }
//         console.log("遇到return就停止执行后续操作")
//         return obj
//     }
//     return obj
// }
// console.log(test().number)
// console.log(Object.prototype.toString.call(test()))

// const adventurer = {
//     name1: 'Alice',
//     cat: {
//       name: 'Dinah'
//     }
//   };
// console.log(adventurer.cat?.name)

// const nullValue = null;
// const emptyText = ""; // 空字符串，是一个假值，Boolean("") === false
// const someNumber = 0;
// console.log(Boolean(nullValue))
// console.log(Boolean(emptyText))
// console.log(Boolean(someNumber))
// const valA = nullValue || "valA 的默认值";
// const valB = emptyText || "valB 的默认值";
// const valC = someNumber || 0;

// console.log(valA); 
// console.log(valB); 
// console.log(valC);

// var arr = [1,2,3,5,4], mark;
// for(var i = 0; i < arr.length; i++){
//         console.log(i)
//         if(arr[i] == 2){
//             console.log("纳尼")
//             return mark = true;
//         }
//         console.log("继续执行")
// }
// mark = 'you'
// console.log("mark",mark)

//不用redux，可以用什么方式实现数据流的管理 ：使用组件的state存储，但难以跨组件传值，且不易维护

// data = 1
// console.log((data && data == 1) || !data)

// const data = [
//     {
//         sondata: [2,3,4]
//     },
//     1,
//     'jack'
// ]
// console.log(Object.prototype.toString.call(data[0]))
// let json = [7,8,9]
// let obj = {}
// let tmp = []
// data.map((e,index) => {
//     if(index == 0){
//         e.sondata.map((data,inx) => {
//             tmp[inx] = data
//         })
//     }
//     console.log(tmp)
//     if(index == 1){
//         obj[e] = tmp
//     }
// })
// obj.len = json[0]
// console.log(obj)

// let a = ' '
// let b = 2
// let c = 3
// let d = 4
// let e = {
//     name: 'jack',
//     age: '22'
// }
// let reload = a && b && c && d
// console.log(reload)
// e.age = c
// console.log(e)

// let arr = [{
//     reason: '错误'
// }]
// arr.map((data,index)=>{
//     console.log(data)
// })

// const str = 'zzo'
// reg = /zo*/
// if(1){
//     console.log(str.match(reg))
// }

// let [bar, foo] = [1];
// console.log(null==undefined) //true

// const cat = {
//     lives: 9,
//     jumps: () => {
//       this.lives--;
//     }
// }
// const pipeline = (...funcs) =>
//   val => funcs.reduce((a, b) => b(a), val);

// const pipeline = (...funcs) => console.log(plus1())

// const plus1 = a => a + 1;
// const mult2 = a => a * 2;
// const addThenMult = pipeline(plus1, mult2);

// console.log(addThenMult(5))  //此处的 addThenMult 的参数为：plus1,mult2 两个，'plus1' 对应 '5'

// function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
//     if( n <= 1 ) {return ac2};
  
//     return Fibonacci2 (n - 1, ac2, ac1 + ac2);
// }
// console.log(Fibonacci2(5))
// 4 1 2
// 3 2 3
// 2 3 5
// 1 5 8

// function test(a,b){
//     console.log('a:'+a,'b:'+b)
// }
// console.log(test(3,5,7))

// function currying(fn, n) {
//     console.log('我是currying函数的n',n)
//     return function (m) {
//         console.log('我是currying函数的m',m)
//         return fn.call(this, m, n);
//     };
// }

// function tailFactorial(n, total) {
//     console.log('n:'+n,'total:'+total)
//     if (n === 1) return total;
//     return tailFactorial(n - 1, n * total);
// }

// const factorial = currying(tailFactorial, 1);

// factorial(5) //柯里化

// const arr1 = ['a', 'b'];
// const arr2 = ['c'];
// const arr3 = ['d', 'e'];
// console.log(arr1.slice(1))

// function func1(a, b, c) {
//     console.log(arguments[2]); //3
// }
// func1(1,2,3)

// let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
// };

// // ES5的写法
// var arr1 = [].slice.call(arrayLike)

// function foo() {
//     var args = Array.from(arguments);
//     // ...
//     console.log(args)
// }
// foo(1,3,7)

// const str = 'wenhui';
// console.log(str.includes('i'))

// let arr = {
//     age: '23',
//     name: 'pu'
// };
// for (let i of arr) {
//   console.log(i);
// }

// const  home={
//   name:'Amy',
//   cat:{
//   name:'King'}
// }
// console.log(home?.cat?.name)

// const arr1 = [1,2,3,4]
// const arr2 = [5,6,7]
// console.log(arr1.filter((e) => arr2.includes(e)))
// console.log(arr1.includes(arr2))

// const arr = [{
//     name: 'jack',
//     age: '22'
// },
// {
//     hoho: 'ss',
//     aaa: 'vv'
// }]
// const newdata = [...arr]
// const obj = {
//     yourname: 'gg',
//     yourage: '33'
// }
// const item = newdata[0]
// newdata.splice(0,1,{
//     // ...item,
//     ...obj
// })
// console.log(newdata)
// const a = ()=> {
//     console.log('我是a') 
//     return true
// }
// const b = ()=> {
//     console.log('我是b') 
//     return true
// }
// console.log(a() && b() ? true:false)
// const a =[1,2,3]
// const b =[1,2,3,5,6]
// console.log(b.slice(1))
// console.log(b)
// console.log(a.filter(e => !b.includes(e)))
// const getFor = (curdrugClone, tempData) =>{
//     if(tempData.length != curdrugClone.length){
//         for(let i=0; i<curdrugClone.length; i++){
//             let isExist = false
//             for(let j=0; j<tempData.length; j++){
//                 if(tempData[j].DrugCode === curdrugClone[i].DrugCode){
//                     isExist = true
//                     break
//                 }
//             }
//             if(!isExist){
//                 filterDrug.push(curdrugClone[i])
//             }
//         }
//         return filterDrug
//     }else{
//         return null
//     }
// }
// const num =1
// const num1 =1
// console.log(num == num1)
// const a = {b: [1,2]}
// const c = {d: [1,2]}
// console.log(a.b == c.d)  // true
// const m = {}
// console.log(Boolean([]))
// const b =[]
// const d = []
// console.log(b == d)  // false

// const obj = {
//     age: '22',
//     name: 'jack',
//     height: '160'
// }
// console.log(obj.hasOwnProperty('weight') == false)
// console.log(null == null)

//-----------------------------------------------正则start------------------------------
// const str = '-665.3(1.2.3.333)'
// console.log(str.match(/(\-)?\d+\.{1}\d+(?=\()/))
// console.log(str.match(/(?<=\()\d+\.{1}\d+(?=\))/))
// console.log(str.match(/(?<=\()[\d.]+(?=\))/))
// console.log(str.match(/^\d+.{1}\d+(?=\()/))
// const url = 'http://www.33.com'
// console.log(url.match(/[a-zA-z]+:\/\/[^/]*/))
// const word = 'plcnb'
// console.log(word.match(/[^abc]+/))
// const str1 = 'zooo'
// console.log(str1.match(/zo+/g))
// const word = 'windowwinawinwanaiaaaciiaw2021'
// console.log(word.match(/[wai]+/g)) 
// [ 'wi', 'wwi', 'awi', 'wa', 'aiaaa', 'ii' ]
// console.log(word.match(/[wai]/g)) 
//   [
//     'w', 'i', 'w', 'w', 'i',
//     'a', 'w', 'i', 'w', 'a',
//     'a', 'i', 'a', 'a', 'a',
//     'i', 'i', 'a', 'w'
//   ]
// 注意，若要匹配元字符(正则自带符号)需转义
// const text = 'a|b-:e|s|v|baba'
// console.log(text.match(/[a|e|s]+/g))
// [ 'a|', '|e|s|' ]
// console.log(text.match(/(b\.)+/g))
//-----------------------------------------------正则end------------------------------

// const arr = [1,2]
// const arr1 =[]
// if(true && arr.length){
//     console.log(arr1 == true)
// }


// const arr = [
//     {name: 'jack'}
// ]
// const arr1 =[
//     {name: 'rousi'},
//     {name: 'jack'}
// ]
// const newArr = arr.map(e => e.name)
// console.log(arr1.filter(d => !newArr.includes(d.name)))

// let filterData = []
// arr.map(d => filterData = arr1.filter(e => d.name == e.name))
// console.log(filterData)

const timeout =(ms) =>{
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
      console.log('先执行')
    });
  }
  
  const asyncPrint = async (value, ms) => {
    await timeout(ms);
    console.log(value);
  }
  
  asyncPrint('hello world', 5000);