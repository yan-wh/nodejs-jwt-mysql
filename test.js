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
