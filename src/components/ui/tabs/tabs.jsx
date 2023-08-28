import { useState } from 'react';
import { TabList, TabButton, TabText, TabContent } from './style';

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TabList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (activeTab === index) {
              return (
                <TabButton active key={item.id}>
                  <TabText active as='h2'>
                    {item.title}
                  </TabText>
                </TabButton>
              );
            }
            return (
              <TabButton key={item.id} onClick={() => setActiveTab(index)}>
                <TabText as='h2'>{item.title}</TabText>
              </TabButton>
            );
          })}
      </TabList>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </div>
  );
}
