
let portrait = document.getElementById("portrait");
let about_description = document.getElementById("abtdes");
let about_pic = document.getElementById("abtpic");
portrait.onmouseover = function() {
  about_description.style.display = "block";
  about_pic.style.opacity = "1";
}
portrait.onmouseout = function() {
  about_description.style.display = "none";
  about_pic.style.opacity = "0.5";
}

let lights = document.getElementById("lights");
let lights_description = document.getElementById("advdes");
let lights_pic = document.getElementById("advpic");
lights.onmouseover = function() {
  lights_description.style.display = "block";
  lights_pic.style.opacity = "1";
}
lights.onmouseout = function() {
  lights_description.style.display = "none";
  lights_pic.style.opacity = "0.5";
}

let code = document.getElementById("code");
let code_description = document.getElementById("projdes");
let code_pic = document.getElementById("projpic");
code.onmouseover = function() {
  code_description.style.display = "block";
  code_pic.style.opacity = "1";
}
code.onmouseout = function() {
  code_description.style.display = "none";
  code_pic.style.opacity = "0.5";
}

let art = document.getElementById("art");
let art_description = document.getElementById("artdes");
let art_pic = document.getElementById("artpic");
art.onmouseover = function() {
  art_description.style.display = "block";
  art_pic.style.opacity = "1";
}
art.onmouseout = function() {
  art_description.style.display = "none";
  art_pic.style.opacity = "0.5";
}

var lst = ["instagram", "lightpainting", "beach", "capital", "bug", "yosemite"];
var i;

function hovering(i) {
  document.getElementById(lst[i]).onmouseover = function() {
        document.getElementById(lst[i] + "pic").style.opacity = "1";
  }
}

function nothovering(i) {
  document.getElementById(lst[i]).onmouseout = function() {
        document.getElementById(lst[i] + "pic").style.opacity = "0.5";
  }
}

for (i = 0; i < lst.length; i ++) {
  hovering(i);
  nothovering(i);
}

var lst_u = ["portrait", "code", "lights"];
var j;

function clicked(j) {
  document.getElementById(lst_u[j]).onclick = function() {
        document.getElementById(lst_u[j] + "-text-container").scrollIntoView();
  }
}

for (j = 0; j < lst_u.length; j ++) {
  clicked(j);
}
//document.getElementById("portrait").onclick = function() {
//  document.getElementById("portrait-text-container").scrollIntoView();
//}

//document.getElementById("code").onclick = function() {
//  document.getElementById("code-text-container").scrollIntoView();
//}
