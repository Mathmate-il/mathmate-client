import { useNavigate } from 'react-router-dom';
import GoogleAuth from '../../components/GoogleAuth';
import './Home.style.scss';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import useStore, { StoreState } from '../../store/store';

export default function Home() {
  const isLoggedIn = useStore((state: StoreState) => state.isLoggedIn);

  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="header">
        <h1 className="heading-primary">MathMate</h1>
        <GoogleAuth />
      </header>
      <div className="contentBody">
        <article>
          <h1 className="heading-primary" style={{ fontSize: '48px' }}>
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
      <footer className="footer">
        <h2 className="heading-primary">MathMate</h2>
        <ul>
          <img src={linkedin} className="icon" />
          <img src={github} className="icon" />
        </ul>
      </footer>
    </div>
  );
}
