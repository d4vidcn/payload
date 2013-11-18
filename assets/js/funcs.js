$("#prof1").on({
 "mouseover" : function() {
    this.src = 'assets/img/raulA.png';
  },
  "mouseout" : function() {
    this.src = 'assets/img/raulB.png';
  }
});

$("#prof2").on({
 "mouseover" : function() {
    this.src = 'assets/img/raulA.png';
  },
  "mouseout" : function() {
    this.src = 'assets/img/raulB.png';
  }
});

$("#prof3").on({
 "mouseover" : function() {
    this.src = 'assets/img/raulA.png';
  },
  "mouseout" : function() {
    this.src = 'assets/img/raulB.png';
  }
});

$("#prof4").on({
 "mouseover" : function() {
    this.src = 'assets/img/raulA.png';
  },
  "mouseout" : function() {
    this.src = 'assets/img/raulB.png';
  }
});

/*	==================================================
	# Skills Percentage Marker
================================================== */	
$( '.progress .bar' ).each(function() {
	var percentage = $(this).data( 'percentage' );
	$(this).append('<span class="percentage-marker">' + percentage + '&#37;</span>');
});	


$(function () {
    $(window).scroll(function(){
    // global scroll to top button
        if ($(this).scrollTop() > 300) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }        
    });
    
    // scroll nav
    $('.scroller').click(function(){
    	var section = $($(this).data("section"));
    	var top = section.offset().top-82;
        $("html, body").animate({ scrollTop: top }, 700);
        return false;
    });
 
            
});


$("#career1").on({
  "mouseover" : function() {
    if($("#career1").css('background-color') == "rgb(255, 255, 255)") $("#career1").css('background-color','#eee');
  },
  "mouseout" : function() {
    if($("#career1").css('background-color') == "rgb(238, 238, 238)") $("#career1").css('background-color','#fff');
  },
  "click" : function() {
    if($("#career1").css('background-color') == "rgb(238, 238, 238)"){
      $("#career1").css('background-color','#aaa');
      $("#career2").css('background-color','#fff');
      $("#career3").css('background-color','#fff');
      $('#inputPosition').val($('#career1Position').html());
    }else{
      $("#career1").css('background-color','#fff');
      $('#inputPosition').val('');
    }
  }
});

$("#career2").on({
  "mouseover" : function() {
    if($("#career2").css('background-color') == "rgb(255, 255, 255)") $("#career2").css('background-color','#eee');
  },
  "mouseout" : function() {
    if($("#career2").css('background-color') == "rgb(238, 238, 238)") $("#career2").css('background-color','#fff');
  },
  "click" : function() {
    if($("#career2").css('background-color') == "rgb(238, 238, 238)"){
      $("#career2").css('background-color','#aaa');
      $("#career1").css('background-color','#fff');
      $("#career3").css('background-color','#fff');
      $('#inputPosition').val($('#career2Position').html());
    }else{
      $("#career2").css('background-color','#fff');
      $('#inputPosition').val('');
    }
  }
});

$("#career3").on({
  "mouseover" : function() {
    if($("#career3").css('background-color') == "rgb(255, 255, 255)") $("#career3").css('background-color','#eee');
  },
  "mouseout" : function() {
    if($("#career3").css('background-color') == "rgb(238, 238, 238)") $("#career3").css('background-color','#fff');
  },
  "click" : function() {
    if($("#career3").css('background-color') == "rgb(238, 238, 238)"){
      $("#career3").css('background-color','#aaa');
      $("#career2").css('background-color','#fff');
      $("#career1").css('background-color','#fff');
      $('#inputPosition').val($('#career3Position').html());
    }else{
      $("#career3").css('background-color','#fff');
      $('#inputPosition').val('');
    }
  }
});


