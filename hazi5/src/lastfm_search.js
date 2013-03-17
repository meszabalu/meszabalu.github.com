function searchArtist(name, callback){
	var searchURL = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+name+"&api_key=457dc3b36badb945a3449e8bba3e3133&format=json";
	$.ajax({
		dataType:"json",
		url:searchURL,
		success:callback
	});
}

function expandArtist(name, callback){
	//console.log("expandArtist function called with: " + name);
	var searchURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+name+"&api_key=457dc3b36badb945a3449e8bba3e3133&format=json";
	$.ajax({
		dataType:"json",
		url:searchURL,
		success:callback
	});
}