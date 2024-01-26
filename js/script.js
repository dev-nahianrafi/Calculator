let inputtt = document.querySelector(".inputtt")

let zeroo = document.querySelector(".zeroo")
let onee = document.querySelector(".onee")
let twoo = document.querySelector(".twoo")
let threee = document.querySelector(".threee")
let fourr = document.querySelector(".fourr")
let fivee = document.querySelector(".fivee")
let sixx = document.querySelector(".sixx")
let sevenn = document.querySelector(".sevenn")
let eightt = document.querySelector(".eightt")
let ninee = document.querySelector(".ninee")

let pluss = document.querySelector(".plus")
let biyog = document.querySelector(".biyog")
let intoo = document.querySelector(".intoo")
let divition = document.querySelector(".divition")

let equall = document.querySelector(".equall")
let cencel = document.querySelector(".modulas")
// onee = 1


onee.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += 1;
})
twoo.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += 2;
})
threee.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += 3;
})
fourr.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += 4;
})
fivee.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += 5;
})
sixx.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += 6;
})
sevenn.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += 7;
})
eightt.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += 8;
})
ninee.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += 9;
})
zeroo.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += 0;
})

pluss.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += "+";
})
biyog.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += "-";
})
intoo.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += "*";
})
divition.addEventListener("click", function(){
    // inputtt.innerHTML = 1
    // console.log("1");
    inputtt.value += "/";
})

equall.addEventListener("click", function(){
    let getResult = inputtt.value
    let getOutput = eval(getResult)
    inputtt.value = getOutput
})
cencel.addEventListener("click", function(){
    inputtt.value = ""
})