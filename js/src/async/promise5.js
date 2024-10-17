function apiChuckNorris(){
    const result = fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((data) => data.value)
    return result
}

const joke1 = apiChuckNorris()
const joke2 = apiChuckNorris()
const joke3 = apiChuckNorris()

Promise.all([joke1, joke2, joke3]).then((jokes) => console.log(jokes))