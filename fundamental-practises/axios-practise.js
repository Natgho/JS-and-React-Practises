import axios from "axios";

async function getDatawithAxios() {
    return await axios.get("https://jsonplaceholder.typicode.com/posts/1");
}

getDatawithAxios().then(r => console.log(r["data"]))

async function getSeveralData(){
    const {data:post_1} = await axios("https://jsonplaceholder.typicode.com/posts/1")
    const {data:post_2} = await axios("https://jsonplaceholder.typicode.com/posts/2")
    const {data:post_3} = await axios("https://jsonplaceholder.typicode.com/posts/3")
    console.log(post_1, post_2, post_3)
}
getSeveralData().then(r => console.log("Nothing returned"))