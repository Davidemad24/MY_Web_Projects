let btn = document.querySelector("button");
// Function massege Name
document.querySelector(".name #name").addEventListener("focus", function (){
    document.querySelector(".msgName").style.display = "block";
    document.querySelector(".msgEmail").style.display = "none";
    document.querySelector(".msgId").style.display = "none";
});
document.querySelector(".name #name").addEventListener("blur", function (){
    document.querySelector(".msgName").style.display = "none";
});
// Function Massege Email
let inp_e = document.querySelector("#email");
btn.addEventListener("click",function (){
    if (!inp_e.value.includes("@gmail.com")){
        localStorage.setItem("email_invalid","yes");
    }
});
if (localStorage.getItem("email_invalid") === "yes"){
    document.querySelector(".msgEmail").style.display = "block";
}
// Function Massege Password
document.querySelector("#pass").addEventListener("focus", function (){
    document.querySelector(".msgPass").style.display = "block";
    document.querySelector(".msgEmail").style.display = "none";
    document.querySelector(".msgId").style.display = "none";
});
document.querySelector("#pass").addEventListener("blur", function (){
    document.querySelector(".msgPass").style.display = "none";
});
// Function Massege ID
let inp_id = document.querySelector("#id");
btn.addEventListener("click",function (){
    if (!inp_id.value.includes("2023")){
        localStorage.setItem("Id_invalid","yes")
    }
});
if (localStorage.getItem("Id_invalid") === "yes"){
    document.querySelector(".msgId").style.display = "block";
}
// Close Validation After load
window.onload = function(){    
    localStorage.Id_invalid = "no";
    localStorage.email_invalid = "no";
};
// Var for field
let field_name = document.querySelector("#name");
let field_email = document.querySelector("#email");
let field_pass = document.querySelector("#pass");
let field_id = document.querySelector("#id");
// Var for data field
let data_name,data_email,data_pass,data_id;
// Collect Data from field and Store it
btn.addEventListener("click",function () {
    // Filter Name Field
    if (field_name.value !== "" && field_email.value.includes("@gmail.com") && field_pass.value !== "" && field_id.value.includes("2023")) {
        data_name = field_name.value;
        data_email = field_email.value;
        data_pass = field_pass.value;
        data_id = field_id.value;
        // Store Data in local Storge
        if (localStorage.Data) {
            let mydata = JSON.parse(localStorage.Data);
            mydata.push({name: data_name,email: data_email,pass: data_pass,id: data_id});
            localStorage.Data = JSON.stringify(mydata);
        } else {
            let mydata = [{name: data_name,email: data_email,pass: data_pass,id: data_id}];
            localStorage.setItem("Data",JSON.stringify(mydata));
        }
    }
})
// Create Table
if (localStorage.Data) {
    document.querySelector(".table").style.display = "block";
}
let table_data = JSON.parse(localStorage.Data); // Var for Data Table
for (let i=0;i < table_data.length;i++) {
    let tr = document.createElement("tr");
    let td_name = document.createElement("td");
    let td_id = document.createElement("td");
    let td_email = document.createElement("td");
    let td_pass = document.createElement("td");
    let td_name_note = document.createTextNode(table_data[i].name);
    let td_id_note = document.createTextNode(table_data[i].id);
    let td_email_note = document.createTextNode(table_data[i].email);
    let td_pass_note = document.createTextNode(table_data[i].pass);
    td_name.appendChild(td_name_note);
    td_id.appendChild(td_id_note);
    td_email.appendChild(td_email_note);
    td_pass.appendChild(td_pass_note);
    tr.appendChild(td_name);
    tr.appendChild(td_id);
    tr.appendChild(td_email);
    tr.appendChild(td_pass);
    document.querySelector("table").appendChild(tr);
}