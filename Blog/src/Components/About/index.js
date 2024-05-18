import Header from "../Header";
import BlogContext from "../../Context/blogContext";
import {
  AboutPage,
  AboutPageHeading,
  AboutContentBody,
  FirstStrong,
  SecondStrong,
  ThirdStrong,
  InnerStrong,
  BulletPoints,
  BulletPointsList,
  NavAbout,
} from "./styledComponents";
import Footer from "../Footer";
const About = () => (
  <BlogContext.Consumer>
    {(value) => {
      const { theme } = value;
      return (
        <>
          <Header />
          <AboutPage>
            <AboutPageHeading headcolor={theme.toString()}>
              About Page
            </AboutPageHeading>
            <AboutContentBody>
              <FirstStrong firstcolor={theme.toString()} mrg="0px">
                About ECO DROP
              </FirstStrong>
              <SecondStrong secondcolor={theme.toString()} mrg="18px">
                Welcome to <strong>ECO DROP!</strong>
              </SecondStrong>
              <ThirdStrong thirdcolor={theme.toString()}>
                ECO DROP is your ultimate resource for tracking price drops and
                exploring travel destinations around the world. Our mission is
                to help you make informed decisions, whether you're planning
                your next adventure or looking for the best deals on products
                and services.
              </ThirdStrong>
              <FirstStrong firstcolor={theme.toString()} mrg="15px">
                Our Story
              </FirstStrong>
              <ThirdStrong thirdcolor={theme.toString()}>
                Founded in <InnerStrong>July 2023</InnerStrong>, ECO DROP was
                born out of a passion for travel and a keen interest in finding
                the best prices. We noticed a gap in the market for a
                comprehensive platform that combines price drop history with
                detailed travel guides. Our team consists of travel enthusiasts
                and tech experts dedicated to bringing you valuable insights and
                saving you money.
              </ThirdStrong>
              <FirstStrong firstcolor={theme.toString()} mrg="15px">
                What We Offer
              </FirstStrong>
              <BulletPoints>
                <BulletPointsList>
                  <ThirdStrong thirdcolor={theme.toString()}>
                    <InnerStrong>Price Drop History: </InnerStrong>
                    Track historical prices for a wide range of products and
                    services to ensure you get the best deals.
                  </ThirdStrong>
                </BulletPointsList>
                <BulletPointsList>
                  <ThirdStrong thirdcolor={theme.toString()}>
                    <InnerStrong>Travel Guides: </InnerStrong>
                    Discover detailed information about various tourist
                    destinations, including tips, itineraries, and must-see
                    attractions.
                  </ThirdStrong>
                </BulletPointsList>
                <BulletPointsList>
                  <ThirdStrong thirdcolor={theme.toString()}>
                    <InnerStrong>User-Friendly Experience: </InnerStrong>
                    Our platform is designed to be easy to navigate, ensuring
                    you can find the information you need quickly and
                    efficiently.
                  </ThirdStrong>
                </BulletPointsList>
              </BulletPoints>
              <ThirdStrong thirdcolor={theme.toString()}>
                Join our community of savvy travelers and deal hunters today!
              </ThirdStrong>
              <FirstStrong firstcolor={theme.toString()} mrg="15px">
                Contact Us
              </FirstStrong>
              <ThirdStrong thirdcolor={theme.toString()}>
                Have questions or feedback? Feel free to reach out to us via our
                <NavAbout linkcolor={theme.toString()} to="contact">
                  Contact Page.
                </NavAbout>
              </ThirdStrong>
              <ThirdStrong thirdcolor={theme.toString()}>
                Happy exploring and saving!
              </ThirdStrong>
              <SecondStrong secondcolor={theme.toString()} mrg="0px">
                The <InnerStrong>ECO</InnerStrong> DROP Team
              </SecondStrong>
            </AboutContentBody>
            <Footer />
          </AboutPage>
        </>
      );
    }}
  </BlogContext.Consumer>
);

export default About;
