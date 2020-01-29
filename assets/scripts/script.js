
var lst = ["instagram", "lightpainting", "beach", "capital", "bug", "yosemite", "kaiping", "library"];
var i;

function hovering(i) {
  document.getElementById(lst[i]).onmouseover = function() {
        document.getElementById(lst[i] + "pic").style.opacity = "1";
  }

  document.getElementById(lst[i]).onmouseout = function() {
        document.getElementById(lst[i] + "pic").style.opacity = "0.5";
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
        document.getElementById(lst_u[j]).style.position = "fixed";
        for (k = 0; k < lst_u.length; k ++) {
          if (k != j) {
            document.getElementById(lst_u[k]).style.position = "absolute";
          }
        }
  }

  document.getElementById(lst_u[j]).onmouseover = function() {
        document.getElementById(lst_u[j] + "des").style.display = "block";
        document.getElementById(lst_u[j] + "pic").style.opacity = "1";
  }

  document.getElementById(lst_u[j]).onmouseout = function() {
        document.getElementById(lst_u[j] + "des").style.display = "none";
        document.getElementById(lst_u[j] + "pic").style.opacity = "0.5";
  }
}

for (j = 0; j < lst_u.length; j ++) {
  clicked_or_hover(j);
}
