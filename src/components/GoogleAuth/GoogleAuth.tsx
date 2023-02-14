import { GoogleLogin } from '@react-oauth/google';
import './GoogleAuth.scss';

export default function GoogleAuth() {
  return (
    <GoogleLogin
      width="50"
      type="standard"
      theme="filled_blue"
      text="signin"
      logo_alignment="left"
      shape="rectangular"
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}
