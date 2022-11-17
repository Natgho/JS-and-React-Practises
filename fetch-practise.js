import fetch from "node-fetch"

fetch("https://jsonplaceholder.typicode.com/posts").then(resp => resp.json())
    .then(json => {
        console.log(json)
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(resp => resp.json())
            .then(json => console.log(json))
    })