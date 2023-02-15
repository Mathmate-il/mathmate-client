import { useNavigate } from 'react-router-dom';
import mockProfilePic from '@/assets/mockProfilePic.jpg';
import EditIcon from '@/assets/edit.svg';
import useStore, { StoreState } from '@/store/store';
import User from '@/typescript/entities/User';
import RoundedImage from '@/components/RoundedImage';
import './ProfileCard.scss';
import '@/styles/main.scss';

function ProfileCard() {
  const currentUser: User = useStore((state: StoreState) => state.currentUser);
  const navigate = useNavigate();

  return (
    <div className="profileCard">
      <div className="details">
        <div>
          <span className="heading-5">{currentUser.name}</span>
          <img src={EditIcon} className="icon" alt="github" />
        </div>
        <span className="p1">{currentUser.email}</span>
        <button
          className="btn-outlined"
          type="button"
          onClick={() => {
            navigate('/newQuestion');
          }}
        >
          New Question
        </button>
      </div>

      <RoundedImage
        src={mockProfilePic}
        alt="profile pic"
        width="120px"
        height="120px"
      />
    </div>
  );
}

export default ProfileCard;
