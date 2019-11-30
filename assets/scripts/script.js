function govtheaderClicked() {
  if (govClicked == false) {
    govClicked = true;
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
  } else {
    govClicked = false;
    document.getElementById("governmentheader").style.background = "#D6D6D6";
    document.getElementById("governmentheader").style.color = "black";
    document.getElementById("government-container").style.borderColor = "#D6D6D6";

    for (let i = 1; i < 10; i ++) {
      document.getElementById("gov" + i).style.filter = "grayscale(100%)";
    }

    document.getElementById("l5").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l6").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l7").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l32").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l33").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l34").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l29").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l35").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l36").style.borderTop = "3px solid #D6D6D6";
  }
}

function oppoheaderClicked() {
  if (oppoClicked == false) {
    oppoClicked = true;
    document.getElementById("opposition-header").style.background = "#5E8C61";
    document.getElementById("opposition-header").style.color = "white";
    document.getElementById("opposition-container").style.borderColor = "#5E8C61";
    for (let i = 1; i < 10; i ++) {
      document.getElementById("oppo" + i).style.filter = "none";
    }
    document.getElementById("l8").style.borderTop = "4px solid #DEDE8E";
    document.getElementById("l29").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l35").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l36").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l19").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l30").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l31").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l38").style.borderTop = "4px solid #EBAEAE";
  } else {
    oppoClicked = false;
    document.getElementById("opposition-header").style.background = "#D6D6D6";
    document.getElementById("opposition-header").style.color = "black";
    document.getElementById("opposition-container").style.borderColor = "#D6D6D6";
    for (let i = 1; i < 10; i ++) {
      document.getElementById("oppo" + i).style.filter = "grayscale(100%)";
    }
    document.getElementById("l8").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l29").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l35").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l36").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l19").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l30").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l31").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l38").style.borderTop = "3px solid #D6D6D6";
  }
}

function islamheaderClicked() {
  if (islamClicked == false) {
    islamClicked = true;
    document.getElementById("islamist-header").style.background = "#848a86";
    document.getElementById("islamist-header").style.color = "white";
    document.getElementById("islamist-container").style.borderColor = "#848a86";
    for (let i = 1; i < 5; i ++) {
      document.getElementById("i" + i).style.filter = "none";
    }
    document.getElementById("l8").style.borderTop = "4px solid #DEDE8E";
    document.getElementById("l9").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l37").style.borderTop = "4px solid #EBAEAE";
  } else {
    islamClicked = false;
    document.getElementById("islamist-header").style.background = "#D6D6D6";
    document.getElementById("islamist-header").style.color = "black";
    document.getElementById("islamist-container").style.borderColor = "#D6D6D6";
    for (let i = 1; i < 4; i ++) {
      document.getElementById("i" + i).style.filter = "grayscale(100%)";
    }
    document.getElementById("l8").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l9").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l37").style.borderTop = "3px solid #D6D6D6";
  }
}

function kurdsheaderClicked() {
  if (kurdsClicked == false) {
    kurdsClicked = true;
    document.getElementById("kurds-header").style.background = "#BDC667";
    document.getElementById("kurds-header").style.color = "white";
    document.getElementById("kurds-container").style.borderColor = "#BDC667";
    for (let i = 1; i < 5; i ++) {
      document.getElementById("k" + i).style.filter = "none";
    }
    document.getElementById("l5").style.borderTop = "4px solid #DEDE8E";
    document.getElementById("l15").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l37").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l31").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l38").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l39").style.borderTop = "4px solid #EBAEAE";
  } else {
    kurdsClicked = false;
    document.getElementById("kurds-header").style.background = "#D6D6D6";
    document.getElementById("kurds-header").style.color = "black";
    document.getElementById("kurds-container").style.borderColor = "#D6D6D6";
    for (let i = 1; i < 5; i ++) {
      document.getElementById("k" + i).style.filter = "grayscale(100%)";
    }
    document.getElementById("l5").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l15").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l37").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l31").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l38").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l39").style.borderTop = "3px solid #D6D6D6";
  }
}

