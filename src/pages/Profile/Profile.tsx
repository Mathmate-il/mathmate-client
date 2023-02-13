import './Profile.style.scss';
import {
  TabItem,
  TabsControl,
} from '../../components/TabsControls/TabsControl';
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
      <TabsControl>
        <TabItem label="My Bookmarks">
          <div>Bookmarks</div>
        </TabItem>
        <TabItem label="My Questions">
          <div>Questions</div>
        </TabItem>
        <TabItem label="My Answers">
          <div>Answers</div>
        </TabItem>
      </TabsControl>
    </div>
  );
}
