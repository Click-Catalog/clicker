import db from '../../models/postgres';

export default async function test(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  console.log('api called');
  console.log(req.body);
  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=e7acf973cf6ba406ffa3d0dd6a5a3802&language=en-US')
  // const response = await db.query('SELECT * from movie');
  // console.log(response);
}
