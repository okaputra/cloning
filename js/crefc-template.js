(function($) {

    if ($('div[id$="_BannerImageTall"]').length > 0) {
        $('#PageBanner').css('height', '250px');
    } else if ($('div[id$="_BannerImageShort"]').length > 0) {
        $('#PageBanner').css('height', '125px');
    } else  {
        $('#PageBanner').css('height', '0');
    };
	    $("div[id^='ste_container_ciBannerText']").detach().appendTo('#PageBanner');
    $('div[id$="_BannerImageTall"]').each(function() {
        var $this = $(this);
        var img = $this.find('img');

        if (img.length > 0) {
            var imageUrl = $(img).attr('src');
            $('#PageBanner').css('background-image', 'url(' + imageUrl + ')');
            $(img).remove();
            return true;
        } else {
            $this.remove();
        }
    });

    $('div[id$="_BannerImageShort"]').each(function() {
        var $this = $(this);
        var img = $this.find('img');

        if (img.length > 0) {
            var imageUrl = $(img).attr('src');
            $('#PageBanner').css('background-image', 'url(' + imageUrl + ')');
            $(img).remove();
            return true;
        } else {
            $this.remove(); 
        }
    });
   
    $('.bigButtonMenu .BigButtonLinkList br').remove();
    
    $(" .nav-aux-button.nav-aux-search > a.NavigationLink").addClass('searchLink fancybox.iframe');




    if ($('#ctl01_TemplateBody_WebPartManager1_gwpciMicrositeLink_ciMicrositeLink_MUF_7').text().length > 0) {
        var micrositeURL = $('#ctl01_TemplateBody_WebPartManager1_gwpciMicrositeLink_ciMicrositeLink_MUF_7').text();
        window.location.href = micrositeURL;
    };
    $('#ctl01_TemplateBody_WebPartManager1_gwpciDonationCreator_ciDonationCreator_GiftAmount2').val('');
		$('#ctl01_TemplateBody_WebPartManager1_gwpciDonationCreator_ciDonationCreator_GiftAmount2').focus(function() {
    $('#ctl01_TemplateBody_WebPartManager1_gwpciDonationCreator_ciDonationCreator_GiftAmountSelection_7').prop('checked', true);
  });

  $('#ctl01_TemplateBody_WebPartManager1_gwpciDonationCreator_ciDonationCreator_GiftAmount2').blur(function() {
		$('#ctl01_TemplateBody_WebPartManager1_gwpciDonationCreator_ciDonationCreator_GiftAmount2').val('');
    $('#ctl01_TemplateBody_WebPartManager1_gwpciDonationCreator_ciDonationCreator_GiftAmountSelection_7').prop('checked', false);
  });

  //Suggestion: You can add this so that when user clicks on the radio btn, it will fucos on the textbox
  $('#ctl01_TemplateBody_WebPartManager1_gwpciDonationCreator_ciDonationCreator_GiftAmountSelection_7').click(function(){
    $('#ctl01_TemplateBody_WebPartManager1_gwpciDonationCreator_ciDonationCreator_GiftAmount2').focus();
  });
		
		
    // console.log(navigator.userAgent);
    /* Adjustments for Safari on Mac */
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        // console.log('Safari on Mac detected, applying class...');
        $('html').addClass('safari-mac'); // provide a class for the safari-mac specific css to filter with
    };
    setInterval(function() {
        $('form[src*="Document_Download"] .fancybox-overlay').css('background', 'rgba(0,0,0,.65)!important');
    }, 500)

    $(document).ready(function() {

			$(".newsPhoto").each(function () {
					var $this = $(this);
					var img = $this.find("img:last").removeAttr("style");
					var imageUrl = '/images/CREFC/News/CREFCAlert.jpg'; //default news graphic
					if(img){
						var imgWidth = parseInt($(img).width(), 10);
						var imgHeight = parseInt($(img).height(), 10);
						var imgRatio = imgWidth / imgHeight;
						imageUrl = $(img).attr("src") || "/images/template2020/profile1.jpg";
					}
					var newImage = $("<img>");
					newImage.attr("src", imageUrl);
					newImage.attr("class","newsGraphic");
					$this.empty();
					$this.append(newImage);

			/* replaced background image with <img> for RSS feed readers 
					if (imageUrl) {
						$this.css({
							"background-image": "url(" + imageUrl + ")",
							"background-size": "cover",
						});
					}
			*/
			});
/* replaced with above newsPhoto.each function
$(".newsPhoto").each(function () {
    var $this = $(this);
    var img = $this.find("img:last").removeAttr("style");
    var imgWidth = parseInt($(img).width(), 10);
    var imgHeight = parseInt($(img).height(), 10);
    var imgRatio = imgWidth / imgHeight;
    var imageUrl = $(img).attr("src") || "/images/template2020/profile1.jpg";
    var newImage = $("<img>");
    newImage.attr("src", imageUrl);
    $this.empty();
    if (imageUrl) {


            $this.css({
                "background-image": "url(" + imageUrl + ")",
                "background-size": "cover",
            });


    }
});
*/
var removeAttr = jQuery.fn.removeAttr;
$.fn.removeAttr = function () {
    if (!arguments.length) {
        this.each(function () {
            for (var i = this.attributes.length - 1; i >= 0; i--) {
                $(this).removeAttr(this.attributes[i].name);
            }
        });

        return this;
    }

    return removeAttr.apply(this, arguments);
};


        // Auto Click item link.
        if ($(".autoLink a").length) {
            var autolink = $(".autoLink a").attr("href");
            window.location.replace(autolink);
        };




        $("#accordion").accordion({
            heightStyle: "content"
        });

        //removes table structure from IQA grid output
        $(".buttonArea .radioButton").unwrap().unwrap().unwrap().first().prev().remove();
        $(".buttonArea .radioButton").first().prev().remove();
        $(".buttonArea .radioButton").unwrap();
		$(".buttonArea td").remove();
		$(".buttonArea thead").remove();
		$(".buttonArea colgroup").remove();
		
$('.radioButton > input').click(function() {
    var citiesVal = $('input[name="cities"]:checked').val();
    var typeVal = $('input[name="types"]:checked').val();
    $('.eventSlide').addClass('hide');
    if (citiesVal) {
        if (typeVal) {
            $('.eventSlide.' + typeVal + '.' + citiesVal).removeClass('hide');
        } else {
            $('.eventSlide.' + citiesVal).removeClass('hide');
        }
    } else if (typeVal) {
        $('.eventSlide.' + typeVal).removeClass('hide');
    }
});

$('#resetLink').click(function() {
    $('.eventSlide').removeClass('hide');
    $('.radioButton > input').prop('checked', false);
});

		

        //removes table structure from IQA grid output
        $(".multiColumnList .slide").unwrap().unwrap().unwrap().first().prev().remove();
        $(".multiColumnList .slide").first().prev().remove();
        $(".multiColumnList .slide").unwrap();
        $('.multiColumnList .RadGrid.RadGrid_MetroTouch').children().remove(':not("div.slide")');

        //removes table structure from IQA grid output
        $(".eventSlide").unwrap().unwrap().unwrap().first().prev().remove();
        $(".eventSlide").first().prev().remove();
        $(".eventSlide").unwrap();

        $('.multiColumnList.nearbyEvents .RadGrid.RadGrid_MetroTouch').slick({
            rows: 1,
            slidesToShow: 4,
            slidesToScroll: 4,

            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 800,
            arrows: true,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 600,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        $('.multiColumnList.featuredEvents .RadGrid.RadGrid_MetroTouch').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            rows: 1,
            autoplaySpeed: 5000,
            speed: 700,
            dots: false,
            arrows: true,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        $('.multiColumnList.featuredEventSingle .RadGrid.RadGrid_MetroTouch').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
						rows:2,
            autoplay: true,
            rows: 1,
            autoplaySpeed: 15000,
            speed: 1200,
            dots: false,
            arrows: true,
            pauseOnHover: true
        });
				$('.multiColumnList.eventCarouselDisplay .RadGrid.RadGrid_MetroTouch').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            rows: 2,
            autoplaySpeed: 7000,
            speed: 1200,
            dots: true,
            arrows: false,
						fade: true,
            pauseOnHover: true
        });
        $('.multiColumnList.featuredEvents-items2 .RadGrid.RadGrid_MetroTouch').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            rows: 1,
            autoplaySpeed: 9000,
            speed: 2500,
            dots: false,
            arrows: true,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
        });

        $('.page-panels .TaggedListPanel').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 800,
            dots: true,
            arrows: true,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
        });
        $('.rotatingNotices .TaggedListPanel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 1200,
            dots: false,
            arrows: false,
            pauseOnHover: true
            
        });
				
        $('.engagePanels .TaggedListPanel').not('.slick-initialized').slick({
            rows: 1,
            slidesToShow: 4,
            slidesToScroll: 4,
            adaptiveHeight: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 900,
            arrows: true,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 600,
                settings: {
                    rows: 1,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
        });
$('.AccordionZone .TaggedListPanel').addClass('AccordionZone');
$('.AccordionZone .TaggedListPanel > span > div:nth-child(-n+3)').remove();
$('.AccordionZone .TaggedListPanel > span > div:nth-child(1)').addClass('AccordionHeader');
$('.AccordionZone .TaggedListPanel > span > div:nth-child(2)').addClass('AccordionContent');
$('.AccordionZone .TaggedListPanel > span > div:nth-child(1)').unwrap();
				
				$('div.iMIS-WebPart > div[id*="AccordionContentSonic"]:first-child').addClass("ContentItemContainer");
        $('div.iMIS-WebPart > div[id*="AccordionContentOpenSonic"]:first-child').addClass("ContentItemContainer");
        $('div.iMIS-WebPart > div[id*="AccordionHeader"]:nth-child(1) > div:nth-child(1)').addClass("AccordionControl");
        $('div.iMIS-WebPart > div[id*="AccordionMultiHeader"]:nth-child(1) > div:nth-child(1)').addClass("AccordionControl");
        $('div[id*="AccordionContent"].ContentItemContainer').addClass("notShown");
        $('div[id*="AccordionContent"].AccordionControl').addClass("notShown");
        $('div[id*="AccordionHeader"].ContentItemContainer').parent(".iMIS-WebPart").addClass("accHeader");
        $('div[id*="AccordionMultiHeader"].ContentItemContainer').parent(".iMIS-WebPart").addClass("accMultiHeader");
        $(".AccordionIQA .panel-heading.Distinguish").addClass("accHeader");
        $(".AccordionIQA .panel-heading.Distinguish + .panel-body-container").addClass("notShown");
        $(".AccordionMultiHeader.open").addClass("headerSelected");
        $(".AccordionContent.open").addClass("shown");
        $('div[id*="AccordionContentOpen"].ContentItemContainer').addClass("shown");
        $('div[id*="AccordionHeaderOpen"].AccordionControl').addClass("headerSelected");
        $('div[id*="AccordionMultiHeaderOpen"].AccordionControl').addClass("headerSelected");
        $('div[id*="AccordionHeader"].ContentItemContainer').click(function () {
            $(this).parents(".WebPartZone").find('div[id*="AccordionContent"].ContentItemContainer').addClass("notShown").removeClass("shown");
            $(this).parents(".WebPartZone").find('div[id*="AccordionContent"].AccordionControl').addClass("notShown").removeClass("shown");
            var isSelectedHeader = $(this).hasClass("headerSelected");
            if (isSelectedHeader) {
                $(this).parents(".iMIS-WebPart").nextAll().find('div[id*="AccordionContent"].ContentItemContainer').addClass("notShown").removeClass("shown");
                $(this).parents(".iMIS-WebPart").nextAll().find('div[id*="AccordionContent"].AccordionControl').addClass("notShown").removeClass("shown");
            } else {
                $(this).parents(".WebPartZone").find('div[id*="AccordionHeader"].ContentItemContainer').removeClass("headerSelected");
                $(this).parents(".WebPartZone").nextAll().find('div[id*="AccordionContent"].ContentItemContainer.shown').removeClass("shown").addClass("notShown");
                $(this).parents(".WebPartZone").nextAll().find('div[id*="AccordionContent"].AccordionControl.shown').removeClass("shown").addClass("notShown");
                $(this).parents(".iMIS-WebPart").nextUntil(".accHeader").find(".notShown").addClass("shown").removeClass("notShown");
                $(this).parents(".iMIS-WebPart").nextUntil(".accHeader").find(".notShown").addClass("shown").removeClass("notShown");
            }
            $(this).toggleClass("headerSelected");
            $(this).parents(".WebPartZone").find(".AccordionHeader").removeClass("headerSelected");
            $(this).parents(".WebPartZone").find(".AccordionMultiHeader").removeClass("headerSelected");
            $(this).parents(".WebPartZone").find(".AccordionContent").removeClass("shown").addClass("notShown");
            $(".AccordionIQA .panel-heading.Distinguish + .panel-body-container").removeClass("shown").addClass("notShown");
            $(".AccordionIQA .panel-heading.Distinguish").removeClass("headerSelected");
            $(".AccordionContentIQA.shown").removeClass("shown").addClass("notShown");
            $(".AccordionHeaderIQA.headerSelected").toggleClass("headerSelected");
        });

        $('div[id*="Panel_AccordionMultiHeader"]').click(function () {
            var isSelected = $(this).hasClass("headerSelected");
            $(this).toggleClass("headerSelected");
            if (isSelected) {
                $(this).parents(".iMIS-WebPart").nextUntil(".accMultiHeader").find('div[id*="AccordionContent"].ContentItemContainer').addClass("notShown").removeClass("shown");
                $(this).parents(".WebPartZone").find(".AccordionHeader").removeClass("headerSelected");
                $(this).parents(".WebPartZone").find(".AccordionMultiHeader").removeClass("headerSelected");
                $(this).parents(".WebPartZone").find(".AccordionContent").removeClass("shown").addClass("notShown");
            } else {
                $(this).parents(".iMIS-WebPart").nextUntil(".accMultiHeader").find('div[id*="AccordionContent"].ContentItemContainer.notShown').addClass("shown").removeClass("notShown");
            }
        });

        $(".AccordionIQA .panel-heading.Distinguish").click(function () {
            $(this).parents(".WebPartZone").find(".AccordionIQA .panel-body-container").addClass("notShown").removeClass("shown");
            var isSelectedHeader = $(this).hasClass("headerSelected");
            if (isSelectedHeader) {
                $(this).parents(".iMIS-WebPart").nextAll().find(".AccordionIQA .panel-body-container").addClass("notShown").removeClass("shown");
            } else {
                $(this).parents(".WebPartZone").find(".AccordionIQA .panel-heading.Distinguish").removeClass("headerSelected");
                $(this).parents(".WebPartZone").nextAll().find(".AccordionIQA .panel-body-container.shown").removeClass("shown").addClass("notShown");
                $(this).parents(".AccordionIQA").find(".panel-body-container.notShown").addClass("shown").removeClass("notShown");
            }
            $(this).toggleClass("headerSelected");
            $(this).parents(".WebPartZone").find(".AccordionHeader").removeClass("headerSelected");
            $(this).parents(".WebPartZone").find(".AccordionMultiHeader").removeClass("headerSelected");
            $(this).parents(".WebPartZone").find(".AccordionContent").removeClass("shown").addClass("notShown");
        });

        $(".AccordionContent").parent().find(".AccordionContent").addClass("notShown");

        $(".AccordionHeader").click(function () {
            $(this).parent(".AccordionZone").find(".AccordionContent").addClass("notShown").removeClass("shown");
            var thisHeader = $(this).hasClass("headerSelected");
            if (thisHeader) {
                $(this).toggleClass("headerSelected");
                $(this).parent(".AccordionZone").find(".AccordionMultiHeader").removeClass("headerSelected");
                $(this).parent(".AccordionZone").next().find(".AccordionContent").addClass("notShown").removeClass("shown");
            } else {
                $(this).parent(".AccordionZone").find(".AccordionHeader").removeClass("headerSelected");
                $(this).parent(".AccordionZone").find(".AccordionMultiHeader").removeClass("headerSelected");
                $(this).toggleClass("headerSelected");
                $(this).parent(".AccordionZone").next().find(".AccordionContent").removeClass("shown").addClass("notShown");
                $(this).next().addClass("shown").removeClass("notShown");
            }
            $(".AccordionIQA .panel-heading.Distinguish + .panel-body-container").removeClass("shown").addClass("notShown");
            $(this).parents(".WebPartZone").find(".AccordionIQA .panel-heading.Distinguish").removeClass("headerSelected");
        });

        $(".AccordionMultiHeader").click(function () {
            var thisHeader = $(this).hasClass("headerSelected");
            if (thisHeader) {
                $(this).toggleClass("headerSelected");
                $(this).next().addClass("notShown").removeClass("shown");
            } else {
                $(this).toggleClass("headerSelected");
                $(this).next().addClass("shown").removeClass("notShown");
            }
        });

        $(".AccordionContentIQA").parents().find(".AccordionContentIQA").addClass("notShown");
        $(".AccordionHeaderIQA").click(function () {
            $(this).parents(".AccordionZoneIQA").find(".AccordionContentIQA");
            $(this).parents(".AccordionZoneIQA").find(".AccordionContentIQA").removeClass("shown").addClass("notShown");
            var thisHeader = $(this).hasClass("headerSelected");
            if (thisHeader) {
                $(this).toggleClass("headerSelected");
                $(this).parents(".AccordionZoneIQA").next().find(".AccordionContentIQA");
            } else {
                $(this).parents(".AccordionZoneIQA").find(".AccordionHeaderIQA").removeClass("headerSelected");
                $(this).toggleClass("headerSelected");
                $(this).parents(".AccordionZoneIQA").next().find(".AccordionContentIQA");
                $(this).parents(".AccordionZoneIQA").next().find(".AccordionContentIQA").removeClass("shown").addClass("notShown");

                $(this).next().addClass("shown").removeClass("notShown");
            }
        });
				var maxHeight = 0;

    $(window).resize(function () {
        var maxHeight = 0;
    });

    window.setInterval(function () {
        if (maxHeight == 0) {
            $(".newsCards .newsCard").each(function () {
                if ($(this).height() > maxHeight) {
                    maxHeight = $(this).height();
                }
            });

            $(".newsCards .newsCard").height(maxHeight);
        }
    }, 100);
	
		$("#MainHtml body").addClass('makeVisible');
    });






})(jQuery);

