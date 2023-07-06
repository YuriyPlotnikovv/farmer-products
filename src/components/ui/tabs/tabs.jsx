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
            if (index === activeTab) {
              return (
                <TabButton active key={item.title}>
                  <TabText active as='h2'>
                    {item.title}
                  </TabText>
                </TabButton>
              );
            }
            return (
              <TabButton key={item.title} onClick={() => setActiveTab(index)}>
                <TabText as='h2'>{item.title}</TabText>
              </TabButton>
            );
          })}
      </TabList>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </div>
  );
}
