$(document).ready(function() {

	// Header Mobile Menu Toggle
	function header_mobile_menu_toggle() {
		$(".menu_toggle .fa-close").hide();
		$("#mobile_header .menu_toggle").on("click", function() {
			$("#mobile_header .menu").fadeToggle(200);

			$(".menu_toggle .fa-bars").toggle();
			$(".menu_toggle .fa-close").toggle();
		});
	}

	// Animate Menu Anchors Click
	function animate_menu_anchors() {
		$("#mobile_header .menu ul li a").on("click", function(){
	    	$("#mobile_header .menu").fadeOut(200);
	    	$(".menu_toggle .fa-bars").show();
			$(".menu_toggle .fa-close").hide();
		});

		$(".menu ul li a.sclhijck").on("click", function(e){
	    	e.preventDefault();

	    $('html, body').animate({
	        	scrollTop: $( $.attr(this, 'href') ).offset().top
	    	}, 650);
		});
	}

	// Animate Download Anchors Btn
	function animate_download_anchor() {
		$("#hero .text a").on("click", function(e){
	    	e.preventDefault();

	    $('html, body').animate({
	        	scrollTop: $( $.attr(this, 'href') ).offset().top
	    	}, 500);
		});
	}

	// Show Video Box
	function video_box() {
		$("#video .open_video").magnificPopup({
			items: {
				src: 'https://wwwy.youtube.com/watch?v=NxSBNo2WepY'
			},

			type: 'iframe',

			iframe: {
				markup: '<div class="mfp-iframe-scaler">'+
						'<div class="mfp-close"></div>'+
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
						'</div>', 
				patterns: {
					vimeo: {
						index: 'youtube.com/',
						id: 'v=',
						src: 'https://www.youtube.com/embed/%id%?autoplay=1'
					},
				},

				srcAction: 'iframe_src', 
			}
		});
	}

	// Pricing Plan Active
	function pricing_plan_active() {
		$(".package").on("mouseenter", function(){
			$(this).addClass("active");
		});
		$(".package").on("mouseleave", function(){
			$(this).removeClass("active");
		});
	}

	// Animate Counter Fun Facts
	function animate_fun_facts() {
		$("#fun_facts").waypoint(function() {
			$("#fun_facts .number").each(function () {
			    $(this).prop("Counter",0).animate({
			        Counter: $(this).text()
			    }, {
			        duration: 3000,
			        easing: "swing",
			        step: function (now) {
			            $(this).text(Math.ceil(now));
			        }
			    });
			});
			this.destroy();
		}, {
	  		offset: '100%'
		});
	}

	// Go To Top Click
	function go_to_top_click() {
		$("a[href='#top']").on("click", function(){
			$("html, body").animate({ scrollTop: 0 }, "500");
			return false;
		});
	}

	// Spy Scroll
	$("body").scrollspy({target: "#main_header .menu", offset:100});
	
	header_mobile_menu_toggle();
	animate_menu_anchors();
	animate_download_anchor();
	video_box();
	pricing_plan_active();
	animate_fun_facts();
    go_to_top_click();
});

$(window).load(function() {

	// Loader fadeOut
	$(".loader").fadeOut("fast");

	// Devices Image Vertical Align Middle
	function devices_image_vam() {
		var devices_image = $("#devices .devices_image");
		var image_margin = devices_image.height() / 2;
		devices_image.css({"margin-top": - image_margin + "px"});
	}

	// Animate Hero Content
	function animate_hero_content() {
		$("#hero").find("h1.animated").addClass("fadeInDown").css("opacity","1");
		$("#hero").find("a.animated").addClass("fadeInUp").css("opacity","1");
		$("#hero").find("img.animated").addClass("zoomIn").css("opacity","1");
	}

    devices_image_vam();
    animate_hero_content();
});

$(window).resize(function() {

	// Devices Image Vertical Align Middle
	function devices_image_vam() {
		var devices_image = $("#devices .devices_image");
		var image_margin = devices_image.height() / 2;
		devices_image.css({"margin-top": - image_margin + "px"});
	}

    devices_image_vam();
});

$(window).scroll(function() {

	// Header Change Style On Scroll
	function header_after_scroll() {
		var scroll = $(window).scrollTop();

	    if (scroll >= 5) {
	        $("#main_header").addClass("header_after_scroll");
	    } else {
	    	$("#main_header").removeClass("header_after_scroll");
	    }
	}

	// Animate Title
	function animate_title() {
		$("#features").waypoint(function() {
			$("#features").find(".animated").addClass("fadeInDown").css("opacity","1");
			this.destroy();
		}, {
	  		offset: '70%'
		});

		$("#devices").waypoint(function() {
			$("#devices").find(".animated").addClass("fadeInDown").css("opacity","1");
			this.destroy();
		}, {
	  		offset: '70%'
		});

		$("#screenshots").waypoint(function() {
			$("#screenshots").find(".animated").addClass("fadeInDown").css("opacity","1");
			this.destroy();
		}, {
	  		offset: '70%'
		});

		$("#testimonials").waypoint(function() {
			$("#testimonials").find(".animated").addClass("fadeInDown").css("opacity","1");
			this.destroy();
		}, {
	  		offset: '70%'
		});

		$("#questions").waypoint(function() {
			$("#questions").find(".animated").addClass("fadeInDown").css("opacity","1");
			this.destroy();
		}, {
	  		offset: '70%'
		});

		$("#pricing").waypoint(function() {
			$("#pricing").find(".animated").addClass("fadeInDown").css("opacity","1");
			this.destroy();
		}, {
	  		offset: '70%'
		});

		$("#contact").waypoint(function() {
			$("#contact").find(".animated").addClass("fadeInDown").css("opacity","1");
			this.destroy();
		}, {
	  		offset: '70%'
		});
	}

	// Go To Top
	function go_to_top_show() {
		var scroll = $(window).scrollTop();

	    if (scroll >= 1000) {
	        $("#go_to_top").addClass("show");
	    } else {
	    	$("#go_to_top").removeClass("show");
	    }
	}

    header_after_scroll();  
	animate_title();
    go_to_top_show();
});