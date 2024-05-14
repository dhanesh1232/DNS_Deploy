import Header from "../Header";
import BlogContext from "../../Context/blogContext";

const About = () => (
  <BlogContext.Consumer>
    {(value) => {
      const { theme } = value;
      return (
        <>
          <Header />
          <h1>About</h1>
        </>
      );
    }}
  </BlogContext.Consumer>
);

export default About;
