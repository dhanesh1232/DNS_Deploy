import BlogContext from "../../Context/blogContext";
import Header from "../Header";
import Footer from "../Footer";
import { TermsPage, TermsBody } from "./styledComponents";
const TermsAndConditions = () => (
  <BlogContext.Consumer>
    {(value) => {
      const { theme } = value;
      return (
        <>
          <Header />
          <TermsPage>
            <TermsBody>
              <h1>Terms And Conditions</h1>
            </TermsBody>
            <Footer />
          </TermsPage>
        </>
      );
    }}
  </BlogContext.Consumer>
);
export default TermsAndConditions;
