import mockProfilePic from '../../../assets/mockProfilePic.jpg';
import useStore, { StoreState } from '../../../store/store';
import User from '../../../typescript/entities/User';
import RoundedImage from '../../RoundedImage';

function ProfileCard() {
  const currentUser: User = useStore((state: StoreState) => state.currentUser);

  return (
    <div>
      <span>{currentUser.name}</span>
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
