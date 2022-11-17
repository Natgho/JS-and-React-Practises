import fetch from "node-fetch";

async function getData(){
    const firstResponse = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const secondResponse = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
    const thirdResponse = await (await fetch("https://jsonplaceholder.typicode.com/posts/3")).json();

    console.log(firstResponse);
    console.log(secondResponse);
    console.log(thirdResponse);
}
getData()