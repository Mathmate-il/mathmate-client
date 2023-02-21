import { GoogleLogin } from '@react-oauth/google';
import { useLogin } from '../../../controller/entities/auth/auth.action';
import './GoogleAuth.scss';

export default function GoogleAuth() {
  const loginMutation = useLogin();

  const handleSuccess = (credentialResponse: { credential: string }) => {
    loginMutation.mutate(credentialResponse.credential);

    console.log(credentialResponse);
  };

  return (
    <GoogleLogin
      width="50"
      type="standard"
      theme="filled_blue"
      text="signin"
      logo_alignment="left"
      shape="rectangular"
      onSuccess={handleSuccess}
      onError={() => {
        console.log('Login Failed');
      }}
      useOneTap
      auto_select
    />
  );
}
