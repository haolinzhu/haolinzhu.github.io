function govtheaderClicked() {
  if (govClicked == false) {
    govClicked = true;
    document.getElementById("governmentheader").style.background = "#A63A50";
    document.getElementById("governmentheader").style.color = "white";
    document.getElementById("government-container").style.borderColor = "#A63A50";

    for (let i = 1; i < 10; i ++) {
      document.getElementById("gov" + i).style.filter = "none";
    }

    document.getElementById("l5").style.borderTop = "3px solid #DEDE8E";
    document.getElementById("l6").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l7").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l32").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l33").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l34").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l29").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l35").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l36").style.borderTop = "3px solid #EBAEAE";
  } else {
    govClicked = false;
    document.getElementById("governmentheader").style.background = "#FFFFFF";
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
    document.getElementById("l8").style.borderTop = "3px solid #DEDE8E";
    document.getElementById("l29").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l35").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l36").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l19").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l30").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l31").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l38").style.borderTop = "3px solid #EBAEAE";
  } else {
    oppoClicked = false;
    document.getElementById("opposition-header").style.background = "#FFFFFF";
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
    document.getElementById("l8").style.borderTop = "3px solid #DEDE8E";
    document.getElementById("l9").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l37").style.borderTop = "3px solid #EBAEAE";
  } else {
    islamClicked = false;
    document.getElementById("islamist-header").style.background = "#FFFFFF";
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
    document.getElementById("l5").style.borderTop = "3px solid #DEDE8E";
    document.getElementById("l15").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l37").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l31").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l38").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l39").style.borderTop = "3px solid #EBAEAE";
  } else {
    kurdsClicked = false;
    document.getElementById("kurds-header").style.background = "#FFFFFF";
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
    document.getElementById("l6").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l7").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l9").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l15").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l19").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l30").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l39").style.borderTop = "3px solid #EBAEAE";
  } else {
    isisClicked = false;
    document.getElementById("isis-header").style.background = "#FFFFFF";
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
    document.getElementById("l1").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l2").style.borderTop = "3px solid #95DB9A";
    document.getElementById("l3").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l4").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l10").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l13").style.borderTop = "3px solid #95DB9A";
    document.getElementById("l14").style.borderTop = "3px solid #95DB9A";
    document.getElementById("l16").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l17").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l18").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l20").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l21").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l11").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l22").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l23").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l24").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l25").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l26").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l27").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l28").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l12").style.borderTop = "3px solid #95DB9A";
    document.getElementById("l40").style.borderTop = "3px solid #95DB9A";
    document.getElementById("l41").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l42").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l43").style.borderTop = "3px solid #EBAEAE";
    document.getElementById("l44").style.borderTop = "3px solid #DEDE8E";
    document.getElementById("l45").style.borderTop = "3px solid #DEDE8E";
  } else {
    intClicked = false;
    document.getElementById("international").style.background = "#FFFFFF";
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

let us = document.getElementById("us");
let usbox = document.getElementById("usbox");
us.onclick = function() {
  usbox.style.display = "block";
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

let span5 = document.getElementsByClassName("close5")[0];
span5.onclick = function() {
  usbox.style.display = "none";
}

let rus_islam = document.getElementById("l1");
rus_islam.onmousemove = function() {
  if (intClicked == false) {
    rus_islam.style.borderTop = "4px solid #D6D6D6";
  } else {
    rus_islam.style.borderTop = "4px solid #eb6e6e"; //red
  }
};

rus_islam.onmouseout = function() {
  if (intClicked == false) {
    rus_islam.style.borderTop = "3px solid #D6D6D6";
  } else {
    rus_islam.style.borderTop = "3px solid #EBAEAE"; //red
  }
};

let gov_rus = document.getElementById("l2");
gov_rus.onmousemove = function() {
  if (intClicked == false) {
    gov_rus.style.borderTop = "4px solid #D6D6D6";
  } else {
    gov_rus.style.borderTop = "4px solid #58db61"; //green
  }
};

gov_rus.onmouseout = function() {
  if (intClicked == false) {
    gov_rus.style.borderTop = "3px solid #D6D6D6";
  } else {
    gov_rus.style.borderTop = "3px solid #95DB9A"; //green
  }
};

let rus_isis1 = document.getElementById("l3");
let rus_isis2 = document.getElementById("l4");

function rus_isis_on() {
  if (intClicked == false) {
    rus_isis1.style.borderTop = "4px solid #D6D6D6";
    rus_isis2.style.borderTop = "4px solid #D6D6D6";
  } else {
    rus_isis1.style.borderTop = "4px solid #eb6e6e";
    rus_isis2.style.borderTop = "4px solid #eb6e6e";
  }
};

function rus_isis_off() {
  if (intClicked == false) {
    rus_isis1.style.borderTop = "3px solid #D6D6D6";
    rus_isis2.style.borderTop = "3px solid #D6D6D6";
  } else {
    rus_isis1.style.borderTop = "3px solid #EBAEAE";
    rus_isis2.style.borderTop = "3px solid #EBAEAE";
  }
};

rus_isis1.onmousemove = rus_isis_on;
rus_isis2.onmousemove = rus_isis_on;
rus_isis1.onmouseout = rus_isis_off;
rus_isis2.onmouseout = rus_isis_off;

let gov_kurds = document.getElementById("l5");
gov_kurds.onmousemove = function() {
  if (govClicked == false && kurdsClicked == false) {
    gov_kurds.style.borderTop = "4px solid #D6D6D6";
  } else {
    gov_kurds.style.borderTop = "4px solid #e3e354"; //yellow
  }
};

gov_kurds.onmouseout = function() {
  if (govClicked == false && kurdsClicked == false) {
    gov_kurds.style.borderTop = "3px solid #D6D6D6";
  } else {
    gov_kurds.style.borderTop = "3px solid #DEDE8E"; //yellow
  }
};

let gov_isis1 = document.getElementById("l6");
let gov_isis2 = document.getElementById("l7");

function gov_isis_on() {
  if (govClicked == false && isisClicked == false) {
    gov_isis1.style.borderTop = "4px solid #D6D6D6";
    gov_isis2.style.borderTop = "4px solid #D6D6D6";
  } else {
    gov_isis1.style.borderTop = "4px solid #eb6e6e"; //red
    gov_isis2.style.borderTop = "4px solid #eb6e6e";
  }
};

function gov_isis_off() {
  if (govClicked == false && isisClicked == false) {
    gov_isis1.style.borderTop = "3px solid #D6D6D6";
    gov_isis2.style.borderTop = "3px solid #D6D6D6";
  } else {
    gov_isis1.style.borderTop = "3px solid #EBAEAE"; //red
    gov_isis2.style.borderTop = "3px solid #EBAEAE";
  }
};

gov_isis1.onmousemove = gov_isis_on;
gov_isis2.onmousemove = gov_isis_on;
gov_isis1.onmouseout = gov_isis_off;
gov_isis2.onmouseout = gov_isis_off;

let oppo_islam = document.getElementById("l8");
oppo_islam.onmousemove = function() {
  if (oppoClicked == false && islamClicked == false) {
    oppo_islam.style.borderTop = "4px solid #D6D6D6";
  } else {
    oppo_islam.style.borderTop = "4px solid #e3e354"; //yellow
  }
};

oppo_islam.onmouseout = function() {
  if (oppoClicked == false && islamClicked == false) {
    oppo_islam.style.borderTop = "3px solid #D6D6D6";
  } else {
    oppo_islam.style.borderTop = "3px solid #DEDE8E"; //yellow
  }
};

let isis_islam = document.getElementById("l9");
isis_islam.onmousemove = function() {
  if (isisClicked == false && islamClicked == false) {
    isis_islam.style.borderTop = "4px solid #D6D6D6";
  } else {
    isis_islam.style.borderTop = "4px solid #eb6e6e"; //red
  }
};

isis_islam.onmouseout = function() {
  if (isisClicked == false && islamClicked == false) {
    isis_islam.style.borderTop = "3px solid #D6D6D6";
  } else {
    isis_islam.style.borderTop = "3px solid #EBAEAE"; //red
  }
};

let kurds_turkey = document.getElementById("l10");
kurds_turkey.onmousemove = function() {
  if (intClicked == false && kurdsClicked == false) {
    kurds_turkey.style.borderTop = "4px solid #D6D6D6";
  } else {
    kurds_turkey.style.borderTop = "4px solid #eb6e6e"; //red
  }
};

kurds_turkey.onmouseout = function() {
  if (intClicked == false && kurdsClicked == false) {
    kurds_turkey.style.borderTop = "3px solid #D6D6D6";
  } else {
    kurds_turkey.style.borderTop = "3px solid #EBAEAE"; //red
  }
};

let us_islam1 = document.getElementById("l11");
let us_islam2 = document.getElementById("l22");
let us_islam3 = document.getElementById("l23");


function us_islam_on() {
  if (intClicked == false && islamClicked == false) {
    us_islam1.style.borderTop = "4px solid #D6D6D6";
    us_islam2.style.borderTop = "4px solid #D6D6D6";
    us_islam3.style.borderTop = "4px solid #D6D6D6";
  } else {
    us_islam1.style.borderTop = "4px solid #eb6e6e"; //red
    us_islam2.style.borderTop = "4px solid #eb6e6e";
    us_islam3.style.borderTop = "4px solid #eb6e6e";
  }
};

function us_islam_off() {
  if (intClicked == false && islamClicked == false) {
    us_islam1.style.borderTop = "3px solid #D6D6D6";
    us_islam2.style.borderTop = "3px solid #D6D6D6";
    us_islam3.style.borderTop = "3px solid #D6D6D6";
  } else {
    us_islam1.style.borderTop = "3px solid #EBAEAE"; //red
    us_islam2.style.borderTop = "3px solid #EBAEAE";
    us_islam3.style.borderTop = "3px solid #EBAEAE";
  }
};

us_islam1.onmousemove = us_islam_on;
us_islam2.onmousemove = us_islam_on;
us_islam3.onmousemove = us_islam_on;
us_islam1.onmouseout = us_islam_off;
us_islam2.onmouseout = us_islam_off;
us_islam3.onmouseout = us_islam_off;

let turkey_oppo1 = document.getElementById("l12");
let turkey_oppo2 = document.getElementById("l40");

function turkey_oppo_on() {
  if (intClicked == false) {
    turkey_oppo1.style.borderTop = "4px solid #D6D6D6";
    turkey_oppo2.style.borderTop = "4px solid #D6D6D6";
  } else {
    turkey_oppo1.style.borderTop = "4px solid #58db61"; //green
    turkey_oppo2.style.borderTop = "4px solid #58db61";
  }
};

function turkey_oppo_off() {
  if (intClicked == false) {
    turkey_oppo1.style.borderTop = "3px solid #D6D6D6";
    turkey_oppo2.style.borderTop = "3px solid #D6D6D6";
  } else {
    turkey_oppo1.style.borderTop = "3px solid #95DB9A"; //green
    turkey_oppo2.style.borderTop = "3px solid #95DB9A";
  }
};

turkey_oppo1.onmousemove = turkey_oppo_on;
turkey_oppo2.onmousemove = turkey_oppo_on;
turkey_oppo1.onmouseout = turkey_oppo_off;
turkey_oppo2.onmouseout = turkey_oppo_off;

let us_kurds = document.getElementById("l13");
us_kurds.onmousemove = function() {
  if (intClicked == false) {
    us_kurds.style.borderTop = "4px solid #D6D6D6";
  } else {
    us_kurds.style.borderTop = "4px solid #58db61"; //green
  }
};

us_kurds.onmouseout = function() {
  if (intClicked == false) {
    us_kurds.style.borderTop = "3px solid #D6D6D6";
  } else {
    us_kurds.style.borderTop = "3px solid #95DB9A"; //green
  }
};

let us_oppo = document.getElementById("l14");
us_oppo.onmousemove = function() {
  if (intClicked == false) {
    us_oppo.style.borderTop = "4px solid #D6D6D6";
  } else {
    us_oppo.style.borderTop = "4px solid #58db61"; //green
  }
};

us_oppo.onmouseout = function() {
  if (intClicked == false) {
    us_oppo.style.borderTop = "3px solid #D6D6D6";
  } else {
    us_oppo.style.borderTop = "3px solid #95DB9A"; //green
  }
};

let kurds_isis1 = document.getElementById("l15");
let kurds_isis2 = document.getElementById("l39");

function kurds_isis_on() {
  if (kurdsClicked == false && isisClicked == false) {
    kurds_isis1.style.borderTop = "4px solid #D6D6D6";
    kurds_isis2.style.borderTop = "4px solid #D6D6D6";
  } else {
    kurds_isis1.style.borderTop = "4px solid #eb6e6e"; //red
    kurds_isis2.style.borderTop = "4px solid #eb6e6e";
  }
};

function kurds_isis_off() {
  if (kurdsClicked == false && isisClicked == false) {
    kurds_isis1.style.borderTop = "3px solid #D6D6D6";
    kurds_isis2.style.borderTop = "3px solid #D6D6D6";
  } else {
    kurds_isis1.style.borderTop = "3px solid #EBAEAE"; //red
    kurds_isis2.style.borderTop = "3px solid #EBAEAE";
  }
};

kurds_isis1.onmousemove = kurds_isis_on;
kurds_isis2.onmousemove = kurds_isis_on;
kurds_isis1.onmouseout = kurds_isis_off;
kurds_isis2.onmouseout = kurds_isis_off;

let turkey_isis1 = document.getElementById("l16");
let turkey_isis2 = document.getElementById("l17");
let turkey_isis3 = document.getElementById("l18");


function turkey_isis_on() {
  if (intClicked == false) {
    turkey_isis1.style.borderTop = "4px solid #D6D6D6";
    turkey_isis2.style.borderTop = "4px solid #D6D6D6";
    turkey_isis3.style.borderTop = "4px solid #D6D6D6";
  } else {
    turkey_isis1.style.borderTop = "4px solid #eb6e6e"; //red
    turkey_isis2.style.borderTop = "4px solid #eb6e6e";
    turkey_isis3.style.borderTop = "4px solid #eb6e6e";
  }
};

function turkey_isis_off() {
  if (intClicked == false) {
    turkey_isis1.style.borderTop = "3px solid #D6D6D6";
    turkey_isis2.style.borderTop = "3px solid #D6D6D6";
    turkey_isis3.style.borderTop = "3px solid #D6D6D6";
  } else {
    turkey_isis1.style.borderTop = "3px solid #EBAEAE"; //red
    turkey_isis2.style.borderTop = "3px solid #EBAEAE";
    turkey_isis3.style.borderTop = "3px solid #EBAEAE";
  }
};

turkey_isis1.onmousemove = turkey_isis_on;
turkey_isis2.onmousemove = turkey_isis_on;
turkey_isis3.onmousemove = turkey_isis_on;
turkey_isis1.onmouseout = turkey_isis_off;
turkey_isis2.onmouseout = turkey_isis_off;
turkey_isis3.onmouseout = turkey_isis_off;

let oppo_isis1 = document.getElementById("l19");
let oppo_isis2 = document.getElementById("l30");

function oppo_isis_on() {
  if (oppoClicked == false && isisClicked == false) {
    oppo_isis1.style.borderTop = "4px solid #D6D6D6";
    oppo_isis2.style.borderTop = "4px solid #D6D6D6";
  } else {
    oppo_isis1.style.borderTop = "4px solid #eb6e6e"; //red
    oppo_isis2.style.borderTop = "4px solid #eb6e6e";
  }
};

function oppo_isis_off() {
  if (oppoClicked == false && isisClicked == false) {
    oppo_isis1.style.borderTop = "3px solid #D6D6D6";
    oppo_isis2.style.borderTop = "3px solid #D6D6D6";
  } else {
    oppo_isis1.style.borderTop = "3px solid #EBAEAE"; //red
    oppo_isis2.style.borderTop = "3px solid #EBAEAE";
  }
};

oppo_isis1.onmousemove = oppo_isis_on;
oppo_isis2.onmousemove = oppo_isis_on;
oppo_isis1.onmouseout = oppo_isis_off;
oppo_isis2.onmouseout = oppo_isis_off;

let us_isis1 = document.getElementById("l20");
let us_isis2 = document.getElementById("l21");
let us_isis3 = document.getElementById("l24");
let us_isis4 = document.getElementById("l25");

function us_isis_on() {
  if (intClicked == false) {
    us_isis1.style.borderTop = "4px solid #D6D6D6";
    us_isis2.style.borderTop = "4px solid #D6D6D6";
    us_isis3.style.borderTop = "4px solid #D6D6D6";
    us_isis4.style.borderTop = "4px solid #D6D6D6";
  } else {
    us_isis1.style.borderTop = "4px solid #eb6e6e"; //red
    us_isis2.style.borderTop = "4px solid #eb6e6e";
    us_isis3.style.borderTop = "4px solid #eb6e6e";
    us_isis4.style.borderTop = "4px solid #eb6e6e";
  }
};

function us_isis_off() {
  if (intClicked == false) {
    us_isis1.style.borderTop = "3px solid #D6D6D6";
    us_isis2.style.borderTop = "3px solid #D6D6D6";
    us_isis3.style.borderTop = "3px solid #D6D6D6";
    us_isis4.style.borderTop = "3px solid #D6D6D6";
  } else {
    us_isis1.style.borderTop = "3px solid #EBAEAE"; //red
    us_isis2.style.borderTop = "3px solid #EBAEAE";
    us_isis3.style.borderTop = "3px solid #EBAEAE";
    us_isis4.style.borderTop = "3px solid #EBAEAE";
  }
};

us_isis1.onmousemove = us_isis_on;
us_isis2.onmousemove = us_isis_on;
us_isis3.onmousemove = us_isis_on;
us_isis4.onmousemove = us_isis_on;
us_isis1.onmouseout = us_isis_off;
us_isis2.onmouseout = us_isis_off;
us_isis3.onmouseout = us_isis_off;
us_isis4.onmouseout = us_isis_off;

let rus_oppo1 = document.getElementById("l26");
let rus_oppo2 = document.getElementById("l27");
let rus_oppo3 = document.getElementById("l28");


function rus_oppo_on() {
  if (intClicked == false) {
    rus_oppo1.style.borderTop = "4px solid #D6D6D6";
    rus_oppo2.style.borderTop = "4px solid #D6D6D6";
    rus_oppo3.style.borderTop = "4px solid #D6D6D6";
  } else {
    rus_oppo1.style.borderTop = "4px solid #eb6e6e"; //red
    rus_oppo2.style.borderTop = "4px solid #eb6e6e";
    rus_oppo3.style.borderTop = "4px solid #eb6e6e";
  }
};

function rus_oppo_off() {
  if (intClicked == false) {
    rus_oppo1.style.borderTop = "3px solid #D6D6D6";
    rus_oppo2.style.borderTop = "3px solid #D6D6D6";
    rus_oppo3.style.borderTop = "3px solid #D6D6D6";
  } else {
    rus_oppo1.style.borderTop = "3px solid #EBAEAE"; //red
    rus_oppo2.style.borderTop = "3px solid #EBAEAE";
    rus_oppo3.style.borderTop = "3px solid #EBAEAE";
  }
};

rus_oppo1.onmousemove = rus_oppo_on;
rus_oppo2.onmousemove = rus_oppo_on;
rus_oppo3.onmousemove = rus_oppo_on;
rus_oppo1.onmouseout = rus_oppo_off;
rus_oppo2.onmouseout = rus_oppo_off;
rus_oppo3.onmouseout = rus_oppo_off;

let gov_oppo1 = document.getElementById("l29");
let gov_oppo2 = document.getElementById("l35");
let gov_oppo3 = document.getElementById("l36");


function gov_oppo_on() {
  if (govClicked == false && oppoClicked == false) {
    gov_oppo1.style.borderTop = "4px solid #D6D6D6";
    gov_oppo2.style.borderTop = "4px solid #D6D6D6";
    gov_oppo3.style.borderTop = "4px solid #D6D6D6";
  } else {
    gov_oppo1.style.borderTop = "4px solid #eb6e6e"; //red
    gov_oppo2.style.borderTop = "4px solid #eb6e6e";
    gov_oppo3.style.borderTop = "4px solid #eb6e6e";
  }
};

function gov_oppo_off() {
  if (govClicked == false && oppoClicked == false) {
    gov_oppo1.style.borderTop = "3px solid #D6D6D6";
    gov_oppo2.style.borderTop = "3px solid #D6D6D6";
    gov_oppo3.style.borderTop = "3px solid #D6D6D6";
  } else {
    gov_oppo1.style.borderTop = "3px solid #EBAEAE"; //red
    gov_oppo2.style.borderTop = "3px solid #EBAEAE";
    gov_oppo3.style.borderTop = "3px solid #EBAEAE";
  }
};

gov_oppo1.onmousemove = gov_oppo_on;
gov_oppo2.onmousemove = gov_oppo_on;
gov_oppo3.onmousemove = gov_oppo_on;
gov_oppo1.onmouseout = gov_oppo_off;
gov_oppo2.onmouseout = gov_oppo_off;
gov_oppo3.onmouseout = gov_oppo_off;

let kurds_oppo1 = document.getElementById("l31");
let kurds_oppo2 = document.getElementById("l38");

function kurds_oppo_on() {
  if (oppoClicked == false && kurdsClicked == false) {
    kurds_oppo1.style.borderTop = "4px solid #D6D6D6";
    kurds_oppo2.style.borderTop = "4px solid #D6D6D6";
  } else {
    kurds_oppo1.style.borderTop = "4px solid #eb6e6e"; //red
    kurds_oppo2.style.borderTop = "4px solid #eb6e6e";
  }
};

function kurds_oppo_off() {
  if (oppoClicked == false && kurdsClicked == false) {
    kurds_oppo1.style.borderTop = "3px solid #D6D6D6";
    kurds_oppo2.style.borderTop = "3px solid #D6D6D6";
  } else {
    kurds_oppo1.style.borderTop = "3px solid #EBAEAE"; //red
    kurds_oppo2.style.borderTop = "3px solid #EBAEAE";
  }
};

kurds_oppo1.onmousemove = kurds_oppo_on;
kurds_oppo2.onmousemove = kurds_oppo_on;
kurds_oppo1.onmouseout = kurds_oppo_off;
kurds_oppo2.onmouseout = kurds_oppo_off;

let gov_islam1 = document.getElementById("l32");
let gov_islam2 = document.getElementById("l33");
let gov_islam3 = document.getElementById("l34");


function gov_islam_on() {
  if (govClicked == false && islamClicked == false) {
    gov_islam1.style.borderTop = "4px solid #D6D6D6";
    gov_islam2.style.borderTop = "4px solid #D6D6D6";
    gov_islam3.style.borderTop = "4px solid #D6D6D6";
  } else {
    gov_islam1.style.borderTop = "4px solid #eb6e6e"; //red
    gov_islam2.style.borderTop = "4px solid #eb6e6e";
    gov_islam3.style.borderTop = "4px solid #eb6e6e";
  }
};

function gov_islam_off() {
  if (govClicked == false && islamClicked == false) {
    gov_islam1.style.borderTop = "3px solid #D6D6D6";
    gov_islam2.style.borderTop = "3px solid #D6D6D6";
    gov_islam3.style.borderTop = "3px solid #D6D6D6";
  } else {
    gov_islam1.style.borderTop = "3px solid #EBAEAE"; //red
    gov_islam2.style.borderTop = "3px solid #EBAEAE";
    gov_islam3.style.borderTop = "3px solid #EBAEAE";
  }
};

gov_islam1.onmousemove = gov_islam_on;
gov_islam2.onmousemove = gov_islam_on;
gov_islam3.onmousemove = gov_islam_on;
gov_islam1.onmouseout = gov_islam_off;
gov_islam2.onmouseout = gov_islam_off;
gov_islam3.onmouseout = gov_islam_off;

let kurds_islam = document.getElementById("l37");
kurds_islam.onmousemove = function() {
  if (islamClicked == false && kurdsClicked == false) {
    kurds_islam.style.borderTop = "4px solid #D6D6D6";
  } else {
    kurds_islam.style.borderTop = "4px solid #eb6e6e"; //red
  }
};

kurds_islam.onmouseout = function() {
  if (islamClicked == false && kurdsClicked == false) {
    kurds_islam.style.borderTop = "3px solid #D6D6D6";
  } else {
    kurds_islam.style.borderTop = "3px solid #EBAEAE"; //red
  }
};

let gov_us1 = document.getElementById("l41");
let gov_us2 = document.getElementById("l42");
let gov_us3 = document.getElementById("l43");

function gov_us_on() {
  if (intClicked == false) {
    gov_us1.style.borderTop = "4px solid #D6D6D6";
    gov_us2.style.borderTop = "4px solid #D6D6D6";
    gov_us3.style.borderTop = "4px solid #D6D6D6";
  } else {
    gov_us1.style.borderTop = "4px solid #eb6e6e"; //red
    gov_us2.style.borderTop = "4px solid #eb6e6e";
    gov_us3.style.borderTop = "4px solid #eb6e6e";
  }
};

function gov_us_off() {
  if (intClicked == false) {
    gov_us1.style.borderTop = "3px solid #D6D6D6";
    gov_us2.style.borderTop = "3px solid #D6D6D6";
    gov_us3.style.borderTop = "3px solid #D6D6D6";
  } else {
    gov_us1.style.borderTop = "3px solid #EBAEAE"; //red
    gov_us2.style.borderTop = "3px solid #EBAEAE";
    gov_us3.style.borderTop = "3px solid #EBAEAE";
  }
};

gov_us1.onmousemove = gov_us_on;
gov_us2.onmousemove = gov_us_on;
gov_us3.onmousemove = gov_us_on;
gov_us1.onmouseout = gov_us_off;
gov_us2.onmouseout = gov_us_off;
gov_us3.onmouseout = gov_us_off;

let turkey_islam1 = document.getElementById("l44");
let turkey_islam2 = document.getElementById("l45");

function turkey_islam_on() {
  if (intClicked == false) {
    turkey_islam1.style.borderTop = "4px solid #D6D6D6";
    turkey_islam2.style.borderTop = "4px solid #D6D6D6";
  } else {
    turkey_islam1.style.borderTop = "4px solid #e3e354"; //yellow
    turkey_islam2.style.borderTop = "4px solid #e3e354";
  }
};

function turkey_islam_off() {
  if (intClicked == false) {
    turkey_islam1.style.borderTop = "3px solid #D6D6D6";
    turkey_islam2.style.borderTop = "3px solid #D6D6D6";
  } else {
    turkey_islam1.style.borderTop = "3px solid #DEDE8E"; //yellow
    turkey_islam2.style.borderTop = "3px solid #DEDE8E";
  }
};

turkey_islam1.onmousemove = turkey_islam_on;
turkey_islam2.onmousemove = turkey_islam_on;
turkey_islam1.onmouseout = turkey_islam_off;
turkey_islam2.onmouseout = turkey_islam_off;
