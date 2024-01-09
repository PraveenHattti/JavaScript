const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num) => num + 10)

// console.log(newNums)


// chaining

const Nums = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)

console.log(Nums)


// const varray = [1,2,3,4,5]

// const parray = varray.map((a,b,c,d,e) => a+b+c+d+e );

// console.log(parray);

let num = myNumbers.map(function summ(a){
    return a*4;
});


console.log(num);