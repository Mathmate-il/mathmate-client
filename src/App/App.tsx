import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleAuth from "../components/GoogleAuth";
import env from "../config/env";
import "./App.style.scss";

function App() {
  return (
    <div className="container">
      <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
        <div>
          <GoogleAuth />
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
