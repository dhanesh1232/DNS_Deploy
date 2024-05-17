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
                  <ContactData
                    navcolor={theme.toString()}
                    href="mailto:ecoshopbusiness9@gmail.com?subject=Contact"
                    onClick={handleEmailClick}
                  >
                    <strong>E-Mail: </strong>
                    <DataSpan navcolor={theme.toString()}>
                      ecoshopbusiness9@gmail.com
                    </DataSpan>
                  </ContactData>
                  <ContactData
                    navcolor={theme.toString()}
                    href="https://wa.me/+918143963821?text=Hello"
                    target="_blank"
                  >
                    <strong>Phone: </strong>
                    <DataSpan navcolor={theme.toString()}>
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
                  <strong>Note: </strong>Alternatively, you can fill out the
                  form below, and we'll get back to you as soon as possible.
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
                    Send Contact Informations
                  </ContactFormHeading>
                </ContactFormPage>
              )}
            </ContactPageHome>
          </>
        );
      }}
    </BlogContext.Consumer>
  );
};

export default Contact;
