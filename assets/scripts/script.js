function govtheaderClicked() {
  document.getElementById("governmentheader").style.background = "#EB8A8A";
  document.getElementById("governmentheader").style.color = "white";
  document.getElementById("government-container").style.borderColor = "#EB8A8A";

  for (let i = 1; i < 9; i ++) {
    document.getElementById("gov" + i).style.filter = "none";
  }

  document.getElementById("l5").style.borderTop = "3px solid #DEDE8E";
  document.getElementById("l6").style.borderTop = "3px solid #95DB9A";
  document.getElementById("l6").style.borderTop = "3px solid #95DB9A";

}

function oppoheaderClicked() {
  document.getElementById("opposition-header").style.background = "#74DB7B";
  document.getElementById("opposition-header").style.color = "white";
  document.getElementById("opposition-container").style.borderColor = "#74DB7B";
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
  document.getElementById("l5").style.borderTop = "3px solid #DEDE8E";

}

function isisheaderClicked() {
  document.getElementById("isis-header").style.background = "#000000";
  document.getElementById("isis-container").style.borderColor = "#000000";
  document.getElementById("isis-header").style.color = "white";
  document.getElementById("is").style.filter = "none";

  document.getElementById("l6").style.borderTop = "3px solid #95DB9A";
  document.getElementById("l6").style.borderTop = "3px solid #95DB9A";
}

function intheaderClicked() {
  document.getElementById("international").style.background = "#89C9F0";
  document.getElementById("foreign-container1").style.borderColor = "#89C9F0";
  document.getElementById("foreign-container2").style.borderColor = "#89C9F0";
  for (let i = 1; i < 8; i ++) {
    document.getElementById("int" + i).style.filter = "none";
  }
  document.getElementById("l1").style.borderTop = "3px solid #EBAEAE";
  document.getElementById("l2").style.borderTop = "3px solid #95DB9A";
  document.getElementById("l3").style.borderTop = "3px solid #EBAEAE";
  document.getElementById("l4").style.borderTop = "3px solid #EBAEAE";

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
