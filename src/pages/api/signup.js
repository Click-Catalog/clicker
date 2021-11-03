import db from '../../models/postgres';

const bcrypt = require('bcryptjs');

export default async function (req, res) {
  const {username, password} = req.body;
  const SALT_ROUNDS = 10;
  try {
    const hashedPassword = await bcrypt.hash(password,SALT_ROUNDS);
    const SQLquery = `INSERT INTO users (username, password)
                      VALUES ('${username}','${hashedPassword}');`;
    const { rows } = await db.query(SQLquery);
    console.log(rows)
    return res.status(200).json({success: true});
  } catch(error) {
    console.log(error)
    return res.status(400).JSON({
        success: false,
        error: error,
    });
  }
}
