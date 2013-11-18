/* MENU */
navbar1 = "Development Blog";
navbar2 = "Our company";
navbar3 = "Project";
//navbar4 = "Investor relations";
navbar5 = "Alliances and partnerships";
navbar6 = "PLD team";
navbar7 = "Contact";

/* REDES */
redesCabecera = "PLD social networks, follow us!";
idTwitter = "payloadteam"
idSkype = "";
idVimeo = "";
idInstagram = "";

/* COPYRIGHT */
copyright = "&copy; Payload Aerospace, S.L, All rights reserved.";


/* 	==============================================
						CODIGO
	============================================== */

document.getElementById("navbar1").innerHTML = navbar1;
document.getElementById("navbar2").innerHTML = navbar2;
document.getElementById("navbar3").innerHTML = navbar3;
//document.getElementById("navbar4").innerHTML = navbar4;
document.getElementById("navbar5").innerHTML = navbar5;
document.getElementById("navbar6").innerHTML = navbar6;
document.getElementById("navbar7").innerHTML = navbar7;

document.getElementById("redesCabecera").innerHTML = redesCabecera;
document.getElementById("idTwitter").setAttribute("title", "@" + idTwitter);
document.getElementById("idTwitter").setAttribute("href", "http://www.twitter.com/" + idTwitter);
document.getElementById("copyright").innerHTML = copyright;

