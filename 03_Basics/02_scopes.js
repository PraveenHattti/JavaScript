// let a = 10;
// const b = 20;
// var c = 30;


// var c = 300;
let a = 300


if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner:", a)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Praveen"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)
     
    // two()
}

one()


if(true){
    const username = "praveen"
    if(username === "praveen"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);

}
// console.log(username)



//+++++++++++++++++++++ Iteresting ++++++++++++++++++++++++++
// console.log(addone(5))
function addone(num){
    return num + 1
}

// console.log(addone(5));

console.log(addTwo(5))
const addTwo =function(num){
    return num + 2
}
// addTwo(5);
// console.log(addTwo(5))
