import db from '../../models/postgres';

export default async function test(req, res) {
	// res.status(200).json({ name: 'John Doe' })
	const { genre, year, rating } = req.body;
	console.log('api called');
	// console.log(req.body);
	const queryString = `&year=${year}&vote_average.gte=${rating}&with_genres=${genre}`;
	// const queryString = `&year=${year}&vote_average.gte=${rating}&with_genres=28`
	// &primary_release_date.gte=1990&vote_average.gte=6&with_genres=28
	// console.log(queryString);
	fetch(
		`https://api.themoviedb.org/3/discover/movie?api_key=e7acf973cf6ba406ffa3d0dd6a5a3802&language=en-US/${queryString}`
	)
		.then((data) => data.json())
		.then((data) => {
			// // res.status(200).send(data);
			const movieList = data.results;
			const movieArr = [];
			movieList.map((movie) => {
				movieArr.push({
					id: movie.id,
					details: {
						title: movie.title,
						year: movie.release_date,
						overview: movie.overview,
						rating: movie.vote_average,
						image: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
					},
					mustWatch: false,
					interested: false,
					watched: false,
				});
			});
			return res.status(200).send(movieArr);
		});
	// const response = await db.query('SELECT * from movie');
	// console.log(response);
}
