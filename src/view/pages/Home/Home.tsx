import { useNavigate } from 'react-router-dom';
import useStore from '../../../controller/store';
import Footer from '../../components/Footer';
import GoogleAuth from '../../components/GoogleAuth';
import './Home.scss';

export default function Home() {
  const navigate = useNavigate();

  const isLoggedIn = useStore((state) => state.isLoggedIn);

  return (
    <div className="home">
      <header className="header">
        <span>MathMate</span>
        {!isLoggedIn && <GoogleAuth />}
        {isLoggedIn && (
          <button type="button" onClick={() => navigate('/profile')}>
            profile
          </button>
        )}
      </header>
      <div className="contentBody">
        <article>
          <h1 className="heading-3">OUR MESSAGE</h1>
          <p className="p1">
            A Description about our mission
            <br />
            in two lines something that sums
            <br />
            up the experience.
          </p>
        </article>
        <div className="links">
          <button
            className="btn btn--white"
            type="button"
            onClick={() => {
              navigate('/newQuestion');
            }}
          >
            Ask a question...
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => {
              navigate('/searchResult');
            }}
          >
            Search
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
