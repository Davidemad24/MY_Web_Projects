let nav_element = ["CV","David","Work History","Education","Skills","Language","About"];
document.body.style.margin = "0";
// Create Nav 
let nav = document.createElement("nav");
nav.style.width = "98.7%";
nav.style.height = "30px";
nav.style.padding = "10px 20px";
nav.style.borderBottom = "4px solid rgb(97, 255, 94)";
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
// Create Logo
let h1 = document.createElement("h1");
let span = document.createElement("span");
let span_note = document.createTextNode(nav_element.splice(0,1));
let h1_note = document.createTextNode(` ${nav_element.splice(nav_element.indexOf("David"),1)}`);
span.appendChild(span_note);
h1.appendChild(span);
h1.appendChild(h1_note);
span.style.fontSize = "x-large";
span.style.color = "rgb(0, 193, 0)";
h1.style.fontSize = "large";
h1.style.margin = "0";
nav.appendChild(h1);
// Create ul
let ul = document.createElement("ul");
ul.style.width = "40%";
ul.style.display = "flex";
ul.style.justifyContent = "space-evenly";
ul.style.listStyle = "none";
ul.style.margin = "0";
ul.style.padding = "5px";
for (let i=0;i < nav_element.length;i++) {
    // Create li
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = "https://www.google.com";
    a.style.color = "black";
    a.style.textDecoration = "none";
    let a_note = document.createTextNode(nav_element[i]);
    a.appendChild(a_note);
    li.appendChild(a);
    li.style.fontSize = "18px";
    li.style.cursor = "pointer";
    ul.appendChild(li);
}
nav.appendChild(ul);
document.body.appendChild(nav);
// Add hover Style
let links = document.querySelectorAll("a");
links.forEach((li) => {
    li.addEventListener("mouseover", function () {
        li.style.color = "rgb(0, 193, 0)";
        li.style.borderBottom = "3px solid rgb(0, 193, 0)";
    })
    li.addEventListener("mouseout", function () {
        li.style.color = "black";
        li.style.border = "none";
    })
})