jQuery(document).ready(function() {
	jQuery(".body-container a[href]").each(function () {
    thisLink = jQuery(this).attr("href");
    isBioLink = thisLink.indexOf("io:");
    console.log(thisLink + " " + isBioLink);

    if (isBioLink==1) {
        thisBioID = thisLink.slice(thisLink.length - 5);
        //console.log(thisBioID);
        newHREF = "/CREFCbio/Speaker_Bio.aspx?id=" + thisBioID;
        jQuery(this).attr("href", newHREF).addClass("various fancybox.iframe");
    }
});
	
	jQuery(".searchLink").fancybox({
		autoSize: true,
height:20000,
width:20000,
margin:0,
padding:0,		
		closeClick	: false,
		openEffect	: 'fade',
		closeEffect	: 'fade',
		fitToView: true,
		closeBtn: true,
	});
	jQuery(".various").fancybox({
		fitToView	: false,
		width		: 600,
		height		: 480,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'fade',
		closeEffect	: 'fade',
		margin:0,
padding:0
	});
});