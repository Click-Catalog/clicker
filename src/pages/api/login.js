import db from '../../models/postgres';
const bcrypt = requre('bcryptjs');

export default async function login(req, res) {
  const SALT_ROUNDS = 10;
  const parsedBody = JSON.parse(req.body);
  const { username, password } = parsedBody;
  try {
    const cookies = new Cookies(req, res);
    const SQLquery = `SELECT * FROM user WHERE username='${username}';`;
    const { rows } = await db.query(SQLquery);
    const hashedPassword = userInfo.password;
    const compare = bcrypt.compareSync(password, hashedPassword);
    if (!compare) throw Error('Invalid username or password');

    const userInfo = rows[0];
    const { id, username } = userInfo;
    const sessionID = await bcrypt.hash(Date.now(), SALT_ROUND);
    const ONE_HOUR = 1000 * 60 * 60;
    cookies.set('session', sessionID, { httpOnly: true, maxAge: ONE_HOUR });
    cookies.set('SSID', id, { httpOnly: true });
    cookies.set('username', username, { httpOnly: true });
    return res.status(200).json(username);
  } catch(error) {
      return res.status(401).json({
        success: false,
        error,
      });
  }
} 