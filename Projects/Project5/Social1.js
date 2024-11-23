// Functions Change color
let is_change1=0, is_change2 = 0;
    //Function Change color
    function Change(color) {
        // setting bar
        document.querySelector(".menu_profile").style.borderRight = `${color} solid 4px`;
        document.querySelector(".menu_profile h1 span").style.color = `${color}`;
        let setting_i = document.querySelectorAll(".menu_profile ul li i");
        for (let i=0;i < setting_i.length;i++){
            setting_i[i].style.color = `${color}`;
        }
        let setting_li = document.querySelectorAll(".menu_profile li a");
        setting_li.forEach((li) => {
            li.addEventListener("mouseover", function (){
                li.style.color = `${color}`;
            });
        });
        setting_li.forEach((li) => {
            li.addEventListener("mouseout", function (){
                li.style.color = "black";
            });
        });
        document.querySelector(".menu_profile .company").style.color = `${color}`;
        document.querySelector(".menu_profile .low span").style.color = `${color}`;
        // profile bar
        document.querySelector(".container .myprofile").style.borderBottom = `4px solid ${color}`;
        document.querySelector(".container .myprofile .myDetails img").style.border = `3px solid ${color}`;
        document.querySelector(".container .myprofile button").style.border = `2px solid ${color}`;
        document.querySelector(".container .myprofile div i").style.color = color;
        // news section 
        document.querySelectorAll(".news .home .post .profile img").forEach((img) => {
            img.style.border = `2px solid ${color}`;
        });
        document.querySelectorAll(".news .home .post section").forEach((section) => {
            section.style.boxShadow = `0 7px 10px 0 ${color}`;
        })
        // pages bar
        let pages_nav = document.querySelectorAll(".container .nav ul li");
        pages_nav.forEach((li) => {
            li.addEventListener("click", function (){
                pages_nav.forEach((li) => {
                    li.style.color = 'black';
                    li.style.borderTop = `none`;
                })
                li.style.color = `${color}`;
                li.style.borderTop = `3px solid ${color}`;
            });
        });
        // tools bar
        document.querySelector(".tools").style.borderLeft = `${color} 4px solid`;
        let btns = document.querySelectorAll(".tools button");
        for (let i=0;i < btns.length;i++){
            btns[i].style.border = `${color} solid`;
        }
        if (is_change1){
            document.querySelector(".colors .head").style.borderBottom = `3px solid ${color}`;
            document.querySelector(".colors .bx-chevron-down").style.color = `${color}`;
        }
        if (is_change2){
            document.querySelector(".games .head").style.borderBottom = `3px solid ${color}`;
            document.querySelector(".games .bx-chevron-down").style.color = `${color}`;
        }
        let menu_games = document.querySelectorAll(".tools section .games ul li");
        for (let i=0;i < menu_games.length;i++){
            menu_games[i].style.color = `${color}`;
        }
        let menu_games_span = document.querySelectorAll(".tools section .games span");
        menu_games_span.forEach((li) => {
            li.addEventListener("mouseover", function (){
                li.style.color = `${color}`;
            });
        });
        menu_games_span.forEach((li) => {
            li.addEventListener("mouseout", function (){
                li.style.color = "black";
            });
        });
        // local storage 
        general_color = color;
        localStorage.setItem("pageColor",color);
    }
let divs_colors = document.querySelectorAll(".tools .colors ul li div");
    // add class active and change color form local storage
    divs_colors.forEach((div) => {
        // Change color
        div.addEventListener("click",function (){ 
            Change(div.classList[0]);
            div.classList.add("active");
            divs_colors.forEach((div) => {
                // remove class active of all
                div.classList.remove("active");
            });
            div.classList.add("active");
        });
        // Code for save color
        if (div.classList[0] == localStorage.pageColor) {
            Change(div.classList[0]);
            div.classList.add("active");
        }
    });
// Menu drop for colors
let btn1_colors = document.querySelector(".colors .bx-chevron-up");
let btn2_colors = document.querySelector(".colors .bx-chevron-down");
btn1_colors.addEventListener("click",function () {
    document.querySelector(".colors ul").style.animation = "color 0.3s forwards";
    document.querySelector(".colors .head").style.borderBottom = `3px solid ${general_color}`;
    btn1_colors.style.display = "none";
    btn2_colors.style.display = "block";
    btn2_colors.style.color = `${general_color}`;
    is_change1 = 1;
});
btn2_colors.addEventListener("click",function () {
    document.querySelector(".colors ul").style.animation = "none";
    document.querySelector(".colors .head").style.border = "none";
    btn2_colors.style.display = "none";
    btn1_colors.style.display = "block";
    is_change1 = 0;
});
// Menu drop for games
let btn1_games = document.querySelector(".games .bx-chevron-up");
let btn2_games = document.querySelector(".games .bx-chevron-down");
btn1_games.addEventListener("click",function () {
    document.querySelector(".games ul").style.animation = "game 0.5s forwards";
    document.querySelector(".games .head").style.borderBottom = `3px solid ${general_color}`;
    btn1_games.style.display = "none";
    btn2_games.style.display = "block";
    btn2_games.style.color = `${general_color}`;
    is_change2 = 1;
});
btn2_games.addEventListener("click",function () {
    document.querySelector(".games ul").style.animation = "none";
    document.querySelector(".games .head").style.border = "none";
    btn1_games.style.display = "block";
    btn2_games.style.display = "none";
    is_change2 = 0;
});