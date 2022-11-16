const different_log = message => {
    console.log("Note: Sample for directly export\n" + message);
    console.log(`Message: ${message}`);
}

const arrow_sum_nums = (num1, num2) => num1 + num2;

export {different_log, arrow_sum_nums};