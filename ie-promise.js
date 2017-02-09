function addPromise (a,b) {
    return new Promise(function (resolve,reject) {
        if (typeof a === 'number' && typeof b === 'number')
            resolve(a+b);
        else
            reject("not a number")

    });

}

addPromise(1,'then').then(function(sum) {
    console.log("should be err", sum);
},function(err) {
    console.log(err);
});

addPromise(1,5).then(function(sum) {
    console.log("sucess", sum);
},function(err) {
    console.log(err);
});
