import Cookies from 'cookies';

const signOut = async (req, res) => {
  const cookies = new Cookies(req, res);
  cookies.set('username', null);
  cookies.set('SSID', null);
  cookies.set('session', null);
  console.log(cookies);
  return res.status(200).json({ success: true });
};
export default signOut;