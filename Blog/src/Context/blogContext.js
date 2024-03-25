import React from "react";

const BlogContext = React.createContext({
  theme: false,
  menuToggle: false,
  setTheme: () => {},
  setMenuToggle: () => {},
  productsList: [],
  /*Profile Login and Register*/
  activeProfileTab: "SIGNIN",
  profileTab: [],
  setActiveprofileTab: () => {},
  /*Profile Register*/
});
export default BlogContext;
