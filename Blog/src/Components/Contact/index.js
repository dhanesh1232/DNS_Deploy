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
          </>
        );
      }}
    </BlogContext.Consumer>
  );
};

export default Contact;
