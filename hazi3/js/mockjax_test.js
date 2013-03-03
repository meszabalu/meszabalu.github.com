$().ready(function() {
	module("URL ellenőrzése");
	asyncTest("jó url-t hívtunk, és a mock meghívódik", function() {
		var handler;
		expect(1);
		var artistName = "Snoop Dog";
		handler = $.mockjax({
			url : "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+artistName+"&api_key=457dc3b36badb945a3449e8bba3e3133&format=json",
			dataType: 'json',
			responseText : { 'status' : 'ok' }
		});
		searchArtist(artistName, function(data){
			equal(data.status, 'ok', 'Mivel jó mock hívódott meg, ezért jó az url');
			start();
		});
		return $.mockjaxClear(handler);
	});
	module("JSON egyezésének tesztelése: ");
	asyncTest("json átadása a mocknak", function() {
		var handler;
		expect(1);
		var artistName = "Snoop Dog";
		handler = $.mockjax({
			url : "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+artistName+"&api_key=457dc3b36badb945a3449e8bba3e3133&format=json",
			dataType: 'json',
			responseText : { 
				"artist": [
		            {
		               "name":"Snoop Dogg",
		               "listeners":"1947669",
		               "mbid":"17d17695-f0e1-46fd-815f-bf577cc5f50d",
		               "url":"http:\/\/www.last.fm\/music\/Snoop+Dogg",
		               "streamable":"1",
		               "image":[
		                  {
		                     "#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/73751142.png",
		                     "size":"small"
		                  },
		                  {
		                     "#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/73751142.png",
		                     "size":"medium"
		                  },
		                  {
		                     "#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/73751142.png",
		                     "size":"large"
		                  },
		                  {
		                     "#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/73751142.png",
		                     "size":"extralarge"
		                  },
		                  {
		                     "#text":"http:\/\/userserve-ak.last.fm\/serve\/_\/73751142\/Snoop+Dogg+Young+Snoop+D.png",
		                     "size":"mega"
		                  }
		               ]
		            },
		            {
		               "name":"Snoop Dogg & Wiz Khalifa",
		               "listeners":"261051",
		               "mbid":"",
		               "url":"http:\/\/www.last.fm\/music\/Snoop+Dogg+&+Wiz+Khalifa",
		               "streamable":"0",
		               "image":[
		                  {
		                     "#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/72090616.png",
		                     "size":"small"
		                  },
		                  {
		                     "#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/72090616.png",
		                     "size":"medium"
		                  },
		                  {
		                     "#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/72090616.png",
		                     "size":"large"
		                  },
		                  {
		                     "#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/72090616.png",
		                     "size":"extralarge"
		                  },
		                  {
		                     "#text":"http:\/\/userserve-ak.last.fm\/serve\/_\/72090616\/Snoop+Dogg++Wiz+Khalifa.png",
		                     "size":"mega"
		                  }
		               ]
					}
				]
			}
		});
		searchArtist(artistName, function(data){
			equal(data.artist[0].name, "Snoop Dogg", 'A név egyezik');
			start();
		});
		return $.mockjaxClear(handler);
	});
	module("Egy rendes lekérdezés mock nélkül start-al");
	asyncTest("rendes ajax lekérés", function() {
		var handler;
		expect(1);
		var artistName = "Snoop Dog";
		$.mockjax({
			url : "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+artistName+"&api_key=457dc3b36badb945a3449e8bba3e3133&format=json",
			dataType: 'jsonp',
			responseTime: 750
		});
		$.mockjaxClear(); //ha ez a sor nincs itt, akkor le se fut a lekérdezés, mert nem addunk meg responseText-et, tehát nem kap vissza semmit.
		searchArtist(artistName, function(data){
			equal(data.results['opensearch:totalResults'], 1969, '1969 találat kell, hogy legyen');
			//összehasonlítottunk, mehet
			start();
		});
	});
});