import { useNavigate } from 'react-router-dom';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import GoogleAuth from '../../components/GoogleAuth';
import './Home.style.scss';
import useStore, { StoreState } from '../../store/store';

export default function Home() {
  const isLoggedIn = useStore((state: StoreState) => state.isLoggedIn);

  const navigate = useNavigate();

  return (
    <div
      style={{
        justifyContent: 'space-between',
        flexDirection: 'column',
        display: 'flex',
        minHeight: '100vh',
        maxHeight: '100vh',
      }}
    >
      <header className="header">
        <h1 className="heading-primary">MathMate</h1>
        <GoogleAuth />
      </header>
      <div
        style={{
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <article>
          <h1 className="heading-primary" style={{ fontSize: '48px' }}>
            OUR MESSAGE
          </h1>
          <p
            style={{
              color: 'white',
              fontSize: '20px',
              textAlign: 'justify',
            }}
          >
            A Description about our mission
            <br />
            in two lines something that sums
            <br />
            up the experience.
          </p>
        </article>
        <div
          style={{
            height: '30%',
            display: ' flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
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
          <IoLogoLinkedin size={50} />
          <IoLogoGithub size={50} />
        </ul>
      </footer>
    </div>
  );
}
