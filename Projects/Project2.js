// On Focus at input
document.querySelector(".guess").addEventListener("focus",function () {
    document.querySelector(".msg").style.display = "block";
});
document.querySelector(".guess").addEventListener("blur",function () {
    document.querySelector(".msg").style.display = "none";
});
let rand_num = (Math.random() * 10).toFixed();
console.log(rand_num);
// Store Variable in local stoarge
window.localStorage.setItem("Win","../Pictures/WinPhoto.jpeg");
window.localStorage.setItem("Loss","../Pictures/images.jpeg");
window.localStorage.setItem("Try","../Pictures/try.jpeg");
if (!(localStorage.Tries)){
    window.localStorage.setItem("Tries",1);
}
// On click Button
let btn = document.querySelector(".submit");
let inp = document.querySelector(".guess");
btn.addEventListener("click",function (){
    // Condition of Guesses
    if (localStorage.Tries == "5") {
        localStorage.setItem("Guess","loss");
    } else if (inp.value === rand_num) {
        localStorage.setItem("Guess","win");
        localStorage.Tries = 1;
    }
    else {
        localStorage.setItem("Guess","try");
        // Counter for Tries
        if (localStorage.Tries && inp.value !== ""){
            let Tries = localStorage.Tries;
            localStorage.setItem("Tries",++Tries);
        }
    }
});
if (localStorage.Guess === "loss" && localStorage.Tries === "5") {
    let img_tag = document.createElement("img");
    img_tag.src = localStorage.getItem("Loss");
    let div = document.createElement("div");
    div.className = "Show";
    div.appendChild(img_tag);
    document.querySelector(".container").appendChild(div);
    document.querySelector(".game").style.display = "none";
    // When Reload
    localStorage.setItem("Reload","Yes");
} else if (localStorage.Guess === "win") {
    let img_tag = document.createElement("img");
    img_tag.src = window.localStorage.getItem("Win");
    let div = document.createElement("div");
    div.className = "Show";
    div.appendChild(img_tag);
    document.querySelector(".container").appendChild(div);
    // When Reload
    localStorage.setItem("Reload","Yes");
}
else if (localStorage.Guess === "try") {
    let img_tag = document.createElement("img");
    img_tag.src = window.localStorage.getItem("Try");
    let div = document.createElement("div");
    div.className = "Show";
    div.appendChild(img_tag);
    document.querySelector(".container").appendChild(div);
    // When Reload
    localStorage.setItem("Reload","Yes");
}
// Function to return to Guess Page
setTimeout(function (){
    if (localStorage.Guess === "loss") {
        localStorage.setItem("Guess","");
        localStorage.Tries = 1;
    }
},1000);
// Function to For reload
window.onload = function (){
    if (localStorage.Guess === "try" || localStorage.Guess === "win"){
        localStorage.setItem("Guess","");
    } else if (localStorage.Guess === "loss"){
        localStorage.setItem("Guess","");
        localStorage.Tries = 1;
    }
}