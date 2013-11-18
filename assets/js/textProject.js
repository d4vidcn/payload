/* TABS */
tab1Titulo = "Next generation launch vehicle";
tab1Subtitulo = "Next generation launch vehicle";
tab1Texto = "Payload Aerospace is currently under development our suborbital launch vehicle to provide an exceptionalplatform for development of new technologies for  industry and space companies and a perfect investigation vehicle for the scientific comunity";
tab1Imagen = "assets/img/PLD1.jpg";

tab2Titulo = "Great for";
tab2Subtitulo = "Saving work resources";
tab2Texto = "Save useful resources like GitHub repositories, code libraries, fonts, tools and services. Make notes writing Markdown. Find the things you need with full-text search.";
tab2Imagen = "assets/img/work.jpg";

tab3Titulo = "Great for";
tab3Subtitulo = "Company library";
tab3Texto = "Keep everyone on the same page and learn with intra-company reading list. Track things like press hits, competition or helpful knowledge in one library. Read, comment and highlight the things you read.";
tab3Imagen = "assets/img/company.jpg";


/* 	==============================================
						CODIGO
	============================================== */

document.getElementById("tab1Titulo").innerHTML = tab1Titulo;
document.getElementById("tab1Subtitulo").innerHTML = tab1Subtitulo;
document.getElementById("tab1Texto").innerHTML = tab1Texto;
document.getElementById("tab1Imagen").setAttribute("src", tab1Imagen);

document.getElementById("tab2Titulo").innerHTML = tab2Titulo;
document.getElementById("tab2Subtitulo").innerHTML = tab2Subtitulo;
document.getElementById("tab2Texto").innerHTML = tab2Texto;
document.getElementById("tab2Imagen").setAttribute("src", tab2Imagen);

document.getElementById("tab3Titulo").innerHTML = tab3Titulo;
document.getElementById("tab3Subtitulo").innerHTML = tab3Subtitulo;
document.getElementById("tab3Texto").innerHTML = tab3Texto;
document.getElementById("tab3Imagen").setAttribute("src", tab3Imagen);
