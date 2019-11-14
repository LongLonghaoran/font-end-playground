// let promise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     console.log("3秒时间到了");
//     resolve('success');
//   }, 3000)
// })
// promise.then((data)=>console.log("结果是", data));
// const promise = new Promise(function (resolve, reject) {
//   console.log('Promise');
//   resolve();
// });

// lp2 =  new Promise((resolve,  reject)=>{
//   console.log("这是p2中的输出");
//   resolve(promise)
// })

// promise.then(function () {
//   console.log('resolved.');
// });

// console.log('Hi!');
// function login(username, password){
//   const BASE_URL = 'http://localhost:3000/dingding_api/users/login_by_pwd';
//   const promise1 = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//       console.log(xhr);
//       if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {
//         let result = JSON.parse(xhr.responseText);
//         if(result.result){
//           resolve(result);
//         }else{
//           reject(result);
//         }
//       }
//     }
//     xhr.open("post", BASE_URL);
//     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xhr.send(`username=${username}&password=${password}`);
//   });
//   return promise1;
// }
// let p = login("wfl_longhr", "123qwe2").then((result)=>{
//   console.log(result);
// }).catch((errorMsg) => {
//   console.log("出错", errorMsg)
// });