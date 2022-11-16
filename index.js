import slugify from "slugify";
console.log("hello world")
const sample = slugify("some string", "_")
console.log(sample)

import sum_nums from "./my-module.js";
console.log("1 + 3:",sum_nums(1,3))

import sum_new_nums from "./new-type-my-module.js";
console.log("New version 1 + 3:", sum_new_nums(1,3))
