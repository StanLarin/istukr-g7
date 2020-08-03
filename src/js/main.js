$(document).ready(function() {
	$('.collapse').collapse();
	$('#myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
});