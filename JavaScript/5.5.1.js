movie={title: 'The Godfather',
       'releaseInfo': {'year': 1972, rating: 'PG'}
}

for (i in movie){
	console.log(i + ":");
	console.log(movie[i]);
	if ( i == 'releaseInfo'){
		for(j in movie[i]){
			console.log(j + ":");
			console.log(movie[i][j]);
		}
	}
}

