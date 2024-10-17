/**
 *  O QUE É UMA PROMISE?
 * 
 *  A promessa pode ser quebrada ou realizada
 * 
 *  João me prometeu um café
 * 
 */


const coffee = new Promise((resolve, reject) => {
    reject({message: "João não cumpriu a promessa"})
})


coffee
.then((resolve) =>{
    console.log(resolve)
})
.catch((reject) =>{
    console.log(reject)
})





