import React from "react";
import { useState } from "react";
import BlogContext from "../../Context/blogContext";
import Popup from "reactjs-popup";
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
  ShowGroup,
  UserCodeInput,
  UserContainer,
  VerifyContainer,
  VerifyView,
  VerifyForm,
  VerifyTitle,
  VerifyInput,
  VerifyCon,
  VerifyButton,
  VerifyError,
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
  const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] =
    useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isFocusedPhone, setIsFocusedPhone] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [userCode, setUserCode] = useState("");
  //Sign Up Steps
  const [otpResponse, setOtpResponse] = useState("");
  const [otpStatus, setOtpStatus] = useState(false);
  const [verificationErrorMsg, setVerificationErrorMsg] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !username ||
      !password ||
      !email ||
      !firstName ||
      !lastName ||
      !phone ||
      !confirmPassword ||
      confirmPassword.length < 8 ||
      password.length < 8 ||
      (isCode && !userCode)
    ) {
      setShowError(true);
      setErrorMsg(
        "Please fill in all fields and password must be at least 8 characters"
      );
      return;
    }
    setShowError(false);
    const userDetails = {
      username,
      email,
      firstName,
      lastName,
    };
    const res = await fetch("http://localhost:3002/api/mail-verfication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    const data = await res.json();
    if (res.status === 200) {
      setOtpStatus(data.success);
      console.log(data);
    } else {
      null;
    }
  };
  /*OTP verification Step*/
  const verifyOTPAndRegister = async (e) => {
    e.preventDefault();
    if (otpResponse === "") {
      setVerificationStatus(true);
      setVerificationErrorMsg("Please enter OTP");
      return;
    }
    const userDetails = {
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      confirmPassword: confirmPassword,
      userCode: userCode,
      userOtp: otpResponse,
    };
    console.log(userDetails);
    const res = await fetch("http://localhost:3002/api/verify-otp-register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    const data = await res.json();
    console.log(data);
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
                    <ShowGroup>
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
                    </ShowGroup>
                    <UserContainer>
                      <ShowPassword
                        type="checkbox"
                        id="IS_CODE"
                        onChange={() => {
                          setIsCode(!isCode);
                        }}
                      />
                      {!isCode && (
                        <ShowMessage
                          islabel={theme.toString()}
                          htmlFor="IS_CODE"
                        >
                          Refferal Code
                        </ShowMessage>
                      )}
                      {isCode && (
                        <UserCodeInput
                          value={userCode}
                          placeholder="Enter User Code"
                          onChange={(e) => setUserCode(e.target.value)}
                        />
                      )}
                    </UserContainer>
                  </ShowContainer>
                  <FormButton type="submit">Register</FormButton>
                  {showError && <FormError>{errorMsg}*</FormError>}
                  <FormNav
                    to="/profile/signin"
                    onClick={() => setActiveprofileTab("SIGNIN")}
                  >
                    <p>If you have already</p>
                    <FormNavLink ispara={theme.toString()}>SignIn</FormNavLink>
                  </FormNav>
                </PageForm>
              </PageInputs>
              <Popup open={otpStatus}>
                <VerifyContainer>
                  <VerifyView>
                    <VerifyForm onSubmit={verifyOTPAndRegister}>
                      <VerifyTitle>
                        Enter One Time Password
                        <VerifyCon>
                          <VerifyInput
                            placeholder="Enter OTP"
                            onChange={(e) => setOtpResponse(e.target.value)}
                          />
                          <VerifyButton type="submit">Verify</VerifyButton>
                        </VerifyCon>
                        {verificationStatus && (
                          <VerifyError>{verificationErrorMsg}</VerifyError>
                        )}
                      </VerifyTitle>
                    </VerifyForm>
                  </VerifyView>
                </VerifyContainer>
              </Popup>
              <Popup></Popup>
            </ProfileView>
          </ProfilePage>
        );
      }}
    </BlogContext.Consumer>
  );
};

export default SignUpForm;
