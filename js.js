$(document).ready(function(){

	setInterval(function(){
    
    var dateTime = new Date();
    var minutesTwoDigitsWithLeadingZero = ("0" +dateTime.getMinutes()).substr(-2);
    
    var thisMinute = dateTime.getMinutes();
    var thisHour = dateTime.getHours();
    var thisSecond = dateTime.getSeconds();
    var thisMilliseconds = dateTime.getMilliseconds();
	  
	    $("#hours").text(thisHour);
	    $("#min").text(thisMinute);
	    $("#seconds").text(thisSecond);
	    $("#milliseconds").text(thisMilliseconds);

      if (thisSecond < 10){
      thisSecond = "0" + thisSecond;
      }
        
      if (thisMinute%2=== 0) { 
        $("#min").css("color", "blue")

    } else {
        $("#min").css("color", "black");
      }


     if (thisMinute%5==0); {
        $("body").css("background-color", "yellow");
      }

     if (thisHour % 1 === 0); {
        $("#clock").css("color", "purple");
      } 
    
  }, 1);


});