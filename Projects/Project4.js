
// Evaluation functions
let stars1 = document.querySelectorAll(".star1");
let stars2 = document.querySelectorAll(".star2");
let stars3 = document.querySelectorAll(".star3");
let stars4 = document.querySelectorAll(".star4");
let stars5 = document.querySelectorAll(".star5");
let evaluations = document.querySelectorAll(".evaluation");
let items = document.querySelectorAll(".item");
let movies = document.querySelectorAll(".movie");
// Function Text Evaluation
function text_evaluatoin(text,index,color){
    let p = document.createElement("p");
    let note = document.createTextNode(text);
    p.appendChild(note);
    p.style.textAlign = "center";
    p.style.color = color;
    p.style.fontSize = "20px";
    p.style.fontWeight = "900";
    // Hide all p in Items
    if (index < 8) {
        let ps_item = items[index].querySelectorAll(".item p");
        if (ps_item.length){
            for (let x=0;x < ps_item.length;x++){
                ps_item[x].style.display = "none";
            }
        }
    }
    // Hide all p in movie
    if (index > 7){
        let ps_movie = movies[index - 8].querySelectorAll(".movie p");
        if (ps_movie.length){
            for (let x=0;x < ps_movie.length;x++){
                ps_movie[x].style.display = "none";
            }
        }
    }
    evaluations[index].after(p);
}
stars1.forEach((star,index) =>{
    star.addEventListener("click",function (){
        evaluations[index].querySelector(".full1").style.display = "inline";
        star.style.display = "none";
        // Text Evaluation
        text_evaluatoin("Bad",index,"red");
    });
});
stars2.forEach((star,index) =>{
    star.addEventListener("click",function (){
        evaluations[index].querySelector(".full1").style.display = "inline";
        evaluations[index].querySelector(".full2").style.display = "inline";
        evaluations[index].querySelector(".star1").style.display = "none";
        star.style.display = "none";
        // Text Evaluation
        text_evaluatoin("pass",index,"rgb(255, 128, 0)");
    });
});
stars3.forEach((star,index) =>{
    star.addEventListener("click",function (){
        evaluations[index].querySelector(".full1").style.display = "inline";
        evaluations[index].querySelector(".full2").style.display = "inline";
        evaluations[index].querySelector(".full3").style.display = "inline";
        evaluations[index].querySelector(".star1").style.display = "none";
        evaluations[index].querySelector(".star2").style.display = "none";
        star.style.display = "none";
        // Text Evaluation
        text_evaluatoin("Good",index,"rgb(255, 179, 0)");
    });
});
stars4.forEach((star,index) =>{
    star.addEventListener("click",function (){
        evaluations[index].querySelector(".full1").style.display = "inline";
        evaluations[index].querySelector(".full2").style.display = "inline";
        evaluations[index].querySelector(".full3").style.display = "inline";
        evaluations[index].querySelector(".full4").style.display = "inline";
        evaluations[index].querySelector(".star1").style.display = "none";
        evaluations[index].querySelector(".star2").style.display = "none";
        evaluations[index].querySelector(".star3").style.display = "none";
        star.style.display = "none";
        // Text Evaluation
        text_evaluatoin("Very Good",index,"yellow");
    });
});
stars5.forEach((star,index) =>{
    star.addEventListener("click",function (){
        evaluations[index].querySelector(".full1").style.display = "inline";
        evaluations[index].querySelector(".full2").style.display = "inline";
        evaluations[index].querySelector(".full3").style.display = "inline";
        evaluations[index].querySelector(".full4").style.display = "inline";
        evaluations[index].querySelector(".full5").style.display = "inline";
        evaluations[index].querySelector(".star1").style.display = "none";
        evaluations[index].querySelector(".star2").style.display = "none";
        evaluations[index].querySelector(".star3").style.display = "none";
        evaluations[index].querySelector(".star4").style.display = "none";
        star.style.display = "none";
        // Text Evaluation
        text_evaluatoin("Execllent",index,"rgb(0, 255, 0)");
    });
});
// Swap right Function
let swap_right = document.querySelector(".bx-chevrons-right");
let i=0;
swap_right.addEventListener("click",function(){
    if (i < 10) {
        length = 267 * (++i);
        console.log(i);
        document.querySelector(".movies").scrollTo({
            left: length,
            behavior: "smooth"
        });
    }
});
// Swap Left Function
let swap_left = document.querySelector(".bx-chevrons-left");
swap_left.addEventListener("click",function(){
    if (i > 0){
        length = 267 * (--i);
        console.log(i);
        document.querySelector(".movies").scrollTo({
            left: length,
            behavior: "smooth"
        });
    }
});