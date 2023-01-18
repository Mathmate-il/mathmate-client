import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
import SearchResult from "./pages/SearchResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchResult" element={<SearchResult />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
