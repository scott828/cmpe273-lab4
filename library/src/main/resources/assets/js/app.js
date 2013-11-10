$(":button").click(function() {
	var isbn = this.id;
	$.ajax({
		url : 'http://localhost:8001/library/v1/books/' + isbn + '?status=lost',
		contentType : 'application/json',
		type : 'PUT',
		data : "isbn=" + isbn,
		success : function(msg) {
			
			$("#"+isbn).attr("disabled","disabled");
			$("#status"+isbn).text("lost");
			
		}
	});
});
