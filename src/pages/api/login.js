import db from '../../models/postgres';
import Cookies from 'cookies';

const bcrypt = require('bcryptjs');

export default async function login(req, res) {
  const SALT_ROUNDS = 10;
  const { username, password } = req.body;
  res.setHeader('Content-Type', 'application/json');
  try {
    const cookies = new Cookies(req, res);
    const SQLquery = `SELECT * FROM users WHERE username='${username}';`;
    const { rows } = await db.query(SQLquery);
    const userInfo = rows[0];
    const { id } = userInfo;
    const hashedPassword = userInfo.password;
    const compare = bcrypt.compareSync(password, hashedPassword);
    if (!compare) {
      throw Error('Invalid username or password');
    }
    const sessionID = await bcrypt.hash(`${Date.now()}`, SALT_ROUNDS);
    const ONE_HOUR = 1000 * 60 * 60;
    cookies.set('session', sessionID, { httpOnly: true, maxAge: ONE_HOUR });
    cookies.set('SSID', id, { httpOnly: true });
    cookies.set('username', username, { httpOnly: true });
    return res.status(200).json(username);
  } catch(error) {
    console.log(error)
      return res.status(401).json({
        success: false,
        error,
      });
  }
} 