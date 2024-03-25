import React, { FC } from "react";
import InputForm from "../InputForm";
import InputForStats from "../InputForStats";
import Statistics from "../Statistics";

const ShortLink: FC = () => {
  return (
    <div
      style={{
        width: "99%",
        height: "320px",
        margin: "auto",
        marginTop: "10px",
        borderRadius: "50px",
        backgroundColor: "#dd341c",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "block", marginLeft: "400px", marginTop: "10px" }}>
        <div style={{ marginTop: "80px" }}>
          <h1 style={{ color: "white", display: "flex", marginLeft: "0px" }}>
            Put short link here
          </h1>
          <InputForStats />
        </div>
      </div>

      <div style={{ display: "block" }}>
        <Statistics />
      </div>

      <img
        alt="link"
        src="/images/stat.png"
        width={200}
        height={200}
        style={{
          display: "block",
          marginTop: "50px",
          marginRight: "200px",
          fill: "coral",
        }}
      />
    </div>
  );
};

export default ShortLink;
