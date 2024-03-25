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
  FormButton,
  ShowPassword,
  ShowContainer,
  ShowMessage,
  FormNav,
  FormNavLink,
  FormError,
} from "./styledComponents";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any required input is empty
    if (!password || !email || password.length < 8) {
      setShowError(true);
      setErrorMsg(
        "Please fill in all fields and Password must be at least 8 characters"
      );
      return;
    }

    setShowError(false);
  };
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
                <PageForm onSubmit={handleSubmit}>
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
                      type={isShow ? "text" : "password"}
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
                  <ShowContainer>
                    <ShowPassword
                      type="checkbox"
                      id="SHOW_PASSWORD"
                      onChange={() => {
                        setIsShow(!isShow);
                      }}
                    />
                    <ShowMessage
                      htmlFor="SHOW_PASSWORD"
                      islabel={theme.toString()}
                    >
                      Show Password
                    </ShowMessage>
                  </ShowContainer>
                  <FormButton type="submit">Register</FormButton>
                  {showError && <FormError>{errorMsg}*</FormError>}
                  <FormNav
                    to="/profile/signup"
                    onClick={() => setActiveprofileTab("SIGNUP")}
                  >
                    <p>If you don't have already</p>
                    <FormNavLink> SignUp</FormNavLink>
                  </FormNav>
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
