( function ( $ ) {
	function searchArtist(name, callback){
		var searchURL = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+name+"&api_key=457dc3b36badb945a3449e8bba3e3133&format=json";
		$.ajax({
			dataType:"json",
			url:searchURL,
			success:callback
		});
	};
	$.fn.lastfmSearch = function() {
		this.append("<img src='img/lastfm.jpg' width='100px' height='75px' />");
 		this.append("<label>Előadó neve: </label><input type='text' class='lastfm_in_artist' /><button class='lastfm_btn_search'>Keresés!</button>");
 		this.append("<div class='lastfm_cnr_result'></div>");
 		this.children('.lastfm_btn_search').click(function() {
 			var artist = $(this).siblings('.lastfm_in_artist').val();
 			var resultCnr = $(this).siblings('.lastfm_cnr_result');
 			resultCnr.empty();
 			searchArtist( artist, function(data) {
 				$.each(data.results.artistmatches.artist, function(index,element) {
					var html = "<div class='artist'>";
					html += "<h3>"+element.name+"</h3>";
					html += "<p><a href='"+element.url+"'>Link</a></p>";
					html += "<p>"+element.listeners+" people listen this.</p>";
					html += "</div>";
					resultCnr.append(html);
				});
 			});
 		});
 		return this;
  	};
}( jQuery ));