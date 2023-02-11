import { GoogleOAuthProvider } from "@react-oauth/google";
import env from "../config/env";
import "./App.style.scss";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NewQuestion from "../pages/NewQuestion";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import SearchResult from "../pages/SearchResult";

function App() {
  return (
    <div className="container">
      <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/newQuestion" element={<NewQuestion />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
