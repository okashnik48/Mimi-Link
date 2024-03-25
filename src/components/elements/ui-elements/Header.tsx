import React, { FC } from "react";

const Header: FC = () =>{
    return (
        <header
        style={{
          backgroundColor: "#323232",
          height: "150px",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center", color: "white", margin: "auto" }}>
          Welcome to Mini-Link
        </h1>
      </header>
    )
}

export default Header