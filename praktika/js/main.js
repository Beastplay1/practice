$(function(){
	var lift1 = $(".lift1");
	var lift2 = $(".lift2");
	var lift3 = $(".lift3");
	var but = $(".man-button");
	var floor = [1,2,3,4,5,6,7,8,9];

	$('.lift').each(function(i,el){
    //    var tBottom = Math.floor(Math.random()*500),
      var tTop  = Math.floor(Math.random()*500);
	  var sTop = Math.floor(Math.random()*500);
	  var fTop = Math.floor(Math.random()*500);
	  var mTop = Math.floor(Math.random()*500);
	  var man = Math.floor(Math.random()*floor.length);
	  var fMan = Math.floor(Math.random()*floor.length);
	  var sMan = Math.floor(Math.random()*floor.length);
	  var tMan = Math.floor(Math.random()*floor.length);

      lift1.css({position:'relative', top: tTop});
      lift2.css({position:'relative', top: sTop});
      lift3.css({position:'relative', top: fTop});
      



	  	but.click(function(){ 

      if (tTop <= mTop || tTop > sTop && tTop > fTop) {
				lift1.animate({position:'relative', top: "-100px"});
      }

      else if (sTop <= mTop || sTop > tTop && sTop > fTop) {
				lift2.animate({position:'relative', top: "-100px"});

      }

      else if (fTop <= mTop || fTop > sTop &&  fTop > tTop) {
      	lift3.animate({position:'relative', top: "-100px"});

      }

	});


});

});