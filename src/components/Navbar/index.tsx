import { DownOutlined } from "@ant-design/icons";
import { StyledDropdownItem, StyledNav } from "./Style";
import { Dropdown, Menu, Avatar, Image } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Wrapper from "../Wrapper";
import navRoutes, { dropdownRoute } from "routes/NavRoutes";
import { Bars, Close, Logo, SignOutIcon } from "assets/images";
import Notification from "./notification";
import Container from "components/Container";
import { useEffect, useState } from "react";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import t from "translate";
import { useAppDispatch } from "hooks/redux";
import { signout } from "store/reducer/AuthSlice";

function DropDownMenu() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const signOutHandler = () => {
    dispatch(signout());
    navigate("/");
  };

  const menuItems: ItemType[] = dropdownRoute.map(
    ({ path, title, key, icon }) => ({
      label: (
        <StyledDropdownItem>
          <Link to={path}>
            <Wrapper align="center">
              {icon}
              <p className="text">{t(title)}</p>
            </Wrapper>
          </Link>
        </StyledDropdownItem>
      ),
      key,
    })
  );
  const menuSignOut: ItemType = {
    label: (
      <StyledDropdownItem>
        <button className="btn" onClick={signOutHandler}>
          <Wrapper align="center">
            <SignOutIcon />
            <p className="text">{t("Sign Out")}</p>
          </Wrapper>
        </button>
      </StyledDropdownItem>
    ),
    key: "signout",
  };
  menuItems.push(menuSignOut);
  return <Menu items={menuItems} />;
}
function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const { pathname } = useLocation();

  const visibleHandler = () => setIsMenuVisible((isVisible) => !isVisible);
  useEffect(() => {
    visibleHandler();
  }, [pathname]);

  return (
    <StyledNav className="nav">
      <Container>
        <Wrapper align="center" justify="space-between">
          <button className="nav__bars" onClick={visibleHandler}>
            <Bars />
          </button>
          <Link className="logo" to="/">
            <Logo />
          </Link>
          <ul
            className={`nav__list ${isMenuVisible ? "nav__list--visible" : ""}`}
          >
            <button className="nav__bars-close" onClick={visibleHandler}>
              <Close />
            </button>
            <Wrapper className="nav__list-wrapper">
              {navRoutes.map(({ key, path, title }) => (
                <li
                  className={`nav__list-item ${
                    pathname === path ? "nav__list-item--active" : ""
                  }`}
                  key={key}
                >
                  <Link to={path}>{title}</Link>
                </li>
              ))}
            </Wrapper>
          </ul>
          <Wrapper align="flex-end">
            <Notification />
            <Notification />
            <Dropdown overlay={<DropDownMenu />} trigger={["click"]} arrow>
              <button className="nav__avatar">
                <Wrapper align="center">
                  <Avatar
                    src={
                      <Image
                        src="https://joeschmoe.io/api/v1/random"
                        style={{ width: 32 }}
                        preview={false}
                      />
                    }
                  />
                  <DownOutlined className="nav__avatar-icon" />
                </Wrapper>
              </button>
            </Dropdown>
          </Wrapper>
        </Wrapper>
      </Container>
    </StyledNav>
  );
}

export default Navbar;
