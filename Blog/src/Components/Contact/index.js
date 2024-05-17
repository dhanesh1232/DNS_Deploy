import Header from "../Header";
import BlogContext from "../../Context/blogContext";
import { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Footer from "./../Footer";

import {
  ContactPageHome,
  ContactPageHeading,
  ContactInfoPage,
  MiniHeading,
  ContactFormPage,
  FirstGreet,
  SecondGreet,
  ThirdGreet,
  ContactFormHeading,
  ContactInfoData,
  ContactData,
  DataSpan,
  ContactSocial,
  SocialIcons,
  SocialHead,
  SocialNav,
  EndContainer,
  InputCheck,
  InputCheckCon,
  InputCheckLabel,
  ContactForm,
  ContactHeaderBody,
  ContactInputBody,
  ContactHeader,
  ContactInputLabel,
  ContactGroup,
  ContactInputTextarea,
  FormButton,
  NoteStrong,
} from "./styledComponents";

const Contact = () => {
  const [contactFormCheck, setContactFormCheck] = useState(false);
  const handleEmailClick = (event) => {
    event.preventDefault();
    window.open("mailto:ecoshopbusiness9@gmail.com?subject=Contact", "_blank");
  };
  return (
    <BlogContext.Consumer>
      {(value) => {
        const { theme } = value;
        return (
          <>
            <Header />
            <ContactPageHome>
              <ContactPageHeading headcolor={theme.toString()}>
                Contact
              </ContactPageHeading>
              <ContactInfoPage>
                <MiniHeading minicolor={theme.toString()}>
                  Contact Us
                </MiniHeading>
                <FirstGreet>We'd love to hear from you!</FirstGreet>
                <SecondGreet secondcolor={theme.toString()}>
                  Whether you have a question about our services, need
                  assistance, or just want to share your travel experiences,
                  feel free to get in touch.
                </SecondGreet>
                <ContactInfoData>
                  <ContactData navcolor={theme.toString()}>
                    <NoteStrong notecolor={theme.toString()}>
                      E-Mail:-{" "}
                    </NoteStrong>
                    <DataSpan
                      navcolor={theme.toString()}
                      href="mailto:ecoshopbusiness9@gmail.com?subject=Contact"
                      onClick={handleEmailClick}
                    >
                      ecoshopbusiness9@gmail.com
                    </DataSpan>
                  </ContactData>
                  <ContactData navcolor={theme.toString()}>
                    <NoteStrong notecolor={theme.toString()}>
                      Phone:-{" "}
                    </NoteStrong>
                    <DataSpan
                      navcolor={theme.toString()}
                      href="https://wa.me/+918143963821?text=Hello"
                      target="_blank"
                    >
                      +91-8143963821
                    </DataSpan>
                  </ContactData>
                </ContactInfoData>
                <ContactSocial>
                  <SocialHead socialcolor={theme.toString()}>
                    Social Media
                  </SocialHead>
                  <SocialIcons>
                    <SocialNav
                      iconcolor={"green"}
                      href="https://wa.me/+918143963821?text=Hello"
                      target="_blank"
                    >
                      <FaWhatsapp />
                    </SocialNav>
                    <SocialNav
                      iconcolor={"blue"}
                      href="https://www.facebook.com/profile.php?id=61558336772966"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </SocialNav>
                    <SocialNav
                      iconcolor={"purple"}
                      href="https://www.instagram.com/evil_co/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </SocialNav>
                    <SocialNav
                      iconcolor={"blue"}
                      href="https://www.linkedin.com/in/dhanesh-m-5baa9323b/"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </SocialNav>
                    <SocialNav
                      iconcolor={"yellowgreen"}
                      href="mailto:ecoshopbusiness9@gmail.com?subject=Contact"
                      onClick={handleEmailClick}
                    >
                      <BiLogoGmail />
                    </SocialNav>
                    <SocialNav
                      iconcolor={theme ? "#fff" : "#000"}
                      href="mailto:ecoshopbusiness9@gmail.com?subject=Contact"
                      onClick={handleEmailClick}
                    >
                      <FaGithub />
                    </SocialNav>
                  </SocialIcons>
                </ContactSocial>
                <ThirdGreet thirdcolor={theme.toString()}>
                  <NoteStrong notecolor={theme.toString()}>Note: </NoteStrong>
                  Alternatively, you can fill out the form below, and we'll get
                  back to you as soon as possible. Click on Check Box to Access
                  Contact Form
                </ThirdGreet>
                <EndContainer>
                  <InputCheckCon>
                    <InputCheckLabel
                      htmlFor="CONTACT_FORM"
                      labelcolor={theme.toString()}
                    >
                      Contact Us
                    </InputCheckLabel>
                    <InputCheck
                      type="checkbox"
                      id="CONTACT_FORM"
                      onChange={(e) => setContactFormCheck(!contactFormCheck)}
                    />
                  </InputCheckCon>
                </EndContainer>
              </ContactInfoPage>
              {contactFormCheck && (
                <ContactFormPage>
                  <ContactFormHeading>
                    Send Additional Information
                  </ContactFormHeading>
                  <ContactForm>
                    <ContactHeaderBody>
                      <ContactHeader>
                        <ContactInputLabel
                          htmlFor="NAME"
                          labelcolor={theme.toString()}
                        >
                          Name *
                        </ContactInputLabel>
                        <ContactInputBody
                          type="text"
                          id="NAME"
                          placeholder="Name"
                          inputcolor={theme.toString()}
                        />
                      </ContactHeader>
                      <ContactHeader>
                        <ContactInputLabel
                          htmlFor="EMAIL"
                          labelcolor={theme.toString()}
                        >
                          E Mail *
                        </ContactInputLabel>
                        <ContactInputBody
                          type="email"
                          id="EMAIL"
                          placeholder="E-Mail"
                          inputcolor={theme.toString()}
                        />
                      </ContactHeader>
                    </ContactHeaderBody>
                    <ContactGroup>
                      <ContactInputLabel
                        htmlFor="PHONE"
                        labelcolor={theme.toString()}
                      >
                        Phone *
                      </ContactInputLabel>
                      <ContactInputBody
                        id="PHONE"
                        type="text"
                        placeholder="Number"
                        inputcolor={theme.toString()}
                      />
                    </ContactGroup>
                    <ContactGroup>
                      <ContactInputLabel
                        htmlFor="MESSAGE"
                        labelcolor={theme.toString()}
                      >
                        Message *
                      </ContactInputLabel>
                      <ContactInputTextarea
                        id="MESSAGE"
                        cols="50"
                        rows="10"
                        placeholder="Enter Your Message"
                        inputcolor={theme.toString()}
                      ></ContactInputTextarea>
                    </ContactGroup>
                    <FormButton
                      type="submit"
                      value="Submit"
                      buttoncolor={theme.toString()}
                    >
                      Submit
                    </FormButton>
                  </ContactForm>
                </ContactFormPage>
              )}

              <Footer />
            </ContactPageHome>
          </>
        );
      }}
    </BlogContext.Consumer>
  );
};

export default Contact;
