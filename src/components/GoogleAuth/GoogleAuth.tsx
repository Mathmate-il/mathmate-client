import { GoogleLogin } from "@react-oauth/google";
import "./GoogleAuth.style.scss";

export default function GoogleAuth() {
    return (
        <>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </>
    );
}
