let jwtToken: string;

async function getMe() {
  const res = await fetch('http://localhost:3001/users/me', {
    headers: { Authorization: `Bearer ${jwtToken}` },
  });
  console.log(res);
}

function GoogleAuth() {
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
        <GoogleLogin
          onSuccess={async (credentialResponse: any) => {
            console.log(credentialResponse);
            const res = await fetch('http://localhost:3001/auth/login', {
              method: 'POST',
              body: 'data',
              headers: {
                Authorization: 'credentialResponse.credential',
              },
            });
            console.log('Data: ', res);
            jwtToken = res.data.token;
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
      <button type="button" onClick={getMe}>
        Get me !
      </button>
    </>
  );
}

export default GoogleAuth;
