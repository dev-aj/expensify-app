const promises = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("This is resolve");
        reject("this is reject");
    }, 2000);
});
console.log("Before");

promises.then((data) => {
    console.log("REsolve", data);
    const prevdata = "Data for 2nd ";
    return prevdata;    //Here we can return a complete new promise and the next then will become its success call
}).then((prevdata) => {
    console.log("data from first then", prevdata);
}).catch((error) =>{
    console.log("Rejected", error);
});
console.log("After");