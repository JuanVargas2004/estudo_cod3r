const simplePromise = new Promise(function(resolve, reject){

    setTimeout(() => {
        resolve("Resolved after 2 seconds")
        
    }, 2000)
})

console.log("Before promise")
simplePromise.then(result => console.log(result))
console.log("After promise")