function isisheaderClicked() {
  if (isisClicked == false) {
    isisClicked = true;
    document.getElementById("isis-header").style.background = "#0B0A07";
    document.getElementById("isis-container").style.borderColor = "#0B0A07";
    document.getElementById("isis-header").style.color = "white";
    document.getElementById("is").style.filter = "none";
    document.getElementById("l6").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l7").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l9").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l15").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l19").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l30").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l39").style.borderTop = "4px solid #EBAEAE";
  } else {
    isisClicked = false;
    document.getElementById("isis-header").style.background = "#D6D6D6";
    document.getElementById("isis-container").style.borderColor = "#D6D6D6";
    document.getElementById("isis-header").style.color = "black";
    document.getElementById("is").style.filter = "grayscale(100%)";
    document.getElementById("l6").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l7").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l9").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l15").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l19").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l30").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l39").style.borderTop = "3px solid #D6D6D6";
  }
}

function intheaderClicked() {
  if (intClicked == false) {
    intClicked = true;
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
    document.getElementById("l13").style.borderTop = "4px solid #95DB9A";
    document.getElementById("l14").style.borderTop = "4px solid #95DB9A";
    document.getElementById("l16").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l17").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l18").style.borderTop = "4px solid #EBAEAE";
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
    document.getElementById("l12").style.borderTop = "4px solid #95DB9A";
    document.getElementById("l40").style.borderTop = "4px solid #95DB9A";
    document.getElementById("l41").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l42").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l43").style.borderTop = "4px solid #EBAEAE";
    document.getElementById("l44").style.borderTop = "4px solid #DEDE8E";
    document.getElementById("l45").style.borderTop = "4px solid #DEDE8E";
  } else {
    intClicked = false;
    document.getElementById("international").style.background = "#D6D6D6";
    document.getElementById("international").style.color = "black";
    document.getElementById("foreign-container1").style.borderColor = "#D6D6D6";
    document.getElementById("foreign-container2").style.borderColor = "#D6D6D6";
    document.getElementById("foreign-container3").style.borderColor = "#D6D6D6";
    for (let i = 1; i < 7; i ++) {
      document.getElementById("int" + i).style.filter = "grayscale(100%)";
    }
    document.getElementById("l1").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l2").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l3").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l4").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l10").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l13").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l14").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l16").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l17").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l18").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l20").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l21").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l11").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l22").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l23").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l24").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l25").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l26").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l27").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l28").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l12").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l40").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l41").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l42").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l43").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l44").style.borderTop = "3px solid #D6D6D6";
    document.getElementById("l45").style.borderTop = "3px solid #D6D6D6";
  }
}

let govClicked = false;
let govheader = document.getElementById("governmentheader");
govheader.onclick = govtheaderClicked;

let oppoClicked = false;
let oppoheader = document.getElementById("opposition-header");
oppoheader.onclick = oppoheaderClicked;

let islamClicked = false;
let islamheader = document.getElementById("islamist-header");
islamheader.onclick = islamheaderClicked;

let kurdsClicked = false;
let kurdsheader = document.getElementById("kurds-header");
kurdsheader.onclick = kurdsheaderClicked;

let isisClicked = false;
let isisheader = document.getElementById("isis-header");
isisheader.onclick = isisheaderClicked;

let intClicked = false;
let intheader = document.getElementById("international");
intheader.onclick = intheaderClicked;

let gov = document.getElementById("gov");
let govbox = document.getElementById("govbox");
gov.onclick = function() {
  govbox.style.display = "block";
}

let isis = document.getElementById("isis");
let isisbox = document.getElementById("isisbox");
isis.onclick = function() {
  isisbox.style.display = "block";
}

let sdf = document.getElementById("sdf");
let sdfbox = document.getElementById("sdfbox");
sdf.onclick = function() {
  sdfbox.style.display = "block";
}

let hts = document.getElementById("hts");
let htsbox = document.getElementById("htsbox");
hts.onclick = function() {
  htsbox.style.display = "block";
}

let rebels = document.getElementById("rebels");
let rebelsbox = document.getElementById("rebelsbox");
rebels.onclick = function() {
  rebelsbox.style.display = "block";
}

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  govbox.style.display = "none";
}

let span1 = document.getElementsByClassName("close1")[0];
span1.onclick = function() {
  isisbox.style.display = "none";
}

let span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function() {
  sdfbox.style.display = "none";
}

let span3 = document.getElementsByClassName("close3")[0];
span3.onclick = function() {
  htsbox.style.display = "none";
}

let span4 = document.getElementsByClassName("close4")[0];
span4.onclick = function() {
  rebelsbox.style.display = "none";
}
