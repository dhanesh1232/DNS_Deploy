import React from "react";
import BlogContext from "../../Context/blogContext";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";
import { ProfilePage } from "./styledComponents";
import SignUpForm from "../SignUp";

const Profile = () => {
  const admin_token = Cookies.get("admin_token");
  const sub_admin_token = Cookies.get("sub_admin_token");
  const user_token = Cookies.get("user_token");
  console.log(admin_token, sub_admin_token, user_token);
  return (
    <BlogContext.Consumer>
      {({ theme, activeProfileTab, setActiveprofileTab, profileTab }) => {
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
              <SignUpForm />
            )}
          </ProfilePage>
        );
      }}
    </BlogContext.Consumer>
  );
};

export default Profile;
