$(document).ready(function(){

  setInterval(function(){
  	
  	var dateTime = new Date();
	var minutesTwoDigitsWithLeadingZero = ("0" +dateTime.getMinutes()).substr(-2);
		$("#milliseconds").text(dateTime.getMilliseconds());
		$("#seconds").text(dateTime.getSeconds());
		$("#minutes").text(dateTime.getMinutes());
		$("#hours").text(dateTime.getHours());
	
	var thisSecond = dateTime.getSeconds();
		if (thisSecond <10){
			thisSecond = "0"+thisSecond;

    var thisMinute = dateTime.getMinutes();
    var thisHour = dateTime.getHours();
	}
    $("#minutes").text(thisMinute);
	$("#seconds").text(thisSecond);
	$("#minutes").text(dateTime.getMinutes());
		if (thisSecond%2==0) {
			$("body").css("background-color","blue");
	} 
	else {
		    $("body").css("background-color", "purple")
	}

	    if (thisMinute%5==0) {
	    	$("body").css("background-color","yellow")
	    }

	    else (thisHour%60==0) {
	    	$("clock").css("color", "black")
	    }
		
	},1);

});