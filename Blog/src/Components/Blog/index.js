import Header from "../Header";
import BlogContext from "../../Context/blogContext";

const Blog = () => (
  <BlogContext.Consumer>
    {(value) => {
      const { theme } = value;
      return (
        <>
          <Header />
          <h1>Blog</h1>
        </>
      );
    }}
  </BlogContext.Consumer>
);

export default Blog;
