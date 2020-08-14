
var lst = ["instagram", "lightpainting", "beach", "capital", "bug", "yosemite", "kaiping", "library", "kaust", "dubai"];
var i;

function hovering(i) {
  document.getElementById(lst[i]).onmouseover = function() {
        document.getElementById(lst[i] + "pic").style.filter = "none";
  }
}

for (i = 0; i < lst.length; i ++) {
  hovering(i);
}


var lst_u = ["portrait", "code", "lights", "engineering", "art"];
var j;

function clicked_or_hover(j) {
  document.getElementById(lst_u[j]).onclick = function() {
        document.getElementById(lst_u[j] + "-text-container").scrollIntoView();
  }

  document.getElementById(lst_u[j]).onmouseover = function() {
        document.getElementById(lst_u[j] + "des").style.display = "block";
        document.getElementById(lst_u[j] + "pic").style.filter = "none";
  }

  document.getElementById(lst_u[j]).onmouseout = function() {
        document.getElementById(lst_u[j] + "des").style.display = "none";
  }
}

for (j = 0; j < lst_u.length; j ++) {
  clicked_or_hover(j);
}

var num = ["1", "2", "3", "5"]
for (i = 0; i < num.length; i ++) {
  document.getElementById("back-to-top-" + num[i]).onclick = function() {
        window.scrollTo(0, 0);
  }
}
