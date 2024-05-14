import Header from "../Header";
import BlogContext from "../../Context/blogContext";

const Explore = () => (
  <BlogContext.Consumer>
    {(value) => {
      const { theme } = value;
      return (
        <>
          <Header />
          <h1>Explore</h1>
        </>
      );
    }}
  </BlogContext.Consumer>
);

export default Explore;
