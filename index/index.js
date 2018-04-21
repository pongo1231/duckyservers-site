$(function() {
	initItems();
});

function initItems() {
	$("#navigation > div").click(function() {
		$("#container").attr("data", $(this).data("goto"));
	});
}