import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BlogContext from "../../Context/blogContext";
import Cookies from "js-cookie";
import { AiOutlineUser } from "react-icons/ai";
import {
  HeaderContainer,
  LogoImage,
  NavContainer,
  MenuButton,
  NavList,
  NavPage,
  CloseButton,
  SerachPageControl,
  Line,
  MenuLine,
  Label,
  InputCheckbox,
  Slider,
  ProfileContainer,
  HeaderMainContainer,
  NavLink,
} from "./styledComponent";

const Header = () => {
  const { theme, menuToggle, setTheme, setMenuToggle } =
    useContext(BlogContext);
  const admin_token = Cookies.get("admin_token");
  const sub_admin_token = Cookies.get("sub_admin_token");
  const user_token = Cookies.get("user_token");
  const activeTabStorage = localStorage.getItem("activeTab");
  const parsedTab = activeTabStorage
    ? JSON.parse(activeTabStorage)?.toLowerCase()
    : "";

  const isProfile = theme ? "#000" : "#fff";

  return (
    <HeaderMainContainer>
      
      <HeaderContainer themecolor={theme ? "#000" : "#fff"}>
        <Link to="/">
          <LogoImage
            src="https://res.cloudinary.com/dhzw6k0vc/image/upload/v1710437887/ECO-Shop_New-removebg-preview_t8rpoz.png"
            alt="my_logo"
          />
        </Link>
        <NavContainer>
          <NavPage isshow={menuToggle.toString()} isbgtheme={theme.toString()}>
            <SerachPageControl>
              <CloseButton
                type="button"
                onClick={() => {
                  setMenuToggle();
                }}
              >
                <Line
                  isshow={menuToggle.toString()}
                  menuline={theme.toString()}
                />
                <Line
                  isshow={menuToggle.toString()}
                  menuline={theme.toString()}
                />
              </CloseButton>
              <Label>
                <InputCheckbox
                  type="checkbox"
                  checked={theme}
                  onChange={setTheme}
                />
                <Slider isbg={theme.toString()} />
              </Label>
              <ProfileContainer ispro={theme.toString()}>
                <Link
                  to={
                    admin_token || sub_admin_token || user_token !== undefined
                      ? `/profile`
                      : `/profile/${parsedTab}`
                  }
                  onClick={() => {
                    setMenuToggle();
                  }}
                >
                  <AiOutlineUser color={isProfile} />
                </Link>
              </ProfileContainer>
            </SerachPageControl>
            <NavList>
              <NavLink
                linkcolor={theme.toString()}
                to="/"
                onClick={() => {
                  setMenuToggle();
                }}
              >
                Home
              </NavLink>
              <NavLink
                linkcolor={theme.toString()}
                to="/explore"
                onClick={() => {
                  setMenuToggle();
                }}
              >
                Explore
              </NavLink>
              {admin_token ||
                (sub_admin_token !== undefined && (
                  <>
                    <NavLink
                      linkcolor={theme.toString()}
                      to="/add-items"
                      onClick={() => {
                        setMenuToggle();
                      }}
                    >
                      Add
                    </NavLink>
                    <NavLink
                      linkcolor={theme.toString()}
                      to="/test-items"
                      onClick={() => {
                        setMenuToggle();
                      }}
                    >
                      Test
                    </NavLink>
                  </>
                ))}
              <NavLink
                linkcolor={theme.toString()}
                to="/tech"
                onClick={() => {
                  setMenuToggle();
                }}
              >
                Tech
              </NavLink>
              <NavLink
                linkcolor={theme.toString()}
                to="/blog"
                onClick={() => {
                  setMenuToggle();
                }}
              >
                Blog
              </NavLink>
              <NavLink
                linkcolor={theme.toString()}
                to="/about"
                onClick={() => {
                  setMenuToggle();
                }}
              >
                About
              </NavLink>
              <NavLink
                linkcolor={theme.toString()}
                to="/contact"
                onClick={() => {
                  setMenuToggle();
                }}
              >
                Contact
              </NavLink>
            </NavList>
          </NavPage>
        </NavContainer>
        {menuToggle ? (
          ""
        ) : (
          <MenuButton
            onClick={() => {
              setMenuToggle();
            }}
          >
            <MenuLine menuline={theme.toString()} />
            <MenuLine menuline={theme.toString()} />
            <MenuLine menuline={theme.toString()} />
          </MenuButton>
        )}
      </HeaderContainer>
    </HeaderMainContainer>
  );
};

export default Header;
