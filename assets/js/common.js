
$(".plus").on("click", function() {
	$("#todoText").fadeToggle(500);
});

$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

$("ul").on("click", ".delete-btn", function(event) {
	$(this).parent().slideUp(700, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("#todoText").keypress(function(event) {
	if (event.which === 13) {
		var todoText = "<span class=\"delete-btn\"><i class=\"fas fa-trash-alt\"></i></span>" + $(this).val();
		$("ul").append("<li>" + todoText + "</li>");
		$(this).val("");
	}
});