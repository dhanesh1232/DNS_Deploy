import BlogContext from "../../Context/blogContext";
import {
  FooterPage,
  FooterCon,
  NavLinkFooter,
  PoliciesCon,
  PoliciesHeading,
  SliderTextNav,
  PoliciesList,
} from "./styledComponents";
const Footer = () => (
  <BlogContext.Consumer>
    {(value) => {
      const { theme } = value;
      return (
        <>
          <FooterPage footerbg={theme.toString()}>
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
              <p>Copyright &copy; 2023 </p>
              <SliderTextNav linkcolor={theme.toString()} to="/">
                ECO DROP
              </SliderTextNav>
            </FooterCon>
          </FooterPage>
        </>
      );
    }}
  </BlogContext.Consumer>
);
export default Footer;
