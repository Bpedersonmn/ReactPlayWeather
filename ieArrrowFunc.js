function add(a,b){
    return a+b;
}

var nonArrowFunc = function add(a,b) {
    return a+b;
};

var arrowFunct = (a,b) => a+b;

console.log(nonArrowFunc(4,6));
console.log(arrowFunct(3,10));