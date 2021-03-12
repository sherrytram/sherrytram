$(document).ready(function(){
    $("div.fadeIn").fadeIn(1500).removeClass('hidden');

    $("p.imgtext1").hide();
    $("p.imgtext2").hide();
    $("p.imgtext3").hide();

    $("a.navbutton1").mouseover(function() {
        $("img.img1").animate({opacity: 0.5}, 200);
        $("p.imgtext1").show();
    });
    $("a.navbutton1").mouseout(function() {
        $("img.img1").animate({opacity: 1}, 200 );
        $("p.imgtext1").hide();
    });

    $("a.navbutton2").mouseover(function() {
        $("img.img2").animate({opacity: 0.5}, 200);
        $("p.imgtext2").show();
    });
    $("a.navbutton2").mouseout(function() {
        $("img.img2").animate({opacity: 1}, 200 );
        $("p.imgtext2").hide();
    });

    $("a.navbutton3").mouseover(function() {
        $("img.img3").animate({opacity: 0.5}, 200);
        $("p.imgtext3").show();
    });
    $("a.navbutton3").mouseout(function() {
        $("img.img3").animate({opacity: 1}, 200 );
        $("p.imgtext3").hide();
    });
    
  
   
});