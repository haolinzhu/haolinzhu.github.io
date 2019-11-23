function govtheaderClicked() {
  document.getElementById("governmentheader").style.background = "#EBAEAE";
  document.getElementById("governmentheader").style.color = "white";
  document.getElementById("government-container").style.borderColor = "#EBAEAE";

  for (let i = 1; i < 9; i ++) {
    document.getElementById("gov" + i).style.filter = "none";
  }

}

function oppoheaderClicked() {
  document.getElementById("opposition-header").style.background = "#95DB9A";
  document.getElementById("opposition-container").style.borderColor = "#95DB9A";
  for (let i = 1; i < 8; i ++) {
    document.getElementById("oppo" + i).style.filter = "none";
  }
}

function islamheaderClicked() {
  document.getElementById("islamist-header").style.background = "#848a86";
  document.getElementById("islamist-header").style.color = "white";
  document.getElementById("islamist-container").style.borderColor = "#848a86";
  for (let i = 1; i < 4; i ++) {
    document.getElementById("i" + i).style.filter = "none";
  }
}

function kurdsheaderClicked() {
  document.getElementById("kurds-header").style.background = "#E0E069";
  document.getElementById("kurds-container").style.borderColor = "#E0E069";
  for (let i = 1; i < 5; i ++) {
    document.getElementById("k" + i).style.filter = "none";
  }
}

function isisheaderClicked() {
  document.getElementById("isis-header").style.background = "#000000";
  document.getElementById("isis-container").style.borderColor = "#000000";
  document.getElementById("isis-header").style.color = "white";
  document.getElementById("is").style.filter = "none";
}

function intheaderClicked() {
  document.getElementById("international").style.background = "#89C9F0";
  document.getElementById("foreign-container1").style.borderColor = "#89C9F0";
  document.getElementById("foreign-container2").style.borderColor = "#89C9F0";
  for (let i = 1; i < 8; i ++) {
    document.getElementById("int" + i).style.filter = "none";
  }
}


let govheader = document.getElementById("governmentheader");
govheader.onclick = govtheaderClicked;

let oppoheader = document.getElementById("opposition-header");
oppoheader.onclick = oppoheaderClicked;

let islamheader = document.getElementById("islamist-header");
islamheader.onclick = islamheaderClicked;

let kurdsheader = document.getElementById("kurds-header");
kurdsheader.onclick = kurdsheaderClicked;

let isisheader = document.getElementById("isis-header");
isisheader.onclick = isisheaderClicked;

let intheader = document.getElementById("international");
intheader.onclick = intheaderClicked;
