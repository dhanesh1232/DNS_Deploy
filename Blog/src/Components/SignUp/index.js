import React from "react";
import { useState } from "react";
import BlogContext from "../../Context/blogContext";
import "./index.css";
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
  FormError,
  ShowPassword,
  ShowContainer,
  ShowMessage,
  FormNav,
  FormNavLink,
} from "./styledComponents";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedFirstName, setIsFocusedFirstName] = useState(false);
  const [isFocusedLastName, setIsFocusedLastName] = useState(false);
  const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] = useState(
    false
  );
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isFocusedPhone, setIsFocusedPhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any required input is empty
    if (
      !username ||
      !password ||
      !email ||
      !firstName ||
      !lastName ||
      !phone ||
      !confirmPassword ||
      confirmPassword.length < 8 ||
      password.length < 8
    ) {
      setShowError(true);
      setErrorMsg(
        "Please fill in all fields and password must be at least 8 characters"
      );
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
                <FormHeading formhead={theme.toString()}>SignUp</FormHeading>
                <PageForm onSubmit={handleSubmit}>
                  <FormGroup>
                    <FormInput
                      type="text"
                      id="USERNAME"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter Username"
                      onFocus={() => setIsFocusedUsername(true)}
                      onBlur={() => setIsFocusedUsername(false)}
                    />
                    <FormLabel
                      htmlFor="USERNAME"
                      islabel={theme.toString()}
                      isfocused={isFocusedUsername.toString()}
                    >
                      {username.length === 0 && "Enter Username"}
                    </FormLabel>
                  </FormGroup>
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
                      type="text"
                      id="FIRST_NAME"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter First Name"
                      onFocus={() => setIsFocusedFirstName(true)}
                      onBlur={() => setIsFocusedFirstName(false)}
                    />
                    <FormLabel
                      htmlFor="FIRST_NAME"
                      islabel={theme.toString()}
                      isfocused={isFocusedFirstName.toString()}
                    >
                      {firstName.length === 0 && "Enter First Name"}
                    </FormLabel>
                  </FormGroup>
                  <FormGroup>
                    <FormInput
                      type="text"
                      id="LAST_NAME"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter Last Name"
                      onFocus={() => setIsFocusedLastName(true)}
                      onBlur={() => setIsFocusedLastName(false)}
                    />
                    <FormLabel
                      htmlFor="LAST_NAME"
                      islabel={theme.toString()}
                      isfocused={isFocusedLastName.toString()}
                    >
                      {lastName.length === 0 && "Enter Last Name"}
                    </FormLabel>
                  </FormGroup>
                  <FormGroup>
                    <FormInput
                      type="number"
                      id="MOBILE"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter Mobile Number"
                      onFocus={() => setIsFocusedPhone(true)}
                      onBlur={() => setIsFocusedPhone(false)}
                    />
                    <FormLabel
                      htmlFor="MOBILE"
                      islabel={theme.toString()}
                      isfocused={isFocusedPhone.toString()}
                    >
                      {phone.length === 0 && "Enter Mobile Number"}
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
                  <FormGroup>
                    <FormInput
                      type={isShow ? "text" : "password"}
                      id="CONFIRM_PASSWORD"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Enter Confirm Password"
                      onFocus={() => setIsFocusedConfirmPassword(true)}
                      onBlur={() => setIsFocusedConfirmPassword(false)}
                    />
                    <FormLabel
                      htmlFor="CONFIRM_PASSWORD"
                      islabel={theme.toString()}
                      isfocused={isFocusedConfirmPassword.toString()}
                    >
                      {confirmPassword.length === 0 && "Enter Confirm Password"}
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
                    to="/profile/signin"
                    onClick={() => setActiveprofileTab("SIGNIN")}
                  >
                    <p>If you have already</p>
                    <FormNavLink> SignIn</FormNavLink>
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

export default SignUpForm;
