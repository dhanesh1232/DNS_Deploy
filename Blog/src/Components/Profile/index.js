import React from "react";
import BlogContext from "../../Context/blogContext";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";
import {
  ProfilePage,
  UnderButton,
  UnderHead,
  UnderImg,
  UnderMaintain,
} from "./styledComponents";
import SignUpForm from "../SignUp";
import { Link } from "react-router-dom";

const Profile = () => {
  const admin_token = Cookies.get("admin_token");
  const sub_admin_token = Cookies.get("sub_admin_token");
  const user_token = Cookies.get("user_token");
  console.log(admin_token, sub_admin_token, user_token);
  return (
    <BlogContext.Consumer>
      {({ theme }) => {
        return (
          <ProfilePage>
            <Helmet>
              <title>Profile</title>
              <meta
                name="Profile"
                content="You need to login or register with your account"
              />
            </Helmet>
            {admin_token || sub_admin_token || user_token !== undefined ? (
              ""
            ) : (
              <UnderMaintain>
                <UnderImg
                  alt="under-maintain"
                  src="https://res.cloudinary.com/dhzw6k0vc/image/upload/v1715068130/Untitled_design__1_-removebg-preview_kq4m2p.png"
                />
                <UnderHead textcolor={theme.toString()}>
                  Under Maintainance Please Come back Later! <br />
                  Goto Home Page
                </UnderHead>
                <Link to="/">
                  <UnderButton>Home</UnderButton>
                </Link>
              </UnderMaintain>
            )}
          </ProfilePage>
        );
      }}
    </BlogContext.Consumer>
  );
};

export default Profile;
