import { GoogleOAuthProvider } from '@react-oauth/google';
import { Route, Routes } from 'react-router-dom';
import env from '../../../config/env';
import './App.scss';
import NewQuestion from '../../pages/NewQuestion';
import Profile from '../../pages/Profile';
import NotFound from '../../pages/NotFound';
import Question from '../../pages/Question';
import { Home } from '../../pages/Home';
import { SearchResult } from '../../pages/SearchResult';
import useStore from '../../../controller/store';

// show the state in Redux Devtools Extension
const connection = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
  name: 'XXX',
});
connection?.init(useStore.getState());
useStore.subscribe((newState) => {
  connection?.send('state', newState);
});

function App() {
  return (
    <div className="container">
      <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/newQuestion" element={<NewQuestion />} />
          <Route path="/question" element={<Question />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
