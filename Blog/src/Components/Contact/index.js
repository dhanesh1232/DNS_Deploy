import Header from "../Header";
import BlogContext from "../../Context/blogContext";
import { useState } from "react";
import Popup from "reactjs-popup";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import {
  ContactPage,
  ContactHead,
  ContactBody,
  ContactSubHead,
  ContactGreetTwo,
  ContactGreet,
  ContactIconsCon,
  ContactActionHead,
  SocialMedia,
  NavIcon,
  NavIconCon,
  ContactFormCon,
  ConatactCheckCon,
  ConatactCheckLabel,
  ConatactCheck,
  ContactInfo,
  ContactForm,
  ContactFormDiv,
  ContactHeader,
  InputGroupHead,
  InputGroup,
  ContactInput,
  InputLabel,
  ContactTextarea,
} from "./styledComponents";
const Contact = () => {
  const [contactFormCheck, setContactFormCheck] = useState(false);
  console.log(contactFormCheck);
  return (
    <BlogContext.Consumer>
      {(value) => {
        const { theme } = value;
        return (
          <>
            <Header />
            <ContactPage>
              {!contactFormCheck && (
                <ContactHead textcolor={theme.toString()}>Contact</ContactHead>
              )}
              <ContactBody>
                <ContactSubHead textcolor={theme.toString()}>
                  Contact Us
                </ContactSubHead>
                <ContactGreet>We'd love to hear from you!</ContactGreet>
                <ContactGreetTwo textcolor={theme.toString()}>
                  Whether you have a question about our services, need
                  assistance, or just want to share your travel experiences,
                  feel free to get in touch.
                </ContactGreetTwo>
                <ContactInfo>
                  <ContactGreetTwo textcolor={theme.toString()}>
                    <NavIconCon
                      textcolor={theme.toString()}
                      target="_blank"
                      href="mailto:ecoshopbusiness9@gmail.com?subject=Contact About ECO Drop"
                    >
                      <strong>E-Mail:</strong> ecoshopbusiness9@gmail.com
                    </NavIconCon>
                  </ContactGreetTwo>
                  <ContactGreetTwo textcolor={theme.toString()}>
                    <NavIconCon
                      textcolor={theme.toString()}
                      target="_blank"
                      href="tel:+918143963821"
                    >
                      <strong>Phone:</strong> +91-8143963821
                    </NavIconCon>
                  </ContactGreetTwo>
                  <ContactGreetTwo textcolor={theme.toString()}>
                    <strong>Address: </strong>Renigunta, Tirupati, Andhra
                    Pradesh, India
                  </ContactGreetTwo>
                </ContactInfo>
                <ContactIconsCon>
                  <ContactActionHead textcolor={theme.toString()}>
                    Social
                  </ContactActionHead>
                  <SocialMedia>
                    <NavIcon
                      target="_blank"
                      navcolor={"green"}
                      href="https://wa.me/8143963821?text=Hello"
                    >
                      <FaWhatsapp />
                    </NavIcon>
                    <NavIcon
                      target="_blank"
                      navcolor={"blue"}
                      href="https://www.linkedin.com/in/dhanesh-m-5baa9323b/"
                    >
                      <FaLinkedinIn />
                    </NavIcon>
                    <NavIcon
                      navcolor={"purple"}
                      target="_blank"
                      href="https://www.instagram.com/evil_co/"
                    >
                      <FaInstagram />
                    </NavIcon>
                    <NavIcon
                      href="https://www.facebook.com/profile.php?id=61558336772966"
                      target="_blank"
                      navcolor={"blue"}
                    >
                      <FaFacebookF />
                    </NavIcon>
                  </SocialMedia>
                </ContactIconsCon>
                <ContactGreetTwo textcolor={theme.toString()}>
                  Alternatively, you can fill out the form below, and we'll get
                  back to you as soon as possible.
                </ContactGreetTwo>
                <ContactFormCon>
                  <ConatactCheckCon>
                    <ConatactCheckLabel
                      htmlFor="CONTACT_FORM"
                      textcolor={theme.toString()}
                    >
                      Contact
                    </ConatactCheckLabel>
                    <ConatactCheck
                      type="checkbox"
                      id="CONTACT_FORM"
                      value={contactFormCheck}
                      onChange={(e) => setContactFormCheck(!contactFormCheck)}
                    />
                  </ConatactCheckCon>
                </ContactFormCon>
              </ContactBody>
              {contactFormCheck && (
                <ContactFormDiv>
                  <ContactForm>
                    <ContactHeader>
                      <InputGroupHead>
                        <InputLabel>Name</InputLabel>
                        <ContactInput placeholder="Name" />
                      </InputGroupHead>
                      <InputGroupHead>
                        <InputLabel>Name</InputLabel>
                        <ContactInput placeholder="Name" />
                      </InputGroupHead>
                      <InputGroup></InputGroup>
                    </ContactHeader>
                  </ContactForm>
                </ContactFormDiv>
              )}
            </ContactPage>
          </>
        );
      }}
    </BlogContext.Consumer>
  );
};

export default Contact;
