import { ThemeConsumer } from "styled-components";
import BlogContext from "../../Context/blogContext";
import {
  FooterPage,
  FooterCon,
  NavLinkFooter,
  PoliciesCon,
  PoliciesHeading,
  PoliciesList,
} from "./styledComponents";
const Footer = () => (
  <BlogContext.Consumer>
    {(value) => {
      const { theme } = value;
      return (
        <>
          <FooterPage>
            <PoliciesCon>
              <PoliciesHeading headcolor={theme.toString()}>
                Policies
              </PoliciesHeading>
              <PoliciesList>
                <NavLinkFooter to="/about" linkcolor={theme.toString()}>
                  About Us
                </NavLinkFooter>
                <NavLinkFooter to="/contact" linkcolor={theme.toString()}>
                  Contact Us
                </NavLinkFooter>
                <NavLinkFooter
                  to="/terms-and-conditions"
                  linkcolor={theme.toString()}
                >
                  Terms and Conditions
                </NavLinkFooter>
                <NavLinkFooter
                  to="/privacy-policy"
                  linkcolor={theme.toString()}
                >
                  Privacy Policy
                </NavLinkFooter>
              </PoliciesList>
            </PoliciesCon>
            <hr />
            <FooterCon copycolor={theme.toString()}>
              <p>Copyright &copy; </p> <p>ECO DROP</p>
            </FooterCon>
          </FooterPage>
        </>
      );
    }}
  </BlogContext.Consumer>
);
export default Footer;
