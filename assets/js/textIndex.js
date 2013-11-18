/* INTRO */
titulo = "Ready to launch";
subtitulo = "Spanish entrepreneurial-based company founded in 2011 under development of commercial sounding rockets for space transportation and investigation services.";


/* ABOUT */
aboutCabecera = "The way to reach SPACE, focused on";
aboutFeature1 = "Propulsion developments";
aboutFeature1Desc = "Descripcion caracteristica 1";
aboutFeature2 = "Technology scalability";
aboutFeature2Desc = "Descripcion caracteristica 2";
aboutFeature3 = "Hardware reusability";
aboutFeature3Desc = "Descripcion caracteristica 3";


/* PROYECTO */
proyectoCabecera = "Proyecto";
proyectoDesc1 = "Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual. Informacion acerca del proyecto actual.";
proyectoDesc2 = "Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante. Mas informacion relevante.";
video = "TEMlExCS1dE"

/* PERFILES */
perfilesCabecera = "PLD team";
perfil1Nombre = "Raul Torres";
perfil1Desc = "Co-founder & CEO. Propulsion engineer & launch vehicle chief designer. #FingersCrossed";
perfil1Pic = "assets/img/raulT.png";
prof1linkedIn = "http://www.linkedin.com/asdfasdfasdf";
prof1twitter = "http://www.twitter.com/raultorres0";
prof1fb = ""; 
prof1mail = "mailto:david@añlsdf.com"; 

perfil2Nombre = "Raul Verdú";
perfil2Desc = "Co-fouder & R&DO.Facilities engineer & Industrial chief designer. #BikePassion";
perfil2Pic = "assets/img/raulA.png";
prof2linkedIn = "";
prof2twitter = "";
prof2fb = ""; 
prof2mail = ""; 

perfil3Nombre = "Eleazar González";
perfil3Desc = "Propulsion engineer & analyst.";
perfil3Pic = "assets/img/raulA.png";
prof3linkedIn = "";
prof3twitter = "";
prof3fb = ""; 
prof3mail = ""; 

perfil4Nombre = "Mariano Alfaro";
perfil4Desc = "Intrumentation engineer.";
perfil4Pic = "assets/img/raulA.png";
prof4linkedIn = "";
prof4twitter = "";
prof4fb = ""; 
prof4mail = ""; 

/* CONTACTO */
contactoCabecera = "Contact";
contactoSubcabecera = "Our location:";
emailCompania = "contact@payloadaerospace.com";


/* 	==============================================
						CODIGO
	============================================== */

document.getElementById("titulo").innerHTML = titulo;
document.getElementById("subtitulo").innerHTML = subtitulo;

document.getElementById("aboutCabecera").innerHTML = aboutCabecera;
document.getElementById("aboutFeature1").innerHTML = aboutFeature1;
document.getElementById("aboutFeature1Desc").innerHTML = aboutFeature1Desc;
document.getElementById("aboutFeature2").innerHTML = aboutFeature2;
document.getElementById("aboutFeature2Desc").innerHTML = aboutFeature2Desc;
document.getElementById("aboutFeature3").innerHTML = aboutFeature3;
document.getElementById("aboutFeature3Desc").innerHTML = aboutFeature3Desc;
document.getElementById("proyectoCabecera").innerHTML = proyectoCabecera;
document.getElementById("proyectoDesc1").innerHTML = proyectoDesc1;
document.getElementById("proyectoDesc2").innerHTML = proyectoDesc2;
document.getElementById("video").setAttribute("src", "http://www.youtube.com/embed/" + video);
//document.getElementById("rondaFinanciacion").innerHTML = rondaFinanciacion;
document.getElementById("prof1").setAttribute("src", perfil1Pic);
document.getElementById("perfilesCabecera").innerHTML = perfilesCabecera;
document.getElementById("perfil1Nombre").innerHTML = perfil1Nombre;
document.getElementById("perfil1Desc").innerHTML = perfil1Desc;
//document.getElementById("prof1linkedIn").innerHTML = prof1linkedIn;
//document.getElementById("prof1twitter").innerHTML = prof1twitter;
document.getElementById("prof1fb").innerHTML = prof1fb;
document.getElementById("prof1mail").innerHTML = prof1mail;
document.getElementById("prof2").setAttribute("src", perfil2Pic);
document.getElementById("perfil2Nombre").innerHTML = perfil2Nombre;
document.getElementById("perfil2Desc").innerHTML = perfil2Desc;
document.getElementById("prof2linkedIn").innerHTML = prof2linkedIn;
document.getElementById("prof2twitter").innerHTML = prof2twitter;
document.getElementById("prof2fb").innerHTML = prof2fb;
document.getElementById("prof2mail").innerHTML = prof2mail;
document.getElementById("prof3").setAttribute("src", perfil3Pic);
document.getElementById("perfil3Nombre").innerHTML = perfil3Nombre;
document.getElementById("perfil3Desc").innerHTML = perfil3Desc;
document.getElementById("prof3linkedIn").innerHTML = prof3linkedIn;
document.getElementById("prof3twitter").innerHTML = prof3twitter;
document.getElementById("prof3fb").innerHTML = prof3fb;
document.getElementById("prof3mail").innerHTML = prof3mail;
document.getElementById("prof4").setAttribute("src", perfil4Pic);
document.getElementById("perfil4Nombre").innerHTML = perfil4Nombre;
document.getElementById("perfil4Desc").innerHTML = perfil4Desc;
document.getElementById("prof4linkedIn").innerHTML = prof4linkedIn;
document.getElementById("prof4twitter").innerHTML = prof4twitter;
document.getElementById("prof4fb").innerHTML = prof4fb;
document.getElementById("prof4mail").innerHTML = prof4mail;
document.getElementById("contactoCabecera").innerHTML = contactoCabecera;
document.getElementById("contactoSubcabecera").innerHTML = contactoSubcabecera;
document.getElementById("emailCompania").innerHTML = emailCompania;

$(document).ready(function(){
	$('#prof1linkedIn').click(function(){
		window.location = prof1linkedIn;
	});
	$('#prof1twitter').click(function(){
		window.location = prof1twitter;
	});
	$('#prof1fb').click(function(){
		window.location = prof1fb;
	});
	$('#prof1mail').click(function(){
		window.location = prof1mail;
	});
	$('#prof2linkedIn').click(function(){
		window.location = prof2linkedIn;
	});
	$('#prof2twitter').click(function(){
		window.location = prof2twitter;
	});
	$('#prof2fb').click(function(){
		window.location = prof2fb;
	});
	$('#prof2mail').click(function(){
		window.location = prof2mail;
	});
	$('#prof3linkedIn').click(function(){
		window.location = prof3linkedIn;
	});
	$('#prof3twitter').click(function(){
		window.location = prof3twitter;
	});
	$('#prof3fb').click(function(){
		window.location = prof3fb;
	});
	$('#prof3mail').click(function(){
		window.location = prof3mail;
	});
	$('#prof4linkedIn').click(function(){
		window.location = prof4linkedIn;
	});
	$('#prof4twitter').click(function(){
		window.location = prof4twitter;
	});
	$('#prof4fb').click(function(){
		window.location = prof4fb;
	});
	$('#prof4mail').click(function(){
		window.location = prof4mail;
	});
});
