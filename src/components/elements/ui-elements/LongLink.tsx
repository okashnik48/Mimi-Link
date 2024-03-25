import React, { FC } from "react";
import InputForm from "../InputForm";

const LongLink: FC = () => {
  return (
    <div
      style={{
        width: "99%",
        height: "500px",
        margin: "auto",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        backgroundColor: "#dd341c",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{ display: "block", marginLeft: "400px", marginTop: "150px" }}
      >
        <h1 style={{ color: "white", display: "flex", marginLeft: "0px" }}>
          Put full link here
        </h1>
        <InputForm />
      </div>

      <img
        alt="link"
        src="/images/link.png"
        width={200}
        height={200}
        style={{ display: "block", marginTop: "150px", marginRight: "200px" }}
      />
    </div>
  );
};

export default LongLink;
