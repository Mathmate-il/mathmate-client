import { useNavigate } from 'react-router-dom';
import GoogleAuth from '../../components/GoogleAuth';
import './Home.style.scss';
import useStore, { StoreState } from '../../store/store';

export default function Home() {
  const isLoggedIn = useStore((state: StoreState) => state.isLoggedIn);

  const navigate = useNavigate();

  return (
    <>
      <GoogleAuth />
      <div>
        <h2>{isLoggedIn.toString()}</h2>
        <div>
          <button
            type="button"
            onClick={() => {
              navigate('/newQuestion');
            }}
          >
            Ask your mate a math question
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            navigate('/searchResult');
          }}
        >
          Search
        </button>
      </div>
    </>
  );
}
