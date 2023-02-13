import './Profile.style.scss';
import {
  TabItem,
  TabsControl,
} from '../../components/TabsControls/TabsControl';
import Footer from '../../components/Footer';
import ProfileCard from '../../components/Profile/ProfileCard';
import SettingsIcon from '../../assets/settings.svg';
import LogoutIcon from '../../assets/logout.svg';

export default function Profile() {
  return (
    <div className="profile">
      <div>
        <ProfileCard />
        <div className="mainArea">
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
        <hr />
        <div className="actionBtn">
          <img src={SettingsIcon} alt="settings" />
          <span className="btnText">Settings</span>
        </div>
        <div className="actionBtn">
          <img src={LogoutIcon} alt="logout" />
          <span className="btnText">Logout</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
