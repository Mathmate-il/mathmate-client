import './Profile.style.scss';
import { ProfileTabs } from '../../components/ProfileTabs/ProfileTabs';
import mockProfilePic from '../../assets/mockProfilePic.jpg'; // with import
import RoundedImage from '../../components/RoundedImage/RoundedImage';

export default function Profile() {
  return (
    <div>
      <span>full name</span>
      <RoundedImage
        src={mockProfilePic}
        alt="profile pic"
        width="120px"
        height="120px"
      />
      <hr />
      <ProfileTabs />
    </div>
  );
}
