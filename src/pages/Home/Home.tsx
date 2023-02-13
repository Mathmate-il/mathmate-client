import { useNavigate } from 'react-router-dom';
import GoogleAuth from '@components/GoogleAuth';
import './Home.scss';
import Footer from '@/components/Footer';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="header">
        <h1 className="heading-1">MathMate</h1>
        <GoogleAuth />
      </header>
      <div className="contentBody">
        <article>
          <h1 className="heading-1" style={{ fontSize: '48px' }}>
            OUR MESSAGE
          </h1>
          <p className="par">
            A Description about our mission
            <br />
            in two lines something that sums
            <br />
            up the experience.
          </p>
        </article>
        <div className="links">
          <button
            className="btn btn--white "
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
