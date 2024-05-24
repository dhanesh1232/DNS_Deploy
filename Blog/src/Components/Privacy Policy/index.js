import BlogContext from "../../Context/blogContext";
import Header from "../Header";
import Footer from "../Footer";
import {
  PrivacyPage,
  PrivacyBody,
  PrivacyHead,
  MiniHead,
  DateLine,
  FirstStrong,
  SecondStrong,
  DescriptionCon,
  DescUnorderList,
  DescList,
  FirstHead,
  SecondHead,
  NavLinkPrivacy,
} from "./styledComponents";
const PrivacyPolicy = () => (
  <BlogContext.Consumer>
    {(value) => {
      const { theme } = value;
      return (
        <>
          <Header />
          <PrivacyPage>
            <PrivacyHead headcolor={theme.toString()}>
              Privacy Policy
            </PrivacyHead>
            <PrivacyBody>
              <MiniHead minicolor={theme.toString()}>
                Privacy Policy for ECO DROP
              </MiniHead>
              <DateLine>
                <FirstStrong firststrongcolor={theme.toString()}>
                  Effictive Date:
                </FirstStrong>
                <SecondStrong secondstrongcolor={theme.toString()} mrg="0px">
                  01/02/2024
                </SecondStrong>
              </DateLine>
              <SecondStrong secondstrongcolor={theme.toString()} mrg="15px">
                At ECO DROP, we are committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website
                www.ecodrop.com.
              </SecondStrong>
              <DescriptionCon>
                <FirstHead firstheadcolor={theme.toString()}>
                  1. Information We Collect
                </FirstHead>
                <DescUnorderList>
                  <DescList>
                    <SecondHead secondheadcolor={theme.toString()}>
                      Personal Data:{" "}
                    </SecondHead>
                    <SecondStrong
                      secondstrongcolor={theme.toString()}
                      mrg="5px"
                    >
                      When you visit our site, we may collect personally
                      identifiable information, such as your name, email
                      address, and contact details.
                    </SecondStrong>
                  </DescList>
                  <DescList>
                    <SecondHead secondheadcolor={theme.toString()}>
                      Usage Data:
                    </SecondHead>
                    <SecondStrong
                      secondstrongcolor={theme.toString()}
                      mrg="5px"
                    >
                      We may collect information about your interactions with
                      our website, such as IP addresses, browser type, and pages
                      visited.
                    </SecondStrong>
                  </DescList>
                </DescUnorderList>
              </DescriptionCon>
              <DescriptionCon>
                <FirstHead firstheadcolor={theme.toString()}>
                  2. How We Use Your Information
                </FirstHead>
                <DescUnorderList>
                  <DescList>
                    <SecondStrong
                      secondstrongcolor={theme.toString()}
                      mrg="5px"
                    >
                      To provide and maintain our service.
                    </SecondStrong>
                  </DescList>
                  <DescList>
                    <SecondStrong
                      secondstrongcolor={theme.toString()}
                      mrg="5px"
                    >
                      To notify you about changes to our service.
                    </SecondStrong>
                  </DescList>
                  <DescList>
                    <SecondStrong
                      secondstrongcolor={theme.toString()}
                      mrg="5px"
                    >
                      To allow you to participate in interactive features.
                    </SecondStrong>
                  </DescList>
                  <DescList>
                    <SecondStrong
                      secondstrongcolor={theme.toString()}
                      mrg="5px"
                    >
                      To provide customer support.
                    </SecondStrong>
                  </DescList>
                  <DescList>
                    <SecondStrong
                      secondstrongcolor={theme.toString()}
                      mrg="5px"
                    >
                      To gather analysis to improve our service.
                    </SecondStrong>
                  </DescList>
                </DescUnorderList>
              </DescriptionCon>
              <DescriptionCon>
                <FirstHead firstheadcolor={theme.toString()}>
                  3. Sharing Your Information
                </FirstHead>
                <DescUnorderList>
                  <DescList>
                    <SecondStrong
                      secondstrongcolor={theme.toString()}
                      mrg="5px"
                    >
                      We do not sell, trade, or otherwise transfer your personal
                      information to outside parties without your consent,
                      except for trusted partners who assist us in operating our
                      website and conducting our business.
                    </SecondStrong>
                  </DescList>
                </DescUnorderList>
              </DescriptionCon>
              <DescriptionCon>
                <FirstHead firstheadcolor={theme.toString()}>
                  4. Security of Your Information
                </FirstHead>
                <DescUnorderList>
                  <DescList>
                    <SecondStrong
                      secondstrongcolor={theme.toString()}
                      mrg="5px"
                    >
                      We use administrative, technical, and physical security
                      measures to protect your personal information.
                    </SecondStrong>
                  </DescList>
                </DescUnorderList>
              </DescriptionCon>
              <DescriptionCon>
                <FirstHead firstheadcolor={theme.toString()}>
                  5. Changes to This Privacy Policy
                </FirstHead>
                <DescUnorderList>
                  <DescList>
                    <SecondStrong
                      secondstrongcolor={theme.toString()}
                      mrg="5px"
                    >
                      We may update our Privacy Policy from time to time. We
                      will notify you of any changes by posting the new Privacy
                      Policy on this page.
                    </SecondStrong>
                  </DescList>
                </DescUnorderList>
              </DescriptionCon>
              <FirstHead firstheadcolor={theme.toString()}>
                Contact Us
              </FirstHead>
              <SecondStrong secondstrongcolor={theme.toString()} mrg="5px">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <NavLinkPrivacy secondstrongcolor={theme.toString()}>
                  Click Here
                </NavLinkPrivacy>
              </SecondStrong>
            </PrivacyBody>
            <Footer />
          </PrivacyPage>
        </>
      );
    }}
  </BlogContext.Consumer>
);
export default PrivacyPolicy;
