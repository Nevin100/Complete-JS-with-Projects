// // // Get Element by Tagname :
// // let a = document.getElementsByTagName("li");
// // console.log(a);

// // // Get Element by class :
// // let b = document.getElementsByClassName("shi");
// // console.log(b);

// // // Get Element by id :
// // let c = document.getElementsByTagName("li");
// // console.log(c);

// // // Get Element by selecter :
// // let d = document.getElementsByTagName("li");
// // console.log(d);

// // // Get Element by all :
// // let e = document.getElementsByTagName("li");
// // console.log(e);

// const ul = document.querySelector("ol");
// const newE = document.createElement("li");
// newE.textContent = "Giga Chad";
// ul.appendChild(newE);

const a = document.querySelector("ol");
const childToChange = a.children[1];
const newE = document.createElement("li");
newE.textContent = "Giga";
a.replaceChild(newE, childToChange);
