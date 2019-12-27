let portrait = document.getElementById("portrait");
let about_description = document.getElementById("abtdes");
let about_pic = document.getElementById("abtpic");
portrait.onmouseover = function() {
  about_description.style.display = "block";
  about_pic.style.opacity = "0.5";
}
portrait.onmouseout = function() {
  about_description.style.display = "none";
  about_pic.style.opacity = "1";
}

let lights = document.getElementById("lights");
let lights_description = document.getElementById("advdes");
let lights_pic = document.getElementById("advpic");
lights.onmouseover = function() {
  lights_description.style.display = "block";
  lights_pic.style.opacity = "0.5";
}
lights.onmouseout = function() {
  lights_description.style.display = "none";
  lights_pic.style.opacity = "1";
}

let syria = document.getElementById("syria");
let syria_description = document.getElementById("projdes");
let syria_pic = document.getElementById("projpic");
syria.onmouseover = function() {
  syria_description.style.display = "block";
  syria_pic.style.opacity = "0.5";
}
syria.onmouseout = function() {
  syria_description.style.display = "none";
  syria_pic.style.opacity = "1";
}

let art = document.getElementById("art");
let art_description = document.getElementById("artdes");
let art_pic = document.getElementById("artpic");
art.onmouseover = function() {
  art_description.style.display = "block";
  art_pic.style.opacity = "0.5";
}
art.onmouseout = function() {
  art_description.style.display = "none";
  art_pic.style.opacity = "1";
}
