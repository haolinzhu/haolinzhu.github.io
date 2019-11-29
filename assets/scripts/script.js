function govtheaderClicked() {
  document.getElementById("governmentheader").style.background = "#A63A50";
  document.getElementById("governmentheader").style.color = "white";
  document.getElementById("government-container").style.borderColor = "#A63A50";

  for (let i = 1; i < 10; i ++) {
    document.getElementById("gov" + i).style.filter = "none";
  }

  document.getElementById("l5").style.borderTop = "4px solid #DEDE8E";
  document.getElementById("l6").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l7").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l32").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l33").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l34").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l29").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l35").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l36").style.borderTop = "4px solid #EBAEAE";
}

function oppoheaderClicked() {
  document.getElementById("opposition-header").style.background = "#5E8C61";
  document.getElementById("opposition-header").style.color = "white";
  document.getElementById("opposition-container").style.borderColor = "#5E8C61";
  for (let i = 1; i < 9; i ++) {
    document.getElementById("oppo" + i).style.filter = "none";
  }
  document.getElementById("l8").style.borderTop = "4px solid #DEDE8E";
  document.getElementById("l29").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l35").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l36").style.borderTop = "4px solid #EBAEAE";
}

function islamheaderClicked() {
  document.getElementById("islamist-header").style.background = "#848a86";
  document.getElementById("islamist-header").style.color = "white";
  document.getElementById("islamist-container").style.borderColor = "#848a86";
  for (let i = 1; i < 4; i ++) {
    document.getElementById("i" + i).style.filter = "none";
  }
  document.getElementById("l8").style.borderTop = "4px solid #DEDE8E";
  document.getElementById("l9").style.borderTop = "4px solid #EBAEAE";
}

function kurdsheaderClicked() {
  document.getElementById("kurds-header").style.background = "#BDC667";
  document.getElementById("kurds-header").style.color = "white";
  document.getElementById("kurds-container").style.borderColor = "#BDC667";
  for (let i = 1; i < 5; i ++) {
    document.getElementById("k" + i).style.filter = "none";
  }
  document.getElementById("l5").style.borderTop = "4px solid #DEDE8E";
  document.getElementById("l15").style.borderTop = "4px solid #EBAEAE";

}

function isisheaderClicked() {
  document.getElementById("isis-header").style.background = "#0B0A07";
  document.getElementById("isis-container").style.borderColor = "#0B0A07";
  document.getElementById("isis-header").style.color = "white";
  document.getElementById("is").style.filter = "none";

  document.getElementById("l6").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l7").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l9").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l15").style.borderTop = "4px solid #EBAEAE";
}

function intheaderClicked() {
  document.getElementById("international").style.background = "#427AA1";
  document.getElementById("international").style.color = "white";
  document.getElementById("foreign-container1").style.borderColor = "#427AA1";
  document.getElementById("foreign-container2").style.borderColor = "#427AA1";
  document.getElementById("foreign-container3").style.borderColor = "#427AA1";
  for (let i = 1; i < 7; i ++) {
    document.getElementById("int" + i).style.filter = "none";
  }
  document.getElementById("l1").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l2").style.borderTop = "4px solid #95DB9A";
  document.getElementById("l3").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l4").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l10").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l12").style.borderTop = "4px solid #95DB9A";
  document.getElementById("l13").style.borderTop = "4px solid #95DB9A";
  document.getElementById("l14").style.borderTop = "4px solid #95DB9A";
  document.getElementById("l16").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l17").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l18").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l19").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l20").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l21").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l11").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l22").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l23").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l24").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l25").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l26").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l27").style.borderTop = "4px solid #EBAEAE";
  document.getElementById("l28").style.borderTop = "4px solid #EBAEAE";

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
