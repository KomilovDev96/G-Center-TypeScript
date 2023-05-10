import { Tabs } from "antd";
import React from "react";

const { TabPane } = Tabs;

const CustomTabs: React.FC<{}> = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" tabPosition="left" popupClassName="test__tab">
        <TabPane tab="Card Tab 1" key="1">
          Content of card tab 1
        </TabPane>
        <TabPane tab="Card Tab 2" key="2">
          Content of card tab 2
        </TabPane>
        <TabPane tab="Card Tab 3" key="3">
          Content of card tab 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CustomTabs;
