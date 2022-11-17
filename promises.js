const getComments = (incoming_data) => {
    return new Promise((resolve, reject) => {
        if (incoming_data) resolve({name: "Sezer", surname: "Bozkir"})
        else reject("Here is boom! error message")
    })
}
getComments(true).then(data => console.log(data)).catch(error => console.log(error))
getComments(false).then(data => console.log(data)).catch(error => console.log(error))

// Another way of catching error
try{
    const data = await getComments(false)
}catch (e) {
    console.log(e)
}
Promise.allSettled([getComments(true), getComments(false)])
    .then(data => console.log(data))
    .catch(data => console.log(data))