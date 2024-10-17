// // Promise without async+await

// function apiChuckNorris() {
//     const result = fetch("https://api.chucknorris.io/jokes/random")
//         .then((response) => response.json())

//     return result
// }

// const joke = apiChuckNorris()

// console.log(joke.then((result) => console.log(result)))

// Promise with async+await

async function ChuckNorris(){
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await response.json()

    console.log(data)
}

console.log(ChuckNorris())
console.log("Oi")