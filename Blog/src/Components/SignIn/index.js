import React from "react";
import { useState } from "react";
import BlogContext from "../../Context/blogContext";
import {
  PageInputs,
  ProfileLink,
  ProfileNavTab,
  ProfilePage,
  ProfileView,
  FormHeading,
  PageForm,
  FormGroup,
  FormLabel,
  FormInput,
} from "./styledComponents";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  return (
    <BlogContext.Consumer>
      {({ theme, activeProfileTab, setActiveprofileTab, profileTab }) => {
        return (
          <ProfilePage>
            <ProfileView isshadow={theme.toString()}>
              <ProfileNavTab bgcolor={theme.toString()}>
                {profileTab.map((eachTab) => (
                  <ProfileLink
                    linkcolor={theme.toString()}
                    to={`/profile/${eachTab.id.toLowerCase()}`}
                    key={eachTab.id}
                    disabled={eachTab.id === activeProfileTab}
                    isbg={(eachTab.id === activeProfileTab).toString()}
                    onClick={() => setActiveprofileTab(eachTab.id)}
                  >
                    {eachTab.displayText}
                  </ProfileLink>
                ))}
              </ProfileNavTab>
              <PageInputs>
                <FormHeading formhead={theme.toString()}>SignIn</FormHeading>
                <PageForm>
                  <FormGroup>
                    <FormInput
                      type="email"
                      id="EMAIL"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email Address"
                      onFocus={() => setIsFocusedEmail(true)}
                      onBlur={() => setIsFocusedEmail(false)}
                    />
                    <FormLabel
                      htmlFor="EMAIL"
                      islabel={theme.toString()}
                      isfocused={isFocusedEmail.toString()}
                    >
                      {email.length === 0 && "Enter Email Address"}
                    </FormLabel>
                  </FormGroup>
                  <FormGroup>
                    <FormInput
                      type="password"
                      id="PASSWORD"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Password"
                      onFocus={() => setIsFocusedPassword(true)}
                      onBlur={() => setIsFocusedPassword(false)}
                    />
                    <FormLabel
                      htmlFor="PASSWORD"
                      islabel={theme.toString()}
                      isfocused={isFocusedPassword.toString()}
                    >
                      {password.length === 0 && "Enter Password"}
                    </FormLabel>
                  </FormGroup>
                </PageForm>
              </PageInputs>
            </ProfileView>
          </ProfilePage>
        );
      }}
    </BlogContext.Consumer>
  );
};

export default SignInForm;
