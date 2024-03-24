import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import BlogContext from "./Context/blogContext";
import AddPhone from "./Components/AddPhone";
import Profile from "./Components/Profile";
import { PageContainer } from "./styledComponents";
import Cookies from "js-cookie";
import SignInForm from "./Components/SignIn";
import "./App.css";

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
    const url = "http://localhost:3002";
    try {
      const res = await fetch(url, {
        method: "GET",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      console.log(data);
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
    const { theme, menuToggle, activeProfileTab, profileTab } = this.state;
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
          setTheme: this.setTheme,
          setMenuToggle: this.setMenuToggle,
          setActiveprofileTab: this.setActiveprofileTab,
        }}
      >
        <PageContainer isbg={theme ? "#262626" : "#fff"}>
          <Header />
          <Switch>
            <Route exact path="/add-phone" component={AddPhone} />
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
