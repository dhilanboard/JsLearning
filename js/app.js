$('#get-btn').on('click', function(){
	ajaxCall();
	$('.emp-details').fadeIn();
	$('#get-btn').fadeOut();
});

function ajaxCall (){
	$.ajax({
		type: 'GET',
		url: 'JSON/data.json',
		dataType: 'json',
		success: function (data) {
			$('.emp-data').append(
				'<div class="row">'+ 
					'<div class="col-md-5">'+ 
						'<div class="image-placeholder pull-right"  style="width: 130px; height: auto">'+ 
							'<img src="'+ data.prof_pic +'" class="img-responsive img-thumbnail" alt="">'+ 
						'</div>	'+ 
					'</div>'+ 
					'<div class="col-md-7 text-left">'+ 
						'<h3>'+ data.name + '</h3>'+ 
						'<h4>' + data.org + '</h4>'+ 
						'<h5>' + data.profile + '</h5>'+ 
					'</div>'+ 
				'</div>'
			);
		}
	});
}
