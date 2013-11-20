$(document).ready(function() {
	
	//if submit button is clicked
	$('#submit').click(function () {		
		
		//Get the data from all the fields
		var name = $('input[name=name]');
		var email = $('input[name=email]');
		var url = $('input[name=url]');
		var address = $('input[name=coord]');
		var comment = $('textarea[name=experience]');
		var icono = document.getElementById('icono').value;
		var returnError = false;

		//Simple validation to make sure user entered something
		//Add your own error checking here with JS, but also do some error checking with PHP.
		//If error found, add hightlight class to the text field
		if (name.val()=='') {
			name.addClass('error');
			returnError = true;
		} else name.removeClass('error');
		
		if (email.val()=='') {
			email.addClass('error');
			returnError = true;
		} else email.removeClass('error');
		
		//E-mail address validation
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if(reg.test(email.val()) == false) {
			email.addClass('error');
			returnError = true;
		} else email.removeClass('error'); 
		
		var regUrl = ""; ///^(http\:\/\/)([A-Za-z0-9_\-\.])+$/;
		if(regUrl.test(url.val()) == false){
			url.addClass('error');
			returnError = true;
		} else url.removeClass('error');

		var regCoords = /^(.[0-9]*\.[0-9]{6})\,(.[0-9]*\.[0-9]{6})$/;
		if(regCoords.test(address.val()) == false){
			document.getElementById('coord').value = "Haz click sobre el mapa";
			address.addClass('error');
			returnError = true;
		}

		if (comment.val()=='') {
			comment.addClass('error');
			returnError = true;
		} else comment.removeClass('error');
		
		if(icono == ''){
		    document.getElementById('accident').border = 1;
			document.getElementById('accident').style.borderColor="#FF0000";
			
			document.getElementById('cycling').border = 1;
			document.getElementById('cycling').style.borderColor="#FF0000";

			document.getElementById('caution').border = 1;
			document.getElementById('caution').style.borderColor="#FF0000";
			returnError = true;
		}

		// Highlight all error fields, then quit.
		if(returnError == true){
			return false;	
		}

		//organize the data
		var data = 'name=' + name.val() + '&email=' + email.val() + '&coord=' + 
		address.val() + '&experience='  + encodeURIComponent(comment.val()) + '&icono=' + icono;


		//disabled all the text fields
		$('.text').attr('disabled','true');
		
		//show the loading sign
		$('.loading').show();
		
        var form = new FormData($('#myform')[0]);

		//start the ajax
		$.ajax({
			//this is the php file that processes the data and sends email
			url: "upload_point.php",	
			
			//GET method is used
			type: "POST",

			//pass the data			
			data: form, //data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				if (html==1) {		
					//hide the form
					//$('.contact-form').fadeOut('slow');					
					
					//show the success message
					//$('.form-success').fadeIn('slow');
					
					//document.location.href="http://www.savemyride.eu/science";

				//if process.php returned 0/false (send mail failed)
				} else alert('Sorry, unexpected error. Please try again later.');				
			}		
		}); 
		
		//cancel the submit button default behaviours
		return false;
	});	
});	