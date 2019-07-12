class coreFunctions
{
	let factionsJson = (function () {
	    var json = null;
	    $.ajax({
	        'async': false,
	        'global': false,
	        'url': '../data/heroes-by-faction.json',
	        'dataType': "json",
	        'success': function (data) {
	            json = data;
	        }
	    });
	    return json;
	})(); 

	let returnHeroByFaction = function(data, stars, faction = '') {
		var heroes = data[stars][0][faction],
			total = heroes.map(v=>v.weight).reduce((a,b)=>a+b),
			cumulativeArray = [],
			randomNumber = Math.random()*total,
			hero;        
		//transform the above map to a cumulative one
		heroes.reduce((a,b,i) => {
			return cumulativeArray[i] = {
				weight: a.weight+b.weight,
				hero: b.hero
			}},{ weight:0, hero:""
		});
		
		hero = cumulativeArray.filter(h=>h.weight>=randomNumber)[0].hero;
		weight = cumulativeArray.filter(h=>h.weight>=randomNumber)[0].weight;

		return heroData[hero][weight];
	}
}