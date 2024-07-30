// function getData(){
// setTimeout(()=>{
//     console.log("Loading...");
// })
// }



// function setData(){
//     console.log("Saetti");
//     setTimeout(()=>{
//         console.log("inside timeout..")
//     })
// }
// getData();
// setData();

// function getData1(callback){
//     setTimeout(()=>{
//         callback();
//     })
// }
// function setData(){
//     console.log("Setting Data ");
// }
// console.log("before setting..");
// getData1(setData);
// console.log("after setting...");

// let promise = new Promise((resolve, reject)=>{
//     var x = 2; 
//     resolve(x);
//     // if(x){
//     //     resolve(x);
//     // }else{
//     //     reject("Error");

//     // }
// });
// promise.then((reso)=>{
//     console.log(reso);
//   return reso + reso;
// })

// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
// console.log(err);
// })


let newpromise = new Promise((resolve , reject )=>{
   setTimeout(()=>{
    resolve(10/0);   },2000)

    
});

newpromise.then((R)=>{
    console.log(R);
})