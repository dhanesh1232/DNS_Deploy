import BlogContext from "../../Context/blogContext";
import Header from "../Header";
import Footer from "../Footer";
import { PrivacyPage, PrivacyBody } from "./styledComponents";
const PrivacyPolicy = () => (
  <BlogContext.Consumer>
    {(value) => {
      const { theme } = value;
      return (
        <>
          <Header />
          <PrivacyPage>
            <PrivacyBody headcolor={theme.toString()}>
              <h1>Privacy Policy</h1>
            </PrivacyBody>
            <Footer />
          </PrivacyPage>
        </>
      );
    }}
  </BlogContext.Consumer>
);
export default PrivacyPolicy;
