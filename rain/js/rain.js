$(document).ready(function () {

		var drop = $('.drop').detach();

		function create() {
			var clone = drop
				.clone()
				.appendTo('#viewport')
				.css({
					left:  (Math.random() * $(document).width() - 20),
					width: Math.random()*4 + 1,
					opacity: Math.random()
				})
				.animate(
				{'top':$(document).height() - 20},
				Math.random(1000) + 500, function () {
					$(this).fadeOut(200, function () {
						$(this).remove();
						$('.state').text($('#viewport .drop').length + ' Drops');
					});
				});
		}

		setInterval(create, Math.floor(Math.random()*50+1));

});
