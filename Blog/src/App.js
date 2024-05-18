import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header";
import BlogContext from "./Context/blogContext";
import AddPhone from "./Components/AddPhone";
import Profile from "./Components/Profile";
import { PageContainer } from "./styledComponents";
import Cookies from "js-cookie";
import SignInForm from "./Components/SignIn";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import "./App.css";
import Tech from "./Components/Tech";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Contact from "./Components/Contact";
import PrivacyPolicy from "./Components/Privacy Policy";
import TermsAndConditions from "./Components/Terms And Conditions";

const profileTab = [
  {
    id: "SIGNUP",
    displayText: "SignUp",
  },
  {
    id: "SIGNIN",
    displayText: "SignIn",
  },
];

class App extends Component {
  state = {
    theme: false,
    menuToggle: false,
    activeProfileTab: profileTab[0].id,
    profileTab,
    /*products Data*/
    productsList: [],
  };

  componentDidMount() {
    const storedState = localStorage.getItem("activeTab");
    if (storedState) {
      this.setState(() => ({ activeProfileTab: JSON.parse(storedState) }));
    }
    this.getDataFromAPI();
  }

  componentDidUpdate() {
    const { activeProfileTab } = this.state;
    localStorage.setItem("activeTab", JSON.stringify(activeProfileTab));
  }

  getDataFromAPI = async () => {
    const url = "https://dns-deploy-eco-api.vercel.app/api/get-products";

    try {
      const res = await fetch(url, {
        method: "GET",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      console.log(data);
      this.setState({ productsList: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  setTheme = () => {
    this.setState((prevState) => ({ theme: !prevState.theme }));
  };

  setMenuToggle = () => {
    this.setState((prevState) => ({ menuToggle: !prevState.menuToggle }));
  };

  setActiveprofileTab = (id) => {
    this.setState({ activeProfileTab: id });
  };

  render() {
    const { theme, menuToggle, activeProfileTab, profileTab, productsList } =
      this.state;
    const admin_token = Cookies.get("admin_token");
    const sub_admin_token = Cookies.get("sub_admin_token");
    const user_token = Cookies.get("user_token");
    return (
      <BlogContext.Provider
        value={{
          theme,
          menuToggle,
          profileTab,
          activeProfileTab,
          productsList,
          setTheme: this.setTheme,
          setMenuToggle: this.setMenuToggle,
          setActiveprofileTab: this.setActiveprofileTab,
        }}
      >
        <PageContainer isbg={theme ? "#262626" : "#fff"}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-phone" component={AddPhone} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/tech" component={Tech} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route
              exact
              path="/terms-and-conditions"
              component={TermsAndConditions}
            />
            <Route
              exact
              path={
                admin_token || sub_admin_token || user_token !== undefined
                  ? `/profile`
                  : `/profile/signup`
              }
              component={Profile}
            />
            <Route exact path="/profile/signin" component={SignInForm} />
          </Switch>
        </PageContainer>
      </BlogContext.Provider>
    );
  }
}

export default App;
