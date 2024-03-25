import React, { FC, useEffect } from "react";
import Header from "./elements/ui-elements/Header";
import LongLink from "./elements/ui-elements/LongLink";
import ShortLink from "./elements/ui-elements/ShortLink";
import Footer from "./elements/ui-elements/Footer";
import { Alert } from "antd";
import Marquee from "react-fast-marquee";

const Landing: FC = () => {
  return (
    <div>
      <Alert
        style={{ position: "absolute", width: "100%", height: "50px", marginTop: "-8px" }}
        banner
        message={
          <Marquee pauseOnHover gradient={false}>
            <div style={{ display: "block" }}>
              <h3 style={{ display: "inline-block" }}>
                Для коректної роботи сайту потрібно запустити backend з
                репозиторії{" "}
              </h3>
              <a
                style={{
                  display: "inline-block",
                  fontSize: "15px",
                  marginLeft: "20px",
                }}
                href="https://github.com/Woodfyn/it-revolution-test-1"
              >
                https://github.com/Woodfyn/it-revolution-test-1
              </a>
            </div>
          </Marquee>
        }
      />
      <Header />
      <LongLink />
      <ShortLink />
      <Footer />
    </div>
  );
};

export default Landing;
