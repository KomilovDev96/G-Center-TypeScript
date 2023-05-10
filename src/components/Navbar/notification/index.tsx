import { Dropdown, Menu } from "antd";
import { Bell } from "assets/images";
import StyleNotification from "./Style";

const menuItems = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
];

function Notification() {
  return (
    <StyleNotification className="notification">
      <Dropdown
        overlay={<Menu items={menuItems} />}
        trigger={["click"]}
        placement="bottom"
        arrow
      >
        <button className="notification__btn">
          <Bell className="notification__btn-icon" />
        </button>
      </Dropdown>
    </StyleNotification>
  );
}

export default Notification;
