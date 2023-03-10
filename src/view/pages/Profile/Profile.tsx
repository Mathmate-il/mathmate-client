import './Profile.scss';
import LogoutIcon from '@/assets/logout.svg';
import SettingsIcon from '@/assets/settings.svg';
import ProfileCard from '../../components/Profile/ProfileCard';
import {
  TabItem,
  TabsControl,
} from '../../components/TabsControls/TabsControl';
import MyBookmarks from '../../components/Profile/MyBookmarks';
import MyQuestions from '../../components/Profile/MyQuestions';
import MyAnswers from '../../components/Profile/MyAnswers';
import Footer from '../../components/Footer';

export default function Profile() {
  return (
    <div className="profile">
      <div>
        <ProfileCard />
        <div className="mainArea">
          <TabsControl>
            <TabItem label="My Bookmarks">
              <MyBookmarks />
            </TabItem>
            <TabItem label="My Questions">
              <MyQuestions />
            </TabItem>
            <TabItem label="My Answers">
              <MyAnswers />
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
