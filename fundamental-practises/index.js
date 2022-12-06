import slugify from "slugify";

console.log("hello world")
const sample = slugify("some string", "_")
console.log(sample)

import sum_nums from "./my-module.js";

console.log("1 + 3:", sum_nums(1, 3))

import sum_new_nums from "./new-type-my-module.js";

console.log("New version 1 + 3:", sum_new_nums(1, 3))

import {arrow_sum_nums, different_log} from "./arrow-function.js";


console.log("Arrow function sample: ", arrow_sum_nums(1, 34));
different_log("My specific message.")

import FieldNameCanBeAnything, {otherData, user} from "./data-store.js";

console.log(`${FieldNameCanBeAnything}
${otherData}`);
console.log(user);