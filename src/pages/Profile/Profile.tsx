import './Profile.style.scss';
import {
  TabItem,
  TabsControl,
} from '../../components/TabsControls/TabsControl';
import Footer from '../../components/Footer';
import ProfileCard from '../../components/Profile/ProfileCard';

export default function Profile() {
  return (
    <div className="profile">
      <div>
        <ProfileCard />
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
        <hr />
      </div>
      <Footer />
    </div>
  );
}
