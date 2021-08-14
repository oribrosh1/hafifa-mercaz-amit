function returnPromiseA(paramA){
    return new Promise((resolve, reject ) => {
        resolve("message info: " + paramA);
    });
}

function returnPromiseB(paramB){
    return new Promise((resolve, reject ) => {
        if(paramB == "good"){   
            resolve("ok");
        }else{
            reject("the message is incorrect");
        }
    });
}

function returnPromiseC(param1, param2){
    return new Promise((resolve, reject ) => {
        if(param1 > param2){   
            resolve("first number is bigger");
        }else if(param1 < param2){
            resolve("second number is bigger");
        }
        if(!param1 || !param2){
            reject("wrong input");
        }
    });
}

async function func2(){
    const paramA = "<Entered Value>";
    const paramB = "good";
    const param1 = 5, param2 = 8;
    Promise.all([returnPromiseB(paramB),returnPromiseA(paramA), returnPromiseC(param1, param2)])
        .then((results)=>{
            console.log(results.toString().replace(/,/g, "\n"));
        })
        .catch((errors)=>{
            console.log(errors.toString().replace(/,/g, "\n"));
        });
}

async function func3(){
    const paramB = "not good";
    const param1 = undefined, param2 = 8;
    Promise.allSettled([returnPromiseC(param1, param2), returnPromiseB(paramB)])
        .then((results)=>{
            results.forEach(element => {
                console.log(element.reason);
            });
        })
        .catch((errors)=>{
            console.log(errors.toString().replace(/,/g, "\n"));
        });
}

async function func4(){
    const paramA = "<Entered Value>";
    const paramB = "good";
    const param1 = 5, param2 = 8;
    Promise.all([returnPromiseA(paramA), returnPromiseB(paramB), returnPromiseC(param1, param2)])
        .then((results)=>{
            console.log(results.toString().replace(/,/g, "\n"));
        })
        .catch((errors)=>{
            console.log(errors.toString().replace(/,/g, "\n"));
        });
}