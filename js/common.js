$(document).ready(function() {

	$(".auth_buttons").click(function(){
		$(".top_links_unvisible").slideToggle();
	});
	//Главное меню
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-menu").slideToggle();
		return false;
	});
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".owl-carousel");
	owl.owlCarousel({
	  autoPlay: 4000,
	  lazyLoad : true,
      items : 3,
      autoHeight : true,
      itemsDesktop :[1900,5],
      itemsDesktop :[1199,3]
      
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaX > 0) {
			
			owl.trigger("owl.prev");
		} else {
			
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});
	
	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	var name = $('#nam').val();
    var tele = $('#tel').val();
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: 'GET',
			url: "callback.php", //Change
			data: {fname:name, ftele:tele},
		    success: function (data) { 
            alert(data); 
            $.fancybox.close();
              }, 
            error: function (xhr, str) { 
            alert('Просим прощения, на сервере проблемы. Для того чтобы связаться с нами позвоните по указаным телефонам: \n ' + xhr.responseCode); 
             } 
  }); 
   });
			
	

	
	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		'padding' : 3,
	});
	$("a[href='#callback']").fancybox({
		'padding' : 0
	});
	$(".gallery_description a").fancybox({
		'padding' : 0,
	});
	
	$('.landingMenu').liLanding({
  		topMargin:60
  		});
	
	
	
	

		

	

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	
	

	

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top1").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	

	
	
		





});