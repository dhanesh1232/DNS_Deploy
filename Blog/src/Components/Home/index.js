import Header from "../Header";
import BlogContext from "../../Context/blogContext";

const Home = () => {
  return (
    <BlogContext.Consumer>
      {(value) => {
        const { theme } = value;
        return (
          <>
            <Header />
            <h1>Home</h1>
          </>
        );
      }}
    </BlogContext.Consumer>
  );
};
export default Home;
