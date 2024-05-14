import Header from "../Header";
import BlogContext from "../../Context/blogContext";

const Tech = () => (
  <BlogContext.Consumer>
    {(value) => {
      const { theme } = value;
      return (
        <>
          <Header />
          <h1>Technology</h1>
        </>
      );
    }}
  </BlogContext.Consumer>
);
export default Tech;
