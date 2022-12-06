import {user} from "./data-store.js";

const sampleArray = []

sampleArray.push("sezer")
sampleArray.push("bozkir")

console.log(sampleArray)

for (let i = 0; i < sampleArray.length; i++) {
    console.log(sampleArray[i])
}

sampleArray.map((item) => console.log(item))

const users = [
    {
        name: "Sezer",
        Surname: "Bozkir"
    },
    {
        name: "Tugce",
        Surname: "Bozkir"
    },
    {
        name: "Mehmet",
        Surname: "Bozkir"
    },
    {
        name: "Mehmet",
        middleName: "Salih",
        Surname: "Bozkir"
    },
]
users.map((item) => console.log(item.name))

const findHim = users.find((item) => item.name === "Mehmet" && item.Surname === "Bozkir")
console.log(findHim)

const filtered = users.filter((item) => item.name === "Mehmet")
console.log(filtered)

const namedFiltered = users.filter(({name, Surname}) => name === "Mehmet" && Surname === "Bozkir")
console.log(namedFiltered)

const someTest = users.some((item) => item.name === "Sezer")
console.log(someTest)

const everyTest = users.every((item) => item.Surname === "Bozkir")
console.log(everyTest)

const countries = ["Turkey", "France"]
console.log(countries.includes("Turkey"))