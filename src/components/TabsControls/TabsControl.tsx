import './TabsControl.style.scss';
import React, {
  useState,
  Children,
  ReactNode,
  ReactElement,
  useEffect,
} from 'react';

interface TabItemProps {
  label: string;
  children: React.ReactNode;
}

function TabItem({ children }: TabItemProps) {
  return <div className="tab-content">{children}</div>;
}

interface TabsControlProps {
  children: ReactNode;
}

function TabsControl({ children }: TabsControlProps) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = Children.toArray(children) as ReactElement[];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tabsContainer">
        {tabs.map((tab, index) => (
          <button
            type="button"
            key={index} // todo: think how to fix that
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
            onKeyUp={() => handleTabClick(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab]}</div>
    </div>
  );
}

export { TabItem, TabsControl };
