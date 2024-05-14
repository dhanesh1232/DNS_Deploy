import Header from "../Header";
import BlogContext from "../../Context/blogContext";

const Contact = () => (
  <BlogContext.Consumer>
    {(value) => {
      const { theme } = value;
      return (
        <>
          <Header />
          <h1>Contact</h1>
        </>
      );
    }}
  </BlogContext.Consumer>
);

export default Contact;
