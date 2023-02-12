import './ProfileTabs.style.scss';
import { useState } from 'react';

export function ProfileTabs() {
  const [selectedTab, setSelectedTab] = useState('tab1');

  return (
    <div>
      <div>
        <button
          className="btn-tab"
          type="button"
          onClick={() => setSelectedTab('tab1')}
          style={{ backgroundColor: selectedTab === 'tab1' ? 'lightblue' : '' }}
        >
          My Bookmarks
        </button>
        <button
          className="btn-tab"
          type="button"
          onClick={() => setSelectedTab('tab2')}
          style={{ backgroundColor: selectedTab === 'tab2' ? 'lightblue' : '' }}
        >
          My Questions
        </button>
        <button
          className="btn-tab"
          type="button"
          onClick={() => setSelectedTab('tab3')}
          style={{ backgroundColor: selectedTab === 'tab3' ? 'lightblue' : '' }}
        >
          My Answers
        </button>
      </div>
      <div>
        {selectedTab === 'tab1' && <div>Bookmarks</div>}
        {selectedTab === 'tab2' && <div>Questions</div>}
        {selectedTab === 'tab3' && <div>Answers</div>}
      </div>
    </div>
  );
}

export default ProfileTabs;
