$(document).ready(function() {
	$(".section-link").click(function() {
		$(".section-page").hide();
		var id = $(this).attr("id");
		var page_id = "#" + id + "-page";
		$(page_id).fadeIn();

		$('.section-link').removeClass('active');
		$('#'+id).addClass('active');
	})
})