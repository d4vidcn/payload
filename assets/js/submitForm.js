$(document).ready(function() {
	
	//if submit button is clicked
	$('#submit').click(function () {		
		
		//Get the data from all the fields
		var position = $('input[name=position]');
		var name = $('input[name=name]');
		var email = $('input[name=email]');
		var message = $('input[name=message]');
		var returnError = false;

		//Simple validation to make sure user entered something
		//Add your own error checking here with JS, but also do some error checking with PHP.
		//If error found, add hightlight class to the text field
		if (position.val()=='') { 
			$(position).css("border-color", "red");
			position.addClass('error');
			returnError = true;
		} else position.removeClass('error');
		
		if (name.val()=='') {
			$(name).css("border-color", "red");
			$(name).focus();
			name.addClass('error');
			returnError = true;
		} else name.removeClass('error');
		
		if (email.val()=='') {
			$(email).css("border-color", "red");
			$(email).focus();
			email.addClass('error');
			returnError = true;
		} else email.removeClass('error');
		
		//E-mail address validation
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if(reg.test(email.val()) == false) {
			email.addClass('error');
			returnError = true;
		} else email.removeClass('error'); 
		
		if (message.val()=='') {
			message.addClass('error');
			returnError = true;
		} else message.removeClass('error');
		
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

			dataType: "json",
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				if (html==1) {		
					//hide the form
					//$('.contact-form').fadeOut('slow');					
					
					//show the success message
					//$('.form-success').fadeIn('slow');
					alert("Done!");
					// document.location.href="http://www.savemyride.eu/science";

				//if process.php returned 0/false (send mail failed)
				} else if(html==404) alert('You must attach your CV in order to proceed.');
				else alert('Sorry, there was an error, try again later.');				
			},
			error: function(err){
				alert("hola");		
			}
		}); 
		
		//cancel the submit button default behaviours
		return false;
	});	
});	