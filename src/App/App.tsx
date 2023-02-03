import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleAuth from "../components/GoogleAuth";
import env from "../config/env";
import "./App.style.scss";
function App() {
    return (
        <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
            <div className='App'>
                <GoogleAuth />
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;
