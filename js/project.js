
$(document).ready(function(){
  var animating = false;

  if($(".slide").length > 1) {
    $("#next").show();    
  }

  $("#next").click(function(){
    if(!animating) {
      animating = true; 

      $("#prev").show();

      if($(".current").next().is(":last-of-type")) {
        $("#next").hide();  
      }
      $(".current").next().css("z-index", 1).show();
      $(".current").animate({left: "-100%"}, 1000, function(){
        $(".current").css("left","0").removeClass("current").next().addClass("current").attr("style", "");
        $(".current").prev().hide();
        animating = false;
      });
    }
  });
  
  $("#prev").click(function(){
    if(!animating) {
      animating = true;
      
      $("#next").show();  
      if($(".current").prev().is(":first-of-type")) {
        $("#prev").hide();  
      }

      $(".current").prev().css("z-index", 1).show();
      $(".current").animate({right: "-100%"}, 1000, function(){
        $(".current").css("left","0").removeClass("current").prev().addClass("current").attr("style", "");
        $(".current").next().hide();
        animating = false;
      });
    }
  }); 
});

