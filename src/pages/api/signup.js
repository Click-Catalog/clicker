import db from '../../models/postgres';

const bcrypt = require('bcryptjs');

export default async function (req, res) {
  const parsedBody = JSON.parse(req.body);
  const {username, password} = parsedBody;
  const SALT_ROUNDS = 10;
  try {
    const hashedPassword = await bcrypt.hash(password,SALT_ROUNDS);
    const SQLquery = `INSERT INTO users (username, password)
                        VALUES ('${username}','${hashedPassword}');`;
    return res.status(200).json({success: true});
  } catch(error) {
    return res.status(400).JSON({
        success: false,
        error: error,
    });
  }
}
