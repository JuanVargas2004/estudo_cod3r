

const checkScore = (score) => {
    return new Promise((resolve, reject) => {
        if (score >= 0 && score <= 10){
            resolve("Valid score")
        }
        else{
            reject("Invalid score")
        }
    })
}

checkScore(-7)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))